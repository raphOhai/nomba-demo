import Layout from "components/layout";
import React from "react";
import { Container, Ntext, PolicyPageHeader, ReadMore } from "components";

const TermsOfUse = () => {
  return (
    <Layout title="Privacy Policy">
      <PolicyPageHeader heading="Terms of use" date="April 12, 2022" />
      <Container className="policy-page">
        <Ntext variant="p16">
          These General Terms of Service (“General Terms”) are a legal agreement
          between you, as a current or prospective User of Nomba’s services
          (“you,” “your”, “User”) and Nomba Financial Services Limited,
          (”Nomba,” “we,” “our” or “us”) and govern your use of Nomba’s
          services, including mobile applications, websites, software, hardware,
          and other products and services (collectively, the “Services”).
        </Ntext>
        <Ntext variant="p16">
          By signing up for an account or using any of the Services, you agree
          to these General Terms of Service and any policies referenced herein
          (“Policies”), including our Privacy Notice. You also agree to any
          additional terms specific to Services you use including services and
          products provided by a bank, financial institution, or other partners
          (“Service Partners”), subject to additional terms and conditions
          (“Additional Terms”), such as those listed below, which become part of
          your agreement with us (collectively, the “Terms”). If you are using
          the Services on behalf of a business or any other corporate entity,
          you represent to us that you have authority to bind that business or
          entity to these Terms, and that business accepts these Terms.
        </Ntext>
        <Ntext variant="p16">
          Please read all of our Terms carefully and if you do not agree to any
          or all of these Terms. DO NOT USE THE SERVICES
        </Ntext>

        <ul className="policy-nav">
          <li>
            <Ntext
              variant="h4"
              value="Point of Sale Terminals Terms of Service"
            />
            <ReadMore
              text="Read our Point of Sale Terminals Terms of Service"
              to="/pos-terms-of-service"
              color="primary"
            />
          </li>
          <li>
            <Ntext variant="h4" value="Savings Terms of Service" />
            <ReadMore
              text="Read our Savings Terms of Service"
              to="/savings-terms-of-service"
              color="primary"
            />
          </li>
        </ul>

        <Ntext variant="h2" value="Account Registration" />

        <Ntext variant="p16">
          To access the Nomba (formerly Kudi) Mobile Application (“the App”) and
          the Services, you will be required to provide certain registration
          details or other information which may include but is not limited to
          your name, bank account or card details, information about the
          location of your business, etc. You represent and warrant that all the
          information you provide will be correct, current and complete. If we
          believe that the information you provide is not current, incorrect,
          incomplete or misleading, we have the right to refuse you access to
          the Services and to terminate or suspend your access at any time. You
          may also be required to update your information from time to time in
          order to capture accurate data through an account upgrade feature
          which will be provided for users via the App
        </Ntext>
        <Ntext variant="p16">
          To use the App, you must provide your Bank Verification Number (BVN)
          and/ or any other valid means of identification (ID). The following
          items shall constitute sufficient proof of (ID): national ID card,
          driver’s licence or international passport if you are a Nigerian
          national; and original alien certificate, diplomatic ID or passport if
          you are a foreign national or any other valid means of ID as
          communicated by us from time to time.
        </Ntext>
        <Ntext variant="p16">
          Where an Account is opened without BVN or wrong BVN, such Account will
          be restricted until the BVN is provided and or updated on such
          Account. Nomba is required by the CBN to verify all BVN’s collected.
          By giving Nomba your BVN, you authorise Nomba to collect and save your
          data from the BVN database as part of our KYC information to fulfil
          regulatory requirements. All KYC data collected will be treated as
          confidential. You also permit us to use your BVN to monitor, prevent
          and detect fraudulent activities and share the same with CBN
          authorised stakeholders and other regulatory and law enforcement
          organisations for the purpose of deterring financial fraud.
        </Ntext>
        <Ntext variant="p16">
          We reserve the right to screen all Users against applicable sanction
          lists and the BVN watchlist database and may decline account opening
          applications in the event they are found to be on any of the lists.
        </Ntext>
        <Ntext variant="p16">
          We may, at our sole discretion, reject any attempt to use the Services
          and resources if any of the requirements set out in these General
          Terms are not met or if you fail to provide us with satisfactory proof
          of ID.
        </Ntext>
        <Ntext variant="p16">
          We rely on the accuracy of the information you provide when opening
          and maintaining your Nomba Account/Wallet . You may be required to
          verify information previously provided or provide additional
          information in the course of applying for or receiving certain
          Services.
        </Ntext>
        <Ntext variant="p16">
          You acknowledge and agree that we may use and provide any data you
          provide to our partners and third-party service providers to validate
          the information you have provided and determine your eligibility for
          the Services, as described in the Privacy Notice. This validation may
          include sending a representative to your location or business address
          provided during onboarding.
        </Ntext>
        <Ntext variant="h2" value="Age of Users" />
        <Ntext variant="p16">
          To use the Service, you must be, and represent and warrant that you
          are 18 years and over and of legal competence to enter into a binding
          agreement with us, and are not otherwise prohibited from using the App
          and Services in accordance with these terms and conditions or any
          relevant laws.
        </Ntext>
        <Ntext variant="h2" value="Service Description" />

        <Ntext variant="p16">
          <ul>
            <li>
              {" "}
              The App permits registered Users to make a profit while performing
              financial transactions on behalf of members of the public
              including without limitation, transfers, withdrawals, airtime
              purchase, paying cable and electricity bills, using Nomba Wallets.
            </li>
            <li>
              All transactions shall be denominated in Nigerian Naira and Kobo.
              The App may not recognize any other monetary value. You hereby
              agree to round off any transaction value to the nearest Nigerian
              currency.{" "}
            </li>
            <li>
              Subject to the prescribed transaction limits and the provisions of
              these Terms and Conditions, the balance of your Nomba Wallet is
              redeemable at any time and shall be disposed of only in accordance
              with your instructions given via the App.{" "}
            </li>
            <li>
              Nomba may in its absolute discretion, restrict or limit the number
              of Nomba Wallets that Users may operate at any one time. You
              acknowledge that Nomba is neither a bank nor a deposit-taking
              institution.{" "}
            </li>
          </ul>
        </Ntext>
        <Ntext variant="h2" value="Transactions" />

        <Ntext variant="p16">
          After your Nomba Account/Wallet has been opened and activated, you
          will be able to initiate the transaction types as made available by
          Nomba from time to time (“Transactions”) including the following:
        </Ntext>
        <Ntext variant="p16">
          <ul>
            <li>Fund your Nomba Account/ Wallet through a debit card;</li>
            <li>
              Send money to personal or third party accounts from your Nomba
              Account/Wallet ;
            </li>
            <li>
              Withdraw cash from your Nomba Account/Wallet through participating
              ATM networks;
            </li>
            <li>Purchase Prepaid Airtime; </li>
            <li>
              Pay utility bills or make one-off or periodic payments or
              remittances to participating utility providers, financial
              institutions, charity organisations, etc.;{" "}
            </li>
            <li>
              Manage your Nomba Wallet (e.g. check balance inquiries, change
              PIN, etc.);{" "}
            </li>
            <li>
              Any other Transactions may be introduced by Nomba from time to
              time.
            </li>
          </ul>
        </Ntext>
        <Ntext variant="p16">
          You acknowledge that no interest will be paid on any funds held in
          your Nomba Account/Wallet .
        </Ntext>
        <Ntext variant="p16">
          Nomba does not warrant that all functionalities and or transactions on
          the App shall be available at all times. Nomba may withdraw any
          functionality and or transaction or the entire App as a direct result
          of new or amended legislation, statutory instrument, government
          regulations or policy or any other compelling reason.
        </Ntext>
        <Ntext variant="p16">
          Nomba may provide additional functionalities and or transactions on
          the App following integration with platforms of financial institutions
          and other entities providing you with specified services. Such
          functionalities may give you limited access to platforms of the
          financial institutions or other entities. By using such
          functionalities to gain access to other platforms, you hereby agree to
          indemnify Nomba against, and hold Nomba harmless from any losses
          arising from your access to such external platforms.
        </Ntext>
        <Ntext variant="p16">
          In the event of any review of our business planning, technical, public
          interest or operational reasons, changes within the industry,
          recommendations from regulatory bodies or similar events, Nomba may
          vary these terms and conditions or policies affecting usage and shall
          notify you of such changes through appropriate means. Your continued
          use of the App shall be deemed to be your acceptance of all such
          varied terms and conditions or policies.
        </Ntext>
        <Ntext variant="p16">
          Transaction limits and charges as prescribed by Nomba shall apply each
          time you send money, pay bills or use other functionalities that
          effect the transfer of funds from your Nomba Account/Wallet.
        </Ntext>
        <Ntext variant="p16">
          <>
            Your transaction request will not be completed: <br />
            <br />
            <ul>
              <li>
                If you have insufficient funds in your Nomba Account/ Wallet to
                complete the transaction and or to cover the charges for the
                transaction;{" "}
              </li>
              <li>
                If you have reached the maximum Nomba Account/ Wallet balance
                limit prescribed by the App;{" "}
              </li>
              <li>
                If you have reached the daily limit prescribed by the App by
                virtue of applicable risk and KYC thresholds set by Nomba;
              </li>
              <li>
                If your Nomba Account/ Wallet has been temporarily suspended or
                permanently frozen on valid grounds;
              </li>
              <li>
                If there are any other compelling reasons such as temporary
                system delay or outage.
              </li>
            </ul>
          </>
        </Ntext>
        <Ntext variant="p16">
          <>
            You will be charged a fee for any transactions you undertake on the
            App. The fee will be in accordance with the published tariffs.
            <br />
            <br />
            <ul>
              <li>
                If the funds in your Nomba Account/Wallet are not sufficient to
                conduct your transaction (including covering the transaction
                cost) request in full, the transaction will not be completed and
                no funds will be debited from your Nomba Account/Wallet.{" "}
              </li>
              <li>
                Where the App is unable to complete a transaction you will be
                notified by way of a pop-up message on your mobile device.
              </li>
              <li>
                In the event that a transaction fails but your Nomba
                Account/Wallet is debited, you shall inform the Nomba customer
                support of this occurrence. Upon receipt of this report Nomba
                shall conduct an investigation and effect a refund to your Nomba
                Account/Wallet only where the failed transaction was occasioned
                by a glitch or technical failure of the App.
              </li>
              <li>
                A transaction once completed is final and irrevocable. As such,
                Nomba shall not be under any compulsion to reverse any
                transaction.{" "}
              </li>
              <li>
                Notwithstanding the import of clause 10.7, Nomba reserves the
                right, at its sole discretion, to cancel or reverse a
                transaction if reasonable grounds such as manifest error or
                fraud are shown and PROVIDED THAT the Recipient has not redeemed
                the funds covered by the transaction and the reversal claim is
                made within one (1) month of the erroneous transaction date.
              </li>
              <li>
                Nomba shall not be compelled to refund or compensate the sender
                if the funds are sent to a recipient mistakenly or in error or
                fraudulently or under duress and you hereby agree to hold Nomba
                harmless for any losses arising from a mistaken, erroneous or
                fraudulent transfer of funds or any transfer of funds from your
                Nomba Account/Wallet effected under duress or under coercion or
                criminal force. Nomba shall, in its own accord, choose to aid
                this recovery by reaching out to the User credited erroneously
                without more. All refund shall be at the credited Users
                volition.
              </li>
            </ul>
          </>
        </Ntext>
        <Ntext variant="h2" value="Restrictions" />
        <Ntext variant="p16">
          <>
            You may not, nor may you permit any third party, directly or
            indirectly, to: You may use this Service only for lawful purposes
            and in accordance with Terms. You agree not to use this Service
            directly or indirectly:
            <ul>
              <li>
                In any way that violates any applicable national or
                international law or regulation.
              </li>
              <li>
                In any way that infringes upon the rights of others, or in any
                way is illegal, threatening, fraudulent, or harmful, or in
                connection with any unlawful, illegal, fraudulent, or harmful
                purpose or activity.
              </li>
              <li>
                To engage in any other conduct that restricts or inhibits
                anyone’s use or enjoyment of Service, or which, as determined by
                us, may harm or offend Company or users of Service or expose
                them to liability.
              </li>
              <li>
                {" "}
                In any manner that could disable, overburden, damage, or impair
                Service or interfere with any other party’s use of Service,
                including their ability to engage in real-time activities
                through Service.
              </li>
            </ul>
            <br />
            You also agree not to: <br />
            <br />
            <ul>
              <li>
                access or monitor any material or information on our system
                using any manual process or robot, spider, scraper, or other
                automated means;{" "}
              </li>
              <li>
                {" "}
                perform or attempt to perform any actions that would interfere
                with the proper working of the Services
              </li>
            </ul>
          </>
        </Ntext>
        <Ntext variant="p16">
          If we reasonably suspect that your Nomba Account/Wallet has been used
          for an unauthorised, illegal, or criminal purpose, you give us express
          authorization to share information about you, your Nomba
          Account/Wallet , and any of your transactions with law enforcement.
        </Ntext>
        <Ntext variant="h2" value="Fraud Mitigation Measures" />
        <Ntext variant="p16">
          You agree to maintain a record sheet showing Identification details,
          phone numbers and addresses of clients for whom payments and bills are
          processed. Ensure that all required KYC information requested at sign
          up is accurately recorded, with clear pictures of the account owners.
          Non compliance with this requirement may cause your account to be
          flagged as suspicious and placed on a fraud watchlist. You also
          acknowledge that you are required to flag and report in writing
          showing the phone numbers and destination account numbers of suspected
          initiators and beneficiaries any suspicious transaction that they may
          be forced to process at the nearest law enforcement office and provide
          us with a report of the same for our records.
        </Ntext>
        <Ntext variant="h2" value="Disclosure, Data Use and Retention " />

        <Ntext variant="p16">
          You hereby expressly consent and authorise us to disclose any
          transaction data or information pertaining to your Nomba
          Account/Wallet to any law enforcement, investigative or regulatory
          authority including without limitation the Nigerian Police, Central
          Bank of Nigeria, Economic and Financial Crimes Commission, or any
          competent anti-money laundering authority for the purposes of any
          genuine enquiry or investigation or to any third party to which you
          have separately, either in writing or electronically through the
          Services or otherwise, authorised Nomba to disclose transaction data
          or information pertaining to you or your usage of the Services,
          including your Nomba Account/Wallet provided that any consent given to
          us to disclose information to any third party (not being a law
          enforcement, investigative or regulatory authority) pursuant to this
          clause may be withdrawn at any time.
        </Ntext>
        <Ntext variant="p16">
          You acknowledge that where your Nomba Account/Wallet is determined by
          a competent judicial authority as containing proceeds of any criminal
          or money laundering activities, Nomba may be required by law to
          surrender funds in your Nomba Account/Wallet t o any statutory fund
          created for the purpose of recovering the proceeds of crime or to any
          other duly authorised account/beneficiary.
        </Ntext>
        <Ntext variant="p16">
          You acknowledge that we may retain your transaction data for a period
          of up to five (5) years or more.
        </Ntext>
        <Ntext variant="h2" value="Privacy/ Your Content" />
        <Ntext variant="p16">
          We prioritise the protection of your privacy rights. We ensure our use
          of your personal data is in tune with regulatory prescription and
          global standards. Your use of the Services signifies your continuing
          consent to our Privacy Notice, which governs our collection and use of
          personal information that you supply to us. You can examine our
          Privacy Notice any time by clicking on “PRIVACY” . Nomba shall only
          divulge your information to a third party strictly in line with the
          NDPR 2019 regulation and only to third parties whose services are
          directly incidental to the services rendered to you by Nomba.
        </Ntext>

        <Ntext
          variant="h2"
          value="Proprietary Rights (Copyright and Trademark Infringement)"
        />
        <Ntext variant="p16">
          Using the Services does not give you ownership of or any rights to any
          materials, functionalities, operations and content on the Services,
          all of which are owned exclusively and reserved by us and protected by
          copyright and other intellectual property rights.
        </Ntext>
        <Ntext variant="p16">
          Trademarks, service marks, and logos appearing on the Services are the
          property of Nomba or the party that provided the trademarks, service
          marks, and logos to Nomba and any party that provided trademarks,
          service marks, and logos to Nomba retain all rights with respect to
          any of their respective trademarks, service marks, and logos appearing
          on the Services.
        </Ntext>
        <Ntext variant="p16">
          You acknowledge and will respect all such copyright and other
          intellectual property rights we own or may own in the look and feel of
          the Service including the App and its contents including any text,
          graphics, data, stills, photographs and moving images. You further
          agree that you will not infringe our copyright by any method or manner
          now known or as may exist in the future.
        </Ntext>
        <Ntext variant="h2" value="Security" />

        <Ntext variant="p16">
          We have implemented technical and organisational measures designed to
          secure your personal information from accidental destruction, loss,
          alteration and from unauthorised access, use, alteration, or
          disclosure. However, we cannot guarantee that unauthorised third
          parties will never be able to defeat those measures or use your
          personal information for improper purposes. You provide your personal
          information at your own risk.
        </Ntext>
        <Ntext variant="p16">
          Access to your Nomba Account/Wallet is password protected You hereby
          agree to guard your PIN and not to disclose it to any third party
          including staff of Nomba or any person purporting to have authority to
          request for it.
        </Ntext>
        <Ntext variant="p16">
          You hereby agree to guard and are solely responsible for safeguarding
          your password and for restricting access to the Services from your
          compatible mobile devices and computer(s). You will immediately notify
          us of any unauthorised use of your password or Nomba Account/Wallet .
        </Ntext>
        <Ntext variant="p16">
          You acknowledge that you shall be solely responsible for the security
          of your PIN. Nomba shall not be liable for any disclosure of your PIN
          to any third party and you hereby agree to hold Nomba harmless from
          any losses that may result from any PIN disclosure.
        </Ntext>
        <Ntext variant="p16">
          You are responsible for all instructions given to Nomba in relation to
          your Nomba Account/Wallet.
        </Ntext>
        <Ntext variant="p16">
          We shall deem each correct PIN/ password entry as being performed by
          the legitimate owner of the Nomba Account/Wallet and shall regard all
          subsequent transactions as validly performed by you
        </Ntext>
        <Ntext variant="p16">
          You will immediately take all reasonable steps to mitigate the effects
          of a security breach and will cooperate with Nomba and provide all
          information requested by Nomba to remediate the breach. Any assistance
          provided by Nomba in relation to a security breach does not in any way
          operate as acceptance or acknowledgement that Nomba is in any way
          responsible or liable to you or any other party in connection with
          such breach.
        </Ntext>
        <Ntext variant="p16">
          You are prohibited from using any services or facilities provided in
          connection with the Services to compromise security or tamper with
          system resources and/or Nomba Accounts. The use of tools designed for
          compromising security (e.g., password guessing programs, cracking
          tools, or network probing tools) is strictly prohibited. If you become
          involved in any violation of system security, Nomba reserves the right
          to release your details to system administrators in order to assist
          them in resolving security incidents.
        </Ntext>
        <Ntext variant="p16">
          Nomba reserves the right to investigate suspected violations of these
          terms and conditions.
        </Ntext>
        <Ntext
          variant="h2"
          value="Electronic Consent, Delivery of Notices 
and Communications "
        />

        <Ntext variant="p16">
          You agree that submitting your application for a Nomba Account and
          indicating your agreement to these General Terms of Use electronically
          during the application process constitutes your electronic signature
          to this General Terms of Use. You also agree that your electronic
          consent has and will have the same legal effect as a physical
          signature. By agreeing to the terms of the Platform Agreement, you
          consent to us providing Notices and account statements to you
          electronically, and understand that this consent has the same legal
          effect as a physical signature.
        </Ntext>
        <Ntext variant="p16">
          You agree that we may provide disclosures and notices required by law
          and other information about your Nomba Account to you electronically,
          by posting it on our website, pushing notifications through the
          Services, or by emailing it to the email address listed in your Nomba
          Account or that you otherwise provided to Nomba. Electronic
          disclosures and notices have the same meaning and effect as if we had
          provided you with paper copies. Such disclosures and notices are
          considered received by you within twenty-four (24) hours of the time
          posted to our website, or within twenty-four (24) hours of the time
          emailed to you unless we receive notice that the email was not
          delivered. If you wish to withdraw your consent to receiving
          electronic communications, contact Nomba Support. If we are not able
          to support your request, you may need to terminate your Nomba Account.
        </Ntext>

        <Ntext variant="h2" value="Fees" />
        <Ntext variant="p16">
          You are responsible for the payment of all applicable fees. All
          charges applicable to the use of the Services are as may be
          communicated to you from time to time by Nomba and are subject to
          change at any time at Nomba’s sole discretion.
        </Ntext>
        <Ntext variant="p16">
          All fees are deducted at source and are subject to change at any time
          at Nomba’s sole discretion.
        </Ntext>
        <Ntext variant="p16">
          Fees payable on each transaction will be deducted from your Nomba
          Account/Wallet at the completion of each transaction. Your new balance
          on completion of the transaction shall be notified to you by SMS.
        </Ntext>
        <Ntext variant="h2" value="Taxes" />
        <Ntext variant="p16">
          Taxes include any and all present or future taxes, charges, fees,
          levies or other assessments except withholding tax, imposed by any
          domestic or foreign taxing authority (“Taxes”).
        </Ntext>
        <Ntext variant="h2" value="Promotions" />
        <Ntext variant="p16">
          Any contests, prize draws or other promotions (collectively,
          “Promotions”) made available through Service may be governed by rules
          that are separate from these Terms of Service. If you participate in
          any Promotions, please review the applicable rules as well as our
          Privacy Notice. If the rules for a Promotion conflict with these Terms
          of Service, Promotion rules will apply.
        </Ntext>
        <Ntext
          variant="h2"
          value="Amendments, Modification, Suspension 
and Termination"
        />
        <Ntext variant="p16">
          We reserve the right at our sole discretion to suspend or terminate
          the agreement if you use the Service for unauthorised purposes.
        </Ntext>
        <Ntext variant="p16">
          You acknowledge that we may be compelled by law to suspend and/or
          freeze your Nomba Account/Wallet or decline to execute your
          transaction requests if there are reasonable grounds to suspect that
          your account with us has been or is being or may be used to receive or
          send funds in connection with any criminal or fraudulent activity.
        </Ntext>
        <Ntext variant="p16">
          We may, at our discretion, close your account with us at any time for
          any reason upon giving one (1) weeks’ notice to you and making
          reasonable attempts to reach you. In such circumstances, you shall be
          entitled to the balance of any funds remaining in your Nomba
          Account/Wallet.
        </Ntext>
        <Ntext variant="p16">
          We may send notices to you at any postal address provided by you or
          electronically by SMS to your mobile telephone number with which you
          registered on the App.
        </Ntext>
        <Ntext variant="p16">
          This agreement terminates automatically upon the death of the User who
          has signed up to use the App.
        </Ntext>
        <Ntext variant="p16">
          You may also terminate the General Terms and Additional Terms
          applicable to your Account by deactivating your Account at any time.
        </Ntext>
        <Ntext variant="h2" value="Effect of Termination" />
        <Ntext variant="p16">
          You may also terminate the General Terms and Additional Terms
          applicable to your Account by deactivating your Account at any time.
        </Ntext>
        <Ntext variant="p16">
          <>
            If these General Terms or your Nomba Account is suspended,
            deactivated or terminated or for any reason:
            <ul>
              <li>
                All rights granted under these Terms including your right to use
                your Nomba Account will end,{" "}
              </li>
              <li>
                You agree to immediately terminate your use of all Services,
              </li>
              <li>
                {" "}
                We may (but have no obligation to) delete your information and
                account data stored on our servers, and
              </li>
              <li>
                We will not be liable to you or any third party for
                compensation, reimbursement, or damages for any termination or
                suspension of the services, or for deletion of your information
                or account data. In addition to any outstanding payment
                obligations , the following sections of these General Terms
                survive and remain in effect in accordance with their terms upon
                termination
              </li>
            </ul>
          </>
        </Ntext>
        <Ntext variant="h2" value="Ownership and Licence" />

        <Ntext variant="p16">
          Nomba owns all Nomba Property. We grant you a limited, non-exclusive,
          revocable, non-transferable, non-sublicensable licence to use the Paid
          Services, and a royalty-free, limited, non-exclusive, revocable,
          non-transferable, non-sublicensable licence to use the Services as
          authorised in these General Terms. We may make updates to the Services
          available to you, which you must accept to continue using the
          Services. Any such updates may be subject to additional terms made
          known to you at that time. This licence terminates upon termination of
          this General Terms of Use unless terminated earlier by us.
        </Ntext>
        <Ntext variant="p16">
          We will not share any Company Data with third parties for marketing
          unaffiliated products without your consent, but may use Company Data
          to identify Services, Third-Party Services, and programs that we
          believe may be of interest to you, including as part of a rewards or
          benefits program.
        </Ntext>
        <Ntext variant="p16">
          You grant Nomba a worldwide, irrevocable licence to use, modify,
          distribute, copy, and create derivative works from Company Data for
          the purposes identified in this General Terms of Use.
        </Ntext>
        <Ntext variant="h2" value="Indemnity" />
        <Ntext variant="p16">
          You hereby agree to indemnify and hold us, our parent, subsidiaries
          and affiliated companies and their respective directors, officers,
          employees and representatives, harmless from any and all claims,
          liabilities, litigations, costs and expenses (including but not
          limited to attorney fees) that you or any third party assert, or may
          assert, based on or relating to your use, or use by any individual
          using your PIN in accessing the Services.
        </Ntext>
        <Ntext variant="h2" value="Disclaimer and No Warranties" />
        <Ntext variant="p16">
          <>
            THE CONTENT OF THIS APP AND THE SERVICES ARE PROVIDED “AS IS” AND
            WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED. WE
            DISCLAIM ALL WARRANTIES, INCLUDING ANY IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR
            NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE FUNCTIONS OR CONTENT
            CONTAINED IN THIS APP WILL BE INTERRUPTED OR ERROR-FREE, THAT
            DEFECTS WILL BE CORRECTED, OR THAT THIS SITE OR SERVER THAT MAKES IT
            AVAILABLE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE DO NOT
            WARRANT OR MAKE ANY REPRESENTATION REGARDING USE, OR THE RESULT OF
            USE OF THE CONTENT IN TERMS OF ACCURACY, RELIABILITY, OR OTHERWISE
            INCLUDING THE CONTINUOUS, UNINTERRUPTED OR SECURE ACCESS TO THE APP,
            WHICH MAY BE AFFECTED BY FACTORS OUTSIDE Nomba’S CONTROL OR MAY BE
            SUBJECT TO PERIODIC TESTING, REPAIR, MAINTENANCE OR UPGRADES. THE
            CONTENT MAY INCLUDE TECHNICAL ERRORS AND THE COMPANY MAY MAKE
            CHANGES, OR IMPROVEMENTS AT ANY TIME. YOU, AND NOT US, ASSUME THE
            ENTIRE COST OF ALL NECESSARY SERVICING REPAIR OR CORRECTION IN THE
            EVENT OF ANY LOSS OR DAMAGE ARISING FROM THE USE OF THIS APP OR IT’S
            CONTENT. WE MAKE NO WARRANTIES THAT YOUR USE OF THE CONTENT WILL NOT
            INFRINGE THE RIGHTS OR OTHERS AND ASSUME NO LIABILITY OR
            RESPONSIBILITY FOR ERRORS OR OMISSIONS IN SUCH CONTENT. <br />
            <br />
            The relationship of Cosmic Intelligent Labs Limited and the User
            established by this Agreement is that of independent contractors,
            and nothing contained in this Agreement shall be construed to:{" "}
            <br />
            <br />
            <ul>
              <li>
                Give either party the power to direct and control the day-to-day
                activities of the other,
              </li>
              <li>
                Constitute the parties as partners, joint ventures, co-owners or
                otherwise as participants in a joint or common undertaking, or
              </li>
              <li>
                Allow either party to create or assume any obligation on behalf
                of the other party for any purpose whatsoever.
              </li>
              <li>
                You understand that we cannot and do not guarantee or warrant
                that our App or content made available thereon will be free of
                any viruses, worms, Trojans horses, or other codes that may
                manifest contaminating or destructive properties. You are
                responsible for implementing sufficient procedures and
                checkpoints to satisfy your particular requirements for accuracy
                of data input and output, and for maintaining a means external
                to this site for this reconstruction of any lost data. We do not
                assume any responsibility or risk for your use of the internet.
              </li>
              <li>
                The content, features and functionalities on the App are not
                necessarily complete and up to date and should not be used to
                replace any written reports, statements, or notices provided by
                us.
              </li>
            </ul>
          </>
        </Ntext>

        <Ntext variant="h2" value="Limitation of Liability" />
        <Ntext variant="p16">
          <>
            Nomba will not be responsible for any claims whatsoever arising from
            your use of the App. Nomba specifically disclaims all liability for
            any damages or losses, including, without limitation, direct,
            indirect, consequential, special, incidental or punitive damages
            deemed or alleged to have resulted from or caused by but not limited
            to:
            <ul>
              <li>
                Transactions made to unintended recipients or payments made in
                incorrect amounts due to the input of incorrect information by
                you;
              </li>
              <li>
                Transactions made from your Nomba Account/Wallet by an
                unauthorised third party who passes all identity and
                verification checks;
              </li>
              <li>Any fraud, deception or misrepresentations by you,</li>
              <li>
                Any damages resulting from a recipient’s decision not to accept
                a transaction made by you through the App,
              </li>
              <li>
                Failure of any other telecommunications or data transmission
                system other than the App;
              </li>
              <li>
                Any result of any acts of government or authority, any act of
                God or force majeure.
              </li>
            </ul>
          </>
        </Ntext>
        <Ntext variant="p16">
          You shall not assert claims for monetary or other damages arising from
          the App, your use thereof or its contents, facilities or
          functionalities. We shall not be liable for any indirect, special,
          incidental, consequential or exemplary damages whatsoever including
          loss of revenue, or income, pain, and suffering, emotional distress,
          or similar damages, resulting from the use of this App, even if we
          knew or should have known of the possibility of such damage.{" "}
        </Ntext>
        <Ntext variant="p16">
          You understand and accept that to the fullest possible extent
          permitted in law, we accept no responsibility for any loss or damage
          or injury caused to you or your hardware or software whether we cause
          such loss or injury directly or indirectly.{" "}
        </Ntext>

        <Ntext
          variant="h2"
          value="Compliance With Applicable Laws,Regulations and Court Orders "
        />
        <Ntext variant="p16">
          If we are notified of or become aware of a summons, court order or
          other legal process or request (e.g. subpoenas, garnishments, levies,
          warrants) or if we otherwise believe we are required to do so in order
          to comply with applicable law or regulatory requirements, we may take
          certain actions, including without limitation providing information in
          our possession, custody, or control to comply with orders, subpoenas,
          or other requests for information; holding payments to/from your Brex
          Account or holding or otherwise restricting funds in your Nomba
          Account/Wallet; or suspending, terminating, closing, or limiting
          access to your Nomba Account/Wallet. We will decide, in our sole
          discretion, which action is required or appropriate. We do not have an
          obligation to contest or appeal any court order or legal process
          involving you or your Nomba Account/Wallet. We are not responsible to
          you for any losses or consequences you sustain due to actions we may
          take to comply with a legal order, legal process or request, or
          applicable law. We may, but are not required to, provide you with
          Notice of any court order, legal process or requests, or actions we
          may take in conjunction with them.
        </Ntext>

        <Ntext variant="h2" value="Governing Law and Dispute Resolution" />
        <Ntext variant="p16">
          These terms and conditions will be governed and interpreted pursuant
          to the laws of the Federal Republic of Nigeria. Any and all disputes,
          claims or litigation arising from or related in any way to this Terms
          or any provisions herein will be resolved by mediation at the Lagos
          Multi Door Court House, Lagos State, Nigeria. Where such dispute
          persists, it shall then be resolved by Nigerian Courts in Lagos State.
          The parties hereby waive any objections against and expressly submit
          to the exclusive jurisdiction of the Nigerian Courts in Lagos State.
        </Ntext>

        <Ntext variant="h2" value="Limitation on Time" />
        <Ntext variant="p16">
          Any action or proceeding by you relating to any dispute in respect of
          the Services must commence within one year after the cause of action
          accrues.
        </Ntext>

        <Ntext variant="h2" value="Third Party Services" />
        <Ntext variant="p16">
          All third party products and services included or sold with the
          Services are provided solely according to the warranty and other terms
          specified by the third party service provider, who is solely
          responsible for service and support for its product. For service,
          support, or warranty assistance, you should contact the manufacturer
          directly, you may also contact us and we will refer your request to
          the third party service provider. Nomba MAKES NO REPRESENTATIONS OR
          WARRANTIES, EXPRESS OR IMPLIED, WITH RESPECT TO SUCH THIRD PARTY
          PRODUCTS AND SERVICES, AND EXPRESSLY DISCLAIMS ANY WARRANTY OR
          CONDITION OF MERCHANTABILITY, NON-INFRINGEMENT, OR FITNESS FOR A
          PARTICULAR PURPOSE.
        </Ntext>

        <Ntext
          variant="h2"
          value="Third Party Beneficiaries/ Rights of Third Parties"
        />
        <Ntext variant="p16">
          These terms and conditions are between you and us and not any third
          party, and these terms and conditions are not intended to confer any
          rights of any nature upon any party other than you and us and our
          legal associates.
        </Ntext>

        <Ntext variant="h2" value="Miscellaneous and Other Provisions " />
        <Ntext variant="p16">
          <ul>
            <li>
              In using the Services, you agree you will comply with all
              applicable laws and regulations.
            </li>
            <li>
              We may revise these General Terms of Use at any time by updating
              this posting.
            </li>
            <li>
              We reserve the right in our sole discretion to deny you or any
              other User access to the App without notice and to decline to
              provide use of the Services to any User that is in breach of these
              terms and conditions.
            </li>
            <li>
              We shall not be liable to you for any breach of these Terms and
              Conditions or any failure to provide or delay in providing any
              service through the App or any other channel resulting from any
              event or circumstances beyond our reasonable control including
              without limitation, strikes, fire, explosion or accident,
              breakdown of systems or network access.
            </li>
            <li>
              The enforceability or otherwise of any provisions of these General
              Terms of Use shall not affect the enforceability of the rest of
              these terms and conditions.
            </li>
            <li>
              This Agreement will not be assignable or transferable by you. You
              acknowledge that you are an independent agent and Nomba shall not
              be liable for your acts or omissions.
            </li>
          </ul>
        </Ntext>
      </Container>
      <div></div>
    </Layout>
  );
};

export default TermsOfUse;
