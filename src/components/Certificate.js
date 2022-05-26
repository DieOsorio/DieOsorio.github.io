import React from "react";

const Certificate = ({ certificate }) => {
  return (
    <>
      <div className="card">
        <a href={certificate.verifyAt}>
          <img
            src={certificate.image}
            alt={certificate.name}
            className="card-img-top"
          />
        </a>
        <div className="card-body">
          <a href={certificate.verifyAt}>
            <p className="card-title">{certificate.name}</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Certificate;
