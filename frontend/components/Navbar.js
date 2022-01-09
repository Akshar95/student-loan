import React from "react";

function Navbar() {
  return (
    <>
      <h1 className="Header"> How much does your Student Loan cost you?</h1>
      <style jsx>{`
        .Header {
          margin: 0;
          padding: 20px;
          background-color: #a0c5ff;
          font-weight: 700;
          line-height: 18px;
          letter-spacing: 0px;
          text-align: left;
          border-bottom: 5px solid blue;
        }

        @media (min-width: 768px) {
        }
      `}</style>
    </>
  );
}

export default Navbar;
