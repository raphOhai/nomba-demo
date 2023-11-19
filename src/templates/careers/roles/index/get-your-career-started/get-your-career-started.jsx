import React, { useContext, useState, useMemo } from "react";
import ctl from "@netlify/classnames-template-literals";

import { Container, NLink, Ntext } from "components";
import { AppContext } from "states/context";
import { pluralize } from "utils/helpers";
import { countBy } from "lodash";

import Select from "react-select";

import WhiteChevronRight from "svgs/white-chevron-right.svg";
import SearchIcon from "svgs/search-icon.svg";

const GetYourCareerStarted = () => {
  const { isFetchingRoles, availableRoles, departments, locations } = useContext(AppContext);

  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [needle, setNeedle] = useState('');

  const departmentOptions = useMemo(() => {
    return [
      { value: '', label: 'All departments', count: availableRoles.length },
      ...departments.map(department => ({
        count: countBy(availableRoles, 'department')[department],
        value: department,
        label: department,
      })),
    ];
  }, [isFetchingRoles, departments]);

  const departmentLabels = useMemo(() => {
    return departmentOptions.map(option => (
      <article
        key={option.label}
        className="cursor-pointer mt-6"
        onClick={() => setDepartment(option.value)}>
        <Ntext
          color="primary-100"
          value={`${option.label} - ${option.count}`}
          className={option.value === department && "!text-secondary"}
          variant="text3"
        />
      </article>
    ));
  }, [isFetchingRoles, department]);

  const locationOptions = useMemo(() => {
    return [
      { value: '', label: 'All locations' },
      ...locations.map(location => ({ value: location, label: location }))
    ];
  }, [isFetchingRoles, locations]);

  const matchingRoles = useMemo(() => {
    const hasMatch = (whole, part) => whole.toLowerCase().includes(part.toLowerCase())
    return availableRoles.filter(
      role => hasMatch(role.department, department)
        && hasMatch(role.location, location)
        && hasMatch(role.title, needle)
    );
  }, [isFetchingRoles, department, location, needle]);

  if (availableRoles.length === 0) {
    return (
      <section className={noRolesWrapperStyle}>
        <article className="-mt-36">
          <l-jelly color="#FFCC00" size="128" />
        </article>
      </section>
    );
  }

  return (
    <Container className={wrapperStyle}>
      <section className={navStyle}>
        <NLink href={{ url: "/careers" }}>
          <Ntext variant="p14" color="secondary-100" value="Careers" />
        </NLink>
        <WhiteChevronRight />
        <Ntext
          color="secondary"
          className="cursor-pointer"
          value="View available roles"
          variant="p14"
        />
      </section>
      <Ntext
        color="primary-100"
        value="Get your Career Started with Nomba"
        className="max-w-[768px] !leading-[80px] !-tracking-[2.56px] my-5"
        variant="h1"
      />
      <Ntext
        value="Join us in building tools that simplify payments and drive business growth."
        variant="text4lite"
        color="n-grey1"
      />
      <section className={infoAreaStyle}>
        <aside className={asideStyle}>
          <Select
            options={locationOptions}
            onChange={option => setLocation(option.value)}
            defaultValue={locationOptions[0]}
            className={locationSelectStyle}
            styles={{
              indicatorSeparator: () => ({ display: 'none' }),
              dropdownIndicator: baseStyles => ({
                ...baseStyles,
                '&:hover': { color: 'white' },
                paddingRight: '16px',
                color: 'white',
              }),
              singleValue: baseStyles => ({
                ...baseStyles,
                paddingLeft: '10px',
                color: 'white',
              }),
              menuList: baseStyles => ({
                ...baseStyles,
                paddingRight: '10px',
                paddingLeft: '10px',
              }),
              control: baseStyles => ({
                ...baseStyles,
                backgroundColor: '#383838',
                borderColor: '#383838',
                '&:hover': {
                  borderColor: '#383838',
                },
                boxShadow: 'none',
                cursor: 'pointer',
              }),
              option: baseStyles => ({
                ...baseStyles,
                backgroundColor: '#383838',
                cursor: 'pointer',
                color: 'white',
                ':active': {
                  backgroundColor: '#383838',
                },
                '&:hover': {
                  color: '#FFCC00',
                },
              }),
              input: baseStyles => ({
                ...baseStyles,
                caretColor: 'transparent',
                paddingLeft: '10px',
                color: 'white',
              }),
              menu: baseStyles => ({
                ...baseStyles,
                backgroundColor: '#383838',
                borderRadius: '5px',
              }),
            }}
          />
          <Ntext
            value="Filter by department"
            className="!font-bold mt-12"
            variant="text3"
            color="n-grey1"
          />
          {departmentLabels}
        </aside>
        <section className={infoBoardStyle}>
          <article className={inputWrapperStyle}>
            <SearchIcon />
            <input
              className={searchInputStyle}
              placeholder="Search for your dream job..."
              onChange={event => setNeedle(event.target.value)}
              value={needle}
            />
          </article>
          <Ntext
            value={
              matchingRoles.length > 0
                ? `Showing ${pluralize(matchingRoles.length, 'role')}`
                : 'No matching roles found'
            }
            className="!font-bold mt-12 mb-6"
            variant="text3"
            color="n-grey1"
          />
          {
            matchingRoles.map(role => (
              <NLink
                key={role.slug} className={roleWrapperStyle}
                href={{ url: `/careers/roles/${role.slug}` }}>
                <Ntext
                  color="primary-100"
                  className="!font-bold -tracking-[0.4px]"
                  variant="text5lite"
                  value={role.title}
                />
                <Ntext color="primary-100" value={role.location} variant="text3" />
              </NLink>
            ))
          }
        </section>
      </section>
    </Container>
  );
};

const noRolesWrapperStyle = ctl(`
  flex
  justify-center
  items-center
  min-h-screen
  text-center
  px-8
`);

const locationSelectStyle = ctl(`
  cursor-pointer
  rounded-[5px]
  bg-n-grey6
  py-[5px]
  w-full
`);

const inputWrapperStyle = ctl(`
  flex
  space-x-2.5
  items-center
  rounded-[5px]
  bg-n-grey6
  w-full
  px-5
  py-3
`);

const roleWrapperStyle = ctl(`
  flex
  flex-col
  space-y-3
  rounded-[5px]
  bg-n-grey6
  w-full
  mb-5
  p-5
`);

const searchInputStyle = ctl(`
  placeholder-white
  text-white
  bg-n-grey6
  w-full
`);

const infoBoardStyle = ctl(`
  flex
  flex-col
  w-full
`);

const infoAreaStyle = ctl(`
  flex
  mt-[94px]
  items-start
  w-full
`);

const wrapperStyle = ctl(`
  flex
  flex-col
  py-[108px]
`);

const asideStyle = ctl(`
  min-w-[280px]
  lg:flex-col
  lg:flex
  hidden
  mr-6
`);

const navStyle = ctl(`
  flex
  space-x-2.5
  items-center
`);

export { GetYourCareerStarted };
