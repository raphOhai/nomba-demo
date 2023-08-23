import React, { useEffect } from "react";
import Prism from "prismjs";
// import "prismjs/themes/prism.css";
import "./theme.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";

const CodeBlock = ({ code, language, className }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
    <pre className={`line-numbers language-${language} ${className}`}>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export { CodeBlock };
