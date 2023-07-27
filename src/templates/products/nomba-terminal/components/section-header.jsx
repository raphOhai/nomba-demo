import React from "react";
import { Ntext } from "components";

export function SectionHeader({ header, children, className }) {
  return (
    <div className={`flex justify-center text-center ${className}`}>
      <Ntext variant="h3" color="c-dark">
        {header}
      </Ntext>
      {children}
    </div>
  );
}
