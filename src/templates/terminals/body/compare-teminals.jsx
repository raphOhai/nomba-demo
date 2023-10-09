import React from "react";
import { Container, Ntext } from "components";
import { comparisonData, nombaTerminals } from "../terminals";
import "./styles.css";
const CompareTerminals = ({ title }) => {
  return (
    <Container className="md:py-[50px] ">
      <div className="py-[50px] ">
        <div className="md:max-w-[671px] md:mx-auto section_header4 md:text-center">
          <Ntext variant="h2" className="text-center" color="primary-100" data-animation="h">
            {title}
          </Ntext>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th>~</th>
            {nombaTerminals.map(r => (
              <th>
                <div className="flex flex-col justify-center items-center">
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
    </Container>
  );
};

export { CompareTerminals };
