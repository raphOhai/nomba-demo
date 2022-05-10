import Layout from "components/layout";
import React from "react";
import { Container, Ntext, PolicyPageHeader } from "components";

const TermsOfUse = () => {
  return (
    <Layout title="Privacy Policy">
      <PolicyPageHeader
        heading="Point of Sale Terminals 
Terms of Service"
        date="April 12, 2022"
      />
      <Container className="policy-page">
        <Ntext variant="p16">
          These POS Terms and Conditions (POS Terms and Conditions) constitute a
          legally binding agreement made between you, whether personally or on
          behalf of an entity (“you”/ “the User”) and Nomba Financial Services
          Limited ( “Nomba”, “we,” “us” or “our”), concerning your access to and
          use of our Terminal. You agree that by accepting these terms, you have
          read, understood, and agree to be bound by all of these Terms and
          Conditions. Nomba may revise these Terms and Conditions of Use at any
          time by updating this posting.
        </Ntext>
        <Ntext variant="h2" value="Definitions" />

        <Ntext variant="p16">
          <ul>
            <li>
              <b>User(s)</b>means a person or entity who successfully subscribes
              to the Application. The term User shall include the said Usert’s
              personal representatives, successors in title and assigns as well
              as persons acting with the User’s authority such as servants or
              employees.
            </li>
            <li>
              {" "}
              <b>Users Locations</b> means the physical location or place used
              by the User to conduct business as stated in User’s biodata
              information.{" "}
            </li>
            <li>
              <b>Users Wallet</b>
              means a digital account on the Nomba (formerly Nomba) Mobile
              Application that, when funded, allows the User to access the
              Services.
            </li>
            <li>
              <b>Agreement</b>
              means these POS Terms and Conditions
            </li>
            <li>
              {" "}
              <b>Application</b> means the Nomba (formerly Nomba) Mobile
              Application
            </li>
            <li>
              {" "}
              <b>Card Holder</b> means an individual or company issued with a
              payment card linked to an account at a licensed financial
              institution who uses the card to effect a transaction on the
              Terminal(s).
            </li>
            <li>
              <b>Commencement Date</b> means the date the Terminal(s) is linked
              to the User’s Wallet.
            </li>

            <li>
              <b>“Nomba”, “we”, “us”, “our”</b> means Nomba Financial Services
              Limited and where applicable, its employees, officers and
              authorized agents.
            </li>
            <li>
              <b>Caution Fee</b> means the POS Lease fee as communicated by us
              from time to time, and paid by the User before the issuance of
              Terminal(s) CBN means the Central Bank of Nigeria.
            </li>
            <li>
              <b>Return Fee/ Depreciation Fee</b> means the fee payable for the
              value of the POS device minus all of the accumulated loss in
              usage. Depreciation fee is calculated from the receipt of the
              Terminal and at:
              <ul>
                <li> Month 1 - 75%</li>
                <li>Month 2 - 50%</li>
                <li>Month 3 - 25%</li>
              </ul>
            </li>
            <li>
              <b>Hot list</b> means list of deactivated cards that were reported
              missing, stolen, lost or damaged by the card holders.
            </li>
            <li>
              <b>Issuing Bank</b> means Banks or financial institutions that
              have issued payment cards to their Customers
            </li>
            <li>
              {" "}
              <b>Lease Application</b> means the request for a POS initiated by
              a User via the Application Payment Card Any debit card issued by
              any Financial Institution in Nigeria.
            </li>

            <li>
              <b>Payment Terminal Service Aggregator/PTSA</b> means the Nigeria
              Inter-Bank Settlement System, the entity mandated to, among
              others, act as the Automated Clearing House and payment terminal
              service aggregator and the Central Switch for Nigeria.
            </li>

            <li>
              {" "}
              <b>Payment Terminal Services Provider/PTSP</b> means a CBN
              licensed entity responsible for the deployment, maintenance and
              support of payment terminals on behalf of acquiring banks.
            </li>
            <li>
              {" "}
              <b>POS</b> Point of sale terminal
            </li>
            <li>
              {" "}
              <b>POS Lease</b> means an arrangement whereby the User ‘leases’
              the POS terminal from Nomba and subject the payment of the Caution
              Fee as stipulated/ communicated from time to time via the
              Application .
            </li>
            <li>
              <b>Terminal(s)</b> means the point of sale devices running on the
              approved software supplied by the Company to the User to
              facilitate payments at the User's Locations.
            </li>
            <li>
              <b>Transactions</b> means all transactions done through the point
              of sale terminal.
            </li>
          </ul>
        </Ntext>

        <Ntext variant="h2" value="Services" />

        <Ntext variant="p16">
          Nomba may in its absolute discretion, and subject to the Lease
          Application by a User, deploy its Terminals to the User as it deems
          fit. Nomba may lease a Terminal to a User subject to the fulfillment
          of the prerequisites as communicated to the User from time to time
          including but not limited to set transaction thresholds and the
          payment of the lease sum.
        </Ntext>
        <Ntext variant="p16">
          Nomba may also at his discretion and subject to additional terms and
          condition distribute its POS through designated partners and
          aggregators subject to additional terms and the paymemet of the Lease
          sum by the said partner
        </Ntext>
        <Ntext variant="h2" value="Ownership" />

        <Ntext variant="p16">
          The Terminal(s) remain the property of Nomba, but the responsibility
          for the Terminal shall remain with the User irrespective of the
          caution fee paid by the User.
        </Ntext>
        <Ntext variant="p16">
          Terminals received by a User through any designated partner in Clause
          2 above may be returned through the designated partner or directly to
          Nomba. Notwithstanding Nomba shall not be liable to any such User in
          lease fees not directly paid to it and consequently the relevant
          clauses on Depreciation and Return Fee may not be applicable
        </Ntext>
        <Ntext variant="p16">
          The User must obtain a Terminal Received Voucher (TRV) from Nomba
          certifying the condition of the Terminals upon return/surrender of the
          Terminal(s) to Nomba.
        </Ntext>
        <Ntext variant="p16">
          Where the User obtains a TRV from Nomba certifying that the
          Terminal(s) returned/surrendered is in good condition, Nomba shall pay
          the Return Fee paid by the User subject to depreciation and logistics
          costs. Depreciation is calculated from the receipt of the Terminal and
          as specified above i.e. Month 1 at 75%, Month 2 at 50% and Month 3 at
          25%. For clarification purposes, a User shall not be entitled to any
          Return Fee after four months from the receipt of the Terminals.
        </Ntext>
        <Ntext variant="h2" value="Point Of Sale (POS)/Transaction Fees" />
        <Ntext variant="p16">
          The transaction fees payable by the User shall be a percentage of each
          Transactions or a flat fee per Transaction as decided by Nomba and
          communicated from time to time
        </Ntext>
        <Ntext variant="p16">
          The transaction fee shall be paid to Nomba and this will be directly
          deducted from the User’s Wallet with Nomba.
        </Ntext>
        <Ntext variant="p16">
          The transaction fees payable by the User may vary subject to the
          transaction sum.
        </Ntext>

        <Ntext variant="h2" value="Terminal Location" />
        <Ntext variant="p16">
          The Terminal(s) shall be used and located only at the User's site(s)
          stated in the User’s biodata information as the User's primary or
          secondary location or as communicated to Nomba in writing from time to
          time.
        </Ntext>
        <Ntext variant="p16">
          The User must at all times know the location of the Terminal(s). Nomba
          shall conduct spot checks to ensure this condition is adhered to. Any
          re-locations must be approved by Nomba in writing.
        </Ntext>
        <Ntext variant="p16">
          Subcontracting of Terminals to third parties is strictly prohibited,
          and Nomba shall only recognize the registered/ Mapped User.
        </Ntext>
        <Ntext variant="p16">
          Nomba reserves the right to immediately retrieve/recover all of its
          Terminals should the Terminal be subcontracted to a third party, be
          used at any other site or location contrary to the location stated
          herein or be used for any business other than as expressly permitted
          by this POS Terms and Conditions
        </Ntext>
        <Ntext variant="h2" value="User’s Obligations" />
        <Ntext variant="p16">
          <>
            As regards each POS Device the User shall:
            <ul>
              <li>
                Promptly honour, without discrimination, all valid Payment
                Cards.
              </li>
              <li>
                Be authorized to refuse to accept payment by means of an
                electronic payment instrument, including payment with cards, if:
                the electronic payment instrument is invalid; a notification of
                loss, missing, stolen or damaged has been made of the electronic
                payment instrument; the cardholder refuses to present a document
                confirming his/her identity in the event of suspicious /
                unauthorized use of electronic payment instruments.
              </li>
              <li>
                Reject any unsigned electronic payment card for Transactions.
              </li>
              <li>
                Ensure valid identification cards under the Know Your Customer
                (KYC) Policy document (i.e. National Identification Card,
                Driving License, International Passport) are obtained from
                customers for Transactions in excess of N200,000.00 (Two Hundred
                Thousand Naira only) or its equivalent in any currency.
              </li>
              <li>
                Check card security features prior to completing any
                Transaction. Such check shall include but not be limited to
                comparing card number on the card with the card number on the
                POS receipt or voucher.
              </li>
              <li>
                Keep for not less than 120 days or such other period as Nomba
                may stipulate from time to time details of all Transactions and
                documents including but not limited to receipts, personal
                identification etc related to the cardholder and the
                Transactions and upon the request of Nomba provide within 7 days
                from the date of such request such details and documents.
              </li>
              <li>
                In case of failure, refusal or neglect to provide such details
                and documents for any reason whatsoever upon the request of
                Nomba, the User hereby indemnifies Nomba against all losses,
                claims, demands, liabilities, actions, proceedings, damages,
                cost, fees and expenses arising as a result of non compliance
                and shall be bound to pay Nomba the amount or value of any such
                losses, claims, demands, liabilities, actions, proceedings,
                damages, cost, fees and expenses costs including attorney or
                solicitors fees.
              </li>
            </ul>
          </>
        </Ntext>
        <Ntext variant="p16">
          The User shall ensure Terminals shall only be operated by staff
          nominated and authorized by the User.
        </Ntext>
        <Ntext variant="p16">
          The Users’ customers shall not in any way be permitted to operate the
          Terminal.
        </Ntext>
        <Ntext variant="p16">
          The User shall report all suspicious Transactions to Nomba not later
          than 12 hours after the same or before 12 noon on the next working
          day.
        </Ntext>
        <Ntext variant="p16">
          The User shall display the payment device conspicuously enough for the
          cardholder to observe the amount entered into the device before the
          cardholder enters his/her PIN and shall ensure that the "card never
          leaves sight of cardholder" rule is strictly observed.
        </Ntext>
        <Ntext variant="p16">
          Unless otherwise specified, the User agrees to retain and provide, at
          Nomba’s request, copies of all Sales and Credit Slips and all Card
          Transactions’ records.
        </Ntext>
        <Ntext variant="p16">
          The User shall be required to take good care of the Terminal and keep
          it away from any possible contact with fluids, food or materials which
          may damage its functionality and immediately notify Nomba if the POS
          Terminal is damaged or stolen.
        </Ntext>
        <Ntext variant="p16">
          The User will be liable for the full repair or replacement costs of a
          Terminal that is damaged, lost or misplaced whilst in the Users’
          custody, as result of the Users negligence and subject to the
          provision of section 3(c) above. A schedule of costs is available from
          Nomba upon request.
        </Ntext>
        <Ntext variant="p16">
          The User shall allow Nomba and parties authorised by Nomba to have
          access to the Terminal for routine support, repair and or replacement.
        </Ntext>
        <Ntext variant="p16">
          The User shall ensure that Terminals are not used for fraudulent
          activities and shall be held liable for frauds arising from its
          negligence or connivance.
        </Ntext>
        <Ntext variant="p16">
          The User shall ensure that Terminals are carefully maintained and
          secured against damage and theft in locations.
        </Ntext>
        <Ntext variant="p16">
          The User shall not tamper with the hardware or application loaded on
          the Terminal.
        </Ntext>
        <Ntext variant="p16">
          Where the Terminal is damaged beyond repair within one (1) year of
          deployment, the User shall bear the cost of replacement, subject to
          the provision of sections 3(c) and 6(7)(h) above.
        </Ntext>
        <Ntext variant="h2" value="Card Fraud" />
        <Ntext variant="p16">
          In the event of a valid fraudulent Transaction claim, the User would
          be charged 105% of the value of the claim if the User is found to be
          negligent in the area of enforcing cardholder identification at the
          point of receiving the cardholder's payment card to be used on the
          Terminal.
        </Ntext>
        <Ntext variant="p16">
          In the event of a valid fraudulent Transaction claim, if the User is
          found to have connived with the perpetrator(s), the User would be
          reported to the law enforcement agencies and/or blacklisted from
          Transactions by the Nomba/ any financial institution or/ and
          regulatory authorities or all the penalties stated in this section.
        </Ntext>
        <Ntext variant="p16">
          Nomba may freeze the User’s account in an event where a fraudulent
          Transaction is reported on the POS Terminal deployed to the User’s
          location.
        </Ntext>
        <Ntext variant="h2" value="Obligation of Nomba" />
        <Ntext variant="p16">
          Only deploy and support POS Terminals through a CBN licensed Payment
          Terminal Services Provider (PTSP).
        </Ntext>
        <Ntext variant="p16">
          Ensure that Terminals deployed at the User location(s) through the
          PTSP’s shall accept all payment cards (card agnostic).
        </Ntext>
        <Ntext variant="p16">
          Ensure that the Terminals are connected directly to the Payments
          Terminal Service Aggregator.
        </Ntext>
        <Ntext variant="p16">Perform prompt settlement of the User.</Ntext>
        <Ntext variant="p16">
          Liaise with the PTSP to ensure that faulty Terminals are attended to
          within the scheduled time frame of 24 hours for Lagos and 72 hours for
          locations outside Lagos, subject to the availability and support of
          the PTSP.
        </Ntext>
        <Ntext variant="p16">
          Ensure that, subject to the filling of appropriate forms required for
          Agent registration/onboarding, a match check is conducted on the User
          to verify a good track record before the User is issued a POS.
        </Ntext>
        <Ntext variant="p16">
          Provide continuous training of the User on Terminal usage at the
          User’s locations.
        </Ntext>
        <Ntext variant="h2" value="Terminal Support Services" />
        <Ntext variant="p16">
          Hardware technical support and services shall be carried out by
          Nomba’s technical department.
        </Ntext>
        <Ntext variant="p16">
          All Terminal repairs shall be done on a carry-in basis.
        </Ntext>
        <Ntext variant="p16">
          the User may call for hardware support by dialing our customer care
          numbers [018885008] or sending the email to support@Nomba.com.
        </Ntext>
        <Ntext variant="h2" value="Term, Termination and Retrieval" />
        <Ntext variant="p16">
          These terms and conditions shall be deemed effective and in full force
          from the date of Activation of the Terminal.
        </Ntext>
        <Ntext variant="p16">
          You may also terminate this Agreement at any time by deactivating your
          Account with us and returning the Terminal.
        </Ntext>
        <Ntext variant="p16">
          The Terminal is, and will at all times be and remain, the sole and
          exclusive property of Nomba.
        </Ntext>
        <Ntext variant="p16">
          Nomba reserves the right to to withdraw or repossess the POS from the
          User without prior notice or liability for any reason whatsoever,
          including without limitation if you breach any of the terms.
        </Ntext>
        <Ntext variant="p16">
          In addition to the above, Nomba reserves the right to recall
          non-performing Terminal(s) and/or give the notice to terminate the
          contract with Users holding non-performing Terminal(s). Such Terminals
          should be returned by the User within 30 calendar days
        </Ntext>
        <Ntext variant="p16">
          If these Agreement or your Account with us is terminated or suspended
          for any reason: (a) the rights granted under these Agreement will end,
          (b) you agree to immediately terminate and cease use of the Terminals,
          (c) we may (but have no obligation to) delete your information and
          account data stored on our servers, and (c) we will not be liable to
          you or any third party for compensation, reimbursement, or damages for
          any termination or suspension of use of the Terminals, or for deletion
          of your information or account data. In addition to any payment
          obligations under this Agreement, the following sections of these
          Agreement shall survive and remain in effect in accordance with their
          terms upon termination: 6(4); 6(7)[Users Obligations]; 7[Chargeback],
          8[Card Fraud], 13 [Indemnification]; 14[Assignment]; 16[Governing
          Law]; 17[Dispute]
        </Ntext>

        <Ntext variant="h2" value="Term, Termination and Retrieval " />
        <Ntext variant="p16">
          These terms and conditions shall be deemed effective and in full force
          from the date of Activation of the Terminal.
        </Ntext>
        <Ntext variant="p16">
          You may also terminate this Agreement at any time by deactivating your
          Account with us and returning the Terminal. The Terminal is, and will
          at all times be and remain, the sole and exclusive property of Nomba.
        </Ntext>
        <Ntext variant="p16">
          Nomba reserves the right to to withdraw or repossess the POS from the
          User without prior notice or liability for any reason whatsoever,
          including without limitation if you breach any of the terms.
        </Ntext>
        <Ntext variant="p16">
          In addition to the above, Nomba reserves the right to recall
          non-performing Terminal(s) and/or give the notice to terminate the
          contract with Users holding non-performing Terminal(s). Such Terminals
          should be returned by the User within 30 calendar days
        </Ntext>
        <Ntext variant="p16">
          If these Agreement or your Account with us is terminated or suspended
          for any reason: (a) the rights granted under these Agreement will end,
          (b) you agree to immediately terminate and cease use of the Terminals,
          (c) we may (but have no obligation to) delete your information and
          account data stored on our servers, and (c) we will not be liable to
          you or any third party for compensation, reimbursement, or damages for
          any termination or suspension of use of the Terminals, or for deletion
          of your information or account data. In addition to any payment
          obligations under this Agreement, the following sections of these
          Agreement shall survive and remain in effect in accordance with their
          terms upon termination: 6(4); 6(7)[Users Obligations]; 7[Chargeback],
          8[Card Fraud], 13 [Indemnification]; 14[Assignment]; 16[Governing
          Law]; 17[Dispute]
        </Ntext>
        <Ntext variant="h2" value="Encumbrances" />
        <Ntext variant="p16">
          The User will not grant any security interest in the Terminals to a
          third party, and will specifically exclude it from any equipment,
          fixture, floor or blanket secured financing and will otherwise keep it
          free and clear of all levies, liens and encumbrances, including any
          that may arise from Agent's failure to pay any assessments, taxes or
          similar governmental charges.
        </Ntext>

        <Ntext variant="h2" value="Indemnification" />
        <Ntext variant="p16">
          <>
            {" "}
            In consideration of the Services offered by Nomba the User hereby
            irrevocably and unconditionally undertakes and covenants that it
            shall at all times hereafter well and truly indemnify Nomba and keep
            Nomba fully indemnified against all losses, claims, demands,
            liabilities, actions, proceedings, damages, cost, fees and expenses
            which may be occasioned to Nomba in consequence of
            <ul>
              <li>
                The User’s failure to comply with or to enforce any provision of
                this Agreement;{" "}
              </li>
              <li>Any loss if fraud precautions are not taken by the User; </li>
              <li>
                Any loss in the case of any Transaction in which a Card was not
                presented; and{" "}
              </li>
              <li>
                Any loss caused by the User’s violation of Card Schemes’ rules
                or regulations or the laws of the Federal Republic of Nigeria or
                of any other country.
              </li>
            </ul>
          </>
        </Ntext>
        <Ntext variant="h2" value="Assignment " />
        <Ntext variant="p16">
          This Agreement and any rights and licenses granted hereunder, may not
          be transferred or assigned by you /the User and any attempted transfer
          or assignment will be null and void.
        </Ntext>
        <Ntext variant="h2" value="Amendment " />
        <Ntext variant="p16">
          These POS Terms and Conditions shall be read in conjunction with the
          Terms and Condition of the Application where applicable.
        </Ntext>
        <Ntext variant="p16">
          These POS Terms and Conditions may be reviewed and re-negotiated in
          the light of changing market conditions. Therefore this contract is
          subject to periodic updates. Supplemental terms and conditions or
          documents that may be posted on the Application from time to time are
          hereby expressly incorporated herein by reference. We reserve the
          right, in our sole discretion, to make changes or modifications to
          these Terms and Conditions at any time and for any reason. We will
          alert you about any changes by updating the “Last updated” date of
          these Terms and Conditions and you waive any right to receive specific
          notice of each such change. It is your responsibility to periodically
          review these Terms and Conditions to stay informed of updates. You
          will be subject to, and will be deemed to have been made aware of and
          to have accepted, the changes in any revised Terms and Conditions by
          your continued use of the Application after the date such revised
          Terms are posted.
        </Ntext>

        <Ntext variant="h2" value="Governing Law" />
        <Ntext variant="p16">
          These terms and conditions will be governed and interpreted pursuant
          to the laws of the Federal Republic of Nigeria.
        </Ntext>

        <Ntext variant="h2" value="Dispute" />
        <Ntext variant="p16">
          Any and all disputes, claims or litigation arising from or related in
          any way to this Terms or any provisions herein will be resolved by
          mediation at the Lagos Multi Door Court House, Lagos State, Nigeria.
          Where such dispute persists, it shall then be resolved by Nigerian
          Courts in Lagos State. The parties hereby waive any objections against
          and expressly submit to the exclusive jurisdiction of the Nigerian
          Courts in Lagos State.
        </Ntext>
        <Ntext variant="p16" weight="700">
          By Accepting these Terms and Conditions/ Agreement, You/ the User
          hereby irrevocably indemnifies Cosmic Intelligent Labs Limited and its
          Affiliates against any losses, damages, penalties, fines or otherwise,
          both direct or indirect, that it may suffer as a result of your/ the
          User’s use and/or misuse of the Terminals
        </Ntext>
      </Container>
      <div></div>
    </Layout>
  );
};

export default TermsOfUse;
