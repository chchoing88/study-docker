import React from "react";

const PageTemplate = ({ header, footer, children }) => {
  return (
    <div>
      {header}
      <main>{children}</main>
      {footer}
    </div>
  );
};

export default PageTemplate;
