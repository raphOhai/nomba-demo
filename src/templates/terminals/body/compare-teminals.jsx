import React from "react";
import { Container, Ntext } from "components";
import { comparisonData, nombaTerminals } from "../terminals";
import "./styles.css";
const CompareTerminals = ({ title }) => {
  return (
    <Container className="pb-[80px] md:pt-[50px]">
      <div className="py-[50px] ">
        <div className="md:max-w-[671px] md:mx-auto section_header4 md:text-center">
          <Ntext variant="h2" className="text-center" color="primary-100" data-animation="h">
            {title}
          </Ntext>
        </div>
      </div>
      <div className="w-full  md:overflow-hidden overflow-x-scroll scrollbar-hide ">
        <table className="md:w-full w-[700px] ">
          <thead>
            <tr>
              <th></th>
              {nombaTerminals.map(r => (
                <th className="">
                  <div className="h-[100px] flex flex-col justify-end align-baseline items-center">
                    <img width="41" height="71" src={r.path} alt="" />
                    <div class=" block text-white">{r.title}</div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonData.map(d => (
              <tr className="text-white ">
                <td>{d.title}</td>
                <td>
                  <div className="flex flex-col justify-center items-center">{d.mini}</div>
                </td>
                <td>
                  <div className="flex flex-col justify-center items-center">{d.lite}</div>
                </td>
                <td>
                  <div className="flex flex-col justify-center items-center">{d.pro}</div>
                </td>
                <td>
                  <div className="flex flex-col justify-center items-center">{d.max}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export { CompareTerminals };
