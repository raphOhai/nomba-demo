import React from "react";

import { Button, Ntext } from "components";

const IntegrateToYourTerms = () => {
  return (
    <section style={{
      backgroundColor: '#0D0D0D',
      borderTopColor: '#1A1A1A',
      borderTopStyle: 'solid',
      borderTopWidth: '2px',
      padding: '120px 32px',
      display: 'flex',
    }}>
      <section style={{
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '840px',
        display: 'flex',
        margin: 'auto',
        gap: '40px',
      }}>
        <Ntext
          value="Integrate Payment on your Terms"
          style={{
            fontSize: '56px',
            fontWeight: '400',
            lineHeight: '64px',
            letterSpacing: '-2px',
            textAlign: 'center',
            color: 'white',
          }}
          variant="h2"
        />
        <Ntext
          variant="text4lite"
          style={{ letterSpacing: '-0.8px', textAlign: 'center', color: '#999999' }}>
          <span>Simplify your payments on our platform - we accept both</span>{' '}
          <span style={{ color: '#E6E6E6', fontWeight: '500' }}>Naira and International(AmericanExpress and Visa)</span>{' '}
          <span>cards, transfers, and provide various payment options. Transparent pricing, no fees, and timely notifications through web-hook.</span>
        </Ntext>
        <div
          style={{
            height: '56px',
            maxWidth: '324px',
            fontWeight: '500',
            lineHeight: '24px',
            textAlign: 'center',
          }}>
          <Button
            className="!font-medium !text-base !px-16 !h-14"
            href={{ url: "https://dashboard.nomba.com/auth/login" }}
            text="Go to Checkout Documentation"
            size="medium"
          />
        </div>
      </section>
    </section>
  );
};

export { IntegrateToYourTerms };
