import React, { useState } from "react";
import ctl from "@netlify/classnames-template-literals";

import { Container, Button, Ntext } from "components";
import { FileInput } from "./file-input";

import constants from "config/constants.json";

import UploadIcon from "svgs/upload-cloud.svg";
import CancelIcon from "svgs/cancel.svg";
import FileIcon from "svgs/file.svg";

import Dropzone from "react-dropzone";

import "./index.scss";

const { SUBMIT_JOB_APPLICATION_URL } = constants;

const ApplyForJob = ({ role }) => {
  const [curriculumVitae, setCurriculumVitae] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [coverLetter, setCoverLetter] = useState(null);
  const [phoneNumber, setPhonNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const isFormFilled = curriculumVitae && emailAddress
    && coverLetter && phoneNumber && firstName && lastName;

  const handleCoverLetterDrop = (files, rejections) => {
    if (!rejections.length) {
      setCoverLetter(files[0]);
    }
  }

  const handleCurriculumVitaeDrop = (files, rejections) => {
    if (!rejections.length) {
      setCurriculumVitae(files[0]);
    }
  }

  const handleCurriculumVitaeCancel = event => {
    event.stopPropagation();
    setCurriculumVitae(null);
  }

  const handleCoverLetterCancel = event => {
    event.stopPropagation();
    setCoverLetter(null);
  }

  const submitApplication = () => {
    new Promise(resolve => setTimeout(resolve, 2048)).then(() => {
      setIsSubmitting(false);
    })
  }

  const handleSubmit = event => {
    event.preventDefault();

    if (!isSubmitting && isFormFilled) {
      setIsSubmitting(true);
      submitApplication();
    }
  }

  return (
    <section id="apply-for-job" className="bg-white">
      <Container className={sectionWrapperStyle}>
        <Ntext
          className="!leading-[80px] !-tracking-[1.92px] text-center mb-12"
          value="Apply for Job"
          variant="h2"
        />
        <form onSubmit={handleSubmit} className={formWrapperStyle}>
          <article className={inputGroupStyle}>
            <article className={inputArticleStyle}>
              <label htmlFor="first-name" className={inputLabelStyle}>
                <span>First name</span>
              </label>
              <div className={regularInputWrapperStyle}>
                <input
                  id="first-name"
                  onChange={event => setFirstName(event.target.value)}
                  placeholder="Enter your first name"
                  defaultValue={firstName}
                  className={inputStyle}
                  type="text"
                  required
                />
              </div>
            </article>
            <article className={inputArticleStyle}>
              <label htmlFor="last-name" className={inputLabelStyle}>
                <span>Last name</span>
              </label>
              <div className={regularInputWrapperStyle}>
                <input
                  id="last-name"
                  onChange={event => setLastName(event.target.value)}
                  placeholder="Enter your last name"
                  defaultValue={lastName}
                  className={inputStyle}
                  type="text"
                  required
                />
              </div>
            </article>
            <article className={inputArticleStyle}>
              <label htmlFor="email-address" className={inputLabelStyle}>
                <span>Email address</span>
              </label>
              <div className={regularInputWrapperStyle}>
                <input
                  id="email-address"
                  onChange={event => setEmailAddress(event.target.value)}
                  placeholder="Enter your email address"
                  defaultValue={emailAddress}
                  className={inputStyle}
                  type="email"
                  required
                />
              </div>
            </article>
            <article className={inputArticleStyle}>
              <label htmlFor="phone-number" className={inputLabelStyle}>
                <span>Phone number (optional)</span>
              </label>
              <div className={regularInputWrapperStyle}>
                <input
                  id="phone-number"
                  onChange={event => setPhonNumber(event.target.value)}
                  placeholder="Enter your phone number"
                  defaultValue={phoneNumber}
                  className={inputStyle}
                  type="tel"
                  required
                />
              </div>
            </article>
            <article className={inputArticleStyle}>
              <label htmlFor="curriculum-vitae" className={inputLabelStyle}>
                <span>Résumé</span>
              </label>
              <FileInput
                onCancel={handleCurriculumVitaeCancel}
                onDrop={handleCurriculumVitaeDrop}
                file={curriculumVitae}
                id="curriculum-vitae"
              />
            </article>
            <article className={inputArticleStyle}>
              <label htmlFor="cover-letter" className={inputLabelStyle}>
                <span>Cover letter (optional)</span>
              </label>
              <FileInput
                onCancel={handleCoverLetterCancel}
                onDrop={handleCoverLetterDrop}
                file={coverLetter}
                id="cover-letter"
              />
            </article>
          </article>
          <Button
            text="Submit application"
            className={`${isFormFilled ? 'opacity-100' : 'opacity-30'} ${buttonStyle}`}
            isLoading={isSubmitting}
            type="submit"
          />
        </form>
      </Container>
    </section>
  );
};

const regularInputWrapperStyle = ctl(`
  border-n-grey1
  rounded-[5px]
  border-solid
  items-center
  bg-white
  border
  w-full
  p-4
`);

const sectionWrapperStyle = ctl(`
  flex
  flex-col
  bg-white
  pb-[100px]
  pt-8
`);

const formWrapperStyle = ctl(`
  flex
  flex-col
  bg-m-light
  rounded-[5px]
  lg:px-[208px]
  lg:pb-[128px]
  lg:pt-[82px]
  md:p-16
  w-full
  py-16
  px-8
`);

const inputArticleStyle = ctl(`
  flex
  flex-col
  space-y-[5px]
`);

const inputLabelStyle = ctl(`
  leading-[18px]
  text-primary
  text-xs
`);

const inputGroupStyle = ctl(`
  grid
  gap-8
  grid-cols-1
  lg:grid-cols-2
  lg:grid-flow-row
  lg:gap-y-[42px]
  lg:gap-x-6
  w-full
`);

const buttonStyle = ctl(`
  !font-medium
  !text-sm
  mt-16
  w-48
`);

const inputStyle = ctl(`
  placeholder-n-grey3
  autofill:!bg-white
  text-primary
  bg-white
  w-full
`);

export { ApplyForJob };
