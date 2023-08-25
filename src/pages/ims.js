import Layout from "components/layout";
import React from "react";
import { Ntext, PolicyPageHeader } from "components";
import { Container } from "components";
import { StaticImage } from "gatsby-plugin-image";
import { Flex } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Layout title="INTEGRATED MANAGEMENT SYSTEM">
      <PolicyPageHeader heading="INTEGRATED MANAGEMENT SYSTEM Objective Policy Statement" />
      <Container className="policy-page">
        <Flex justifyContent={"center"}>
          <StaticImage src="../assets/images/ISO.jpg" alt="ISO" />
        </Flex>
        <Ntext variant="h2" value="Purpose" />
        <Ntext variant="p16">
          This policy statement defines the framework within which the integrated management system (information
          security management system and business continuity management system) will be managed across Nomba and
          demonstrates top management commitment and support for integrated management system throughout Nomba. This
          policy iserves as the basis from which all information security, business continuity and data protection
          related policies emanate.
        </Ntext>
        <Ntext variant="h2" value="Scope" />
        <Ntext variant="p16">
          This policy is applicable to all Nomba personnel, contractors, vendors, and other parties, and covers all
          information entrusted to or owned by Nomba and stored, processed, or transmitted on the organizations
          information systems and operated by the organization
        </Ntext>
        <Ntext variant="h2" value="Information Security Objectives" />
        <Ntext variant="p16">
          Nomba has set the following major information security and business continuity objectives:
        </Ntext>
        <Ntext variant="p16">
          <b>Objective 1</b>– Achieve 100% protection of Confidentiality and integrity of Nomba Information assets.
        </Ntext>
        <Ntext variant="p16">
          <b>Objective 2</b>– Achieve 90% Information Security Awareness culture across the organisation.
        </Ntext>
        <Ntext variant="p16">
          <b>Objective 3</b>– Provide assurance of information systems resilience – 99.6 availability.
        </Ntext>
        <Ntext variant="h2" value="Business Continuity Objectives" />
        <Ntext variant="p16">
          <b>Objective 1</b>– Ensure the safety and welfare of Nomba staff and visitors who are within its premises at
          the time of an incident.
        </Ntext>
        <Ntext variant="p16">
          <b>Objective 2</b>– Comply with the Nomba requirements, contractual, regulatory, and legal requirement.
        </Ntext>
        <Ntext variant="p16">
          <b>Objective 3</b>– Preserve the ability to meet stakeholder expectations in a wide range of circumstances,
          including meeting 3rd party arrangements.
        </Ntext>
        <Ntext variant="p16">
          <b>Objective 4</b>– Provide for an orderly and expedited recovery after a disruptive event.
        </Ntext>
        <Ntext variant="h2" value="Integrated Management System Policy" />
        <Ntext variant="p16">
          Nomba is committed to the confidentiality, integrity and availability of her information assets and shall
          implement measures through the establishment.
          <br />
          <br />
          Nomba is committed to continual improvement of her information security and business continuity program to
          protect the organization’s information assets against all threats.
          <br />
          <br />
          Nomba is also committed to complying with all applicable legal, regulatory, and contractual requirements
          related to information security and business continuity in her services and operations.
          <br />
          <br />
          All users and custodians of information assets owned by or entrusted to Nomba shall comply with this policy
          and exercise a duty of care in relation to the storage, processing, and transmission of the organization’s
          information and information systems.
          <br />
          <br />
        </Ntext>
      </Container>
      <div></div>
    </Layout>
  );
};

export default PrivacyPolicy;
