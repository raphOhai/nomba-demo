import React from "react";
import Layout from "components/layout";

import { TestPageHeader } from "templates/test";

// import templates here
function TestPage() {
  return (
    <Layout title="Test">
      <TestPageHeader />
      <div></div>
    </Layout>
  );
}

export default TestPage;
