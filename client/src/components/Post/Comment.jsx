import React from "react";

const Comment = ({ Comment, Idname }) => {
  return (
    <div>
      <div
        style={{
          marginBottom: "-18px",
          paddingBottom: "0px",
          fontWeight: "500",
        }}
      >
        <p>{Idname}</p>
      </div>

      <div
        className="comment"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "8px",
          color: "grey",
        }}
      >
        <div style={{ width: "80%" }}>
          <p> {Comment}</p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "8px",
          }}
        >
          <div style={{ fontSize: "19px", color: "grey" }}>
            <i className="bi bi-arrow-up-square" id="up"></i>
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "grey",
              marginTop: "14px",
              marginRight: "10px",
              marginLeft: "4px",
            }}
          >
            <p>55</p>
          </div>

          <div style={{ fontSize: "19px", color: "grey" }}>
            <i className="bi bi-arrow-down-square" id="down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
