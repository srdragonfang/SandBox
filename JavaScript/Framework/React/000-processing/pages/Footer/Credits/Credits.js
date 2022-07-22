import React from "react";
const Credits = () => {
  const today = new Date();
  return (
    <div className="credits flex-row">
      <p>Sokunmaru Group | Copyright &copy; {today.getFullYear()}</p>
      <h4>
        <code>developed by </code>
        <strong className="credits-author">S.R Dragonfang</strong>
      </h4>
    </div>
  );
};

export default Credits;
