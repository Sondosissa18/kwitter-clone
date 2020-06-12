import React from "react";
//import { Spinner } from "react-bootstrap/Spinner";
/*
https://lmgtfy.com/?q=react+loading+spinner+components
There are many more on the web use one of these or create your own!
*/

// export const Loader = () => (
//   <>
//     <Spinner animation="border" role="status">
//       <span className="sr-only">Loading...</span>
//     </Spinner>
//   </>
// );

export const Loader = () => (
  <>
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </>
);
