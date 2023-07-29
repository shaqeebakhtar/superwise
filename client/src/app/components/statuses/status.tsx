import React from "react";

const Status = ({ status }) => {
  {
    return status === "In Progress" ? (
      <div className="status in-progress">
        <span>In Progress</span>
      </div>
    ) : status === "Not Started" ? (
      <div className="status not-started">
        <span>Not Started</span>
      </div>
    ) : (
      <div className="status completed">
        <span>Completed</span>
      </div>
    );
  }
};

export default Status;
