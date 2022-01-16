import React from "react";

function Navbar() {
  return (
    <>
      <div className="headers">
        <h1 className="main-header"> Student Loan Calculator</h1>
        <h2 className="sub-header">
          Find out much your student loan is costing you
        </h2>
      </div>
      <style jsx>{`
        .headers {
          margin: 0;
          padding: 30px;
          background-color: white;
          font-weight: 700;
          letter-spacing: 0px;
          text-align: center;
          background-color: light-grey;
        }
        .main-header {
          color: #04225b;
        }
        .sub-header {
          color: #f85c04;
        }

        @media (min-width: 768px) {
        }
      `}</style>
    </>
  );
}

export default Navbar;
