import React from "react";

const UseCallBackHelperFunction = () => {
  console.log("I am Rendered.");
  return <div>
            <h1>Helper</h1>
        </div>;
};

export default React.memo( UseCallBackHelperFunction);
