import React from "react";

const EmptyState = ({ title, button, message }) => {
  return (
    <div className="empty-state | container">
      <div className="empty-state__details">
        <h1 className="fs-title fw-bold" style={{ marginTop: "1em" }}>
          {title}
        </h1>
        <p
          className="text-neutral-700 fs-body-sm"
          style={{ margin: "1em auto 0", maxWidth: "35ch" }}
        >
          Click on <span className="text-neutral-900 fw-bold">"{button}"</span>{" "}
          {message}
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
