import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Comment from "./Comment";

import "./post.css";
const Post = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [usercom, setusercom] = useState("");

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const submithandler = (e) => {
    e.preventDefault();
    setusercom("");
  };
  return (
    <main id="main" className="main">
      <div className="post" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <div className="container" style={{ marginBottom: "2rem" }}>
          <div className="blog-container" style={{ maxWidth: "40rem" }}>
            <div className="blog-header">
              <div className="blog-cover">
                <div className="blog-author">
                  <h4>User 1</h4>
                </div>
              </div>
            </div>

            <div className="blog-body">
              <div className="blog-title">
                <h4>
                  <a href="#/">Status of menstruation in Germany</a>
                </h4>
              </div>
              <div className="blog-summary">
                <p>
                With the report “Menstruation im Fokus”, Plan International Germany and WASH United are publishing the first representative data on the state of menstruation in Germany.

What we found is shocking.
<p>
🩸 More than one fifth of survey participants had no idea what happened to them when they had their first period. 22% felt overwhelmed and helpless.</p>
<p>
🩸 For 23%, the monthly expenses for period products represent a financial burden. 12% uses period products longer than they should to reduce costs, thereby risking infections.</p>
                </p>
              </div>
              <div className="blog-tags">
                <ul>
                  <div
                    className="usericon"
                    style={{ display: "flex", gap: "5px" }}
                  >
                    <li
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Up Vote"
                    >
                      <i className="bi bi-arrow-up-square" id="up"></i>
                    </li>
                    <li style={{ marginLeft: "0px" }}>
                      <p>69</p>
                    </li>
                    <li
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Down Vote"
                    >
                      <i className="bi bi-arrow-down-square" id="down"></i>
                    </li>

                    <div className="accordion-header" onClick={toggleAccordion}>
                      <div
                        className={
                          isOpen ? "accordion-icon open" : "accordion-icon"
                        }
                      >
                        {" "}
                        <li
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="Comment"
                        >
                          <i className="bi bi-chat-left-text" id="com"></i>
                        </li>
                      </div>
                    </div>
                  </div>
                  <div
                    className="adminicons"
                    style={{ display: "flex", gap: "7px" }}
                  >
                    <li
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Report!"
                    >
                      <i className="bi bi-exclamation-octagon" id="rep"></i>
                    </li>
                    <li
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Block"
                    >
                      <i className="bi bi-cone-striped" id="block"></i>
                    </li>
                    <li
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Delete"
                    >
                      <i className="bi bi-trash" id="del"></i>
                    </li>
                  </div>
                </ul>
              </div>

              {/* accordion */}
              <div className="accordion">
                {isOpen && (
                  <div className="accordion-content">
                    <div>
                      <form onSubmit={submithandler}>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          <input
                            style={{
                              width: "95%",
                              padding: "5px",
                              borderRadius: "10px",
                              border: "0.3px solid black",
                            }}
                            type="text"
                            name="comment"
                            id="comment"
                            value={usercom}
                            placeholder="Add Comment"
                            onChange={(e) => setusercom(e.target.value)}
                          />
                          <button
                            type="submit"
                            style={{
                              border: "0px",
                              color: "white",
                              backgroundColor: "white",
                            }}
                          >
                            <i
                              className="bi bi-cursor-fill"
                              style={{ fontSize: "20px", color: "#4154f1" }}
                            ></i>
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* comment display */}
                    <div style={{ marginTop: "1rem" }}>
                      <Comment
                        Comment="Hi there it is comment by Deep"
                        Idname="Ganesh"
                      />
                      <Comment
                        Comment="Hi there it is comment by Deep"
                        Idname="Ganesh"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* second post */}
               <Tooltip id="my-tooltip" />
      </div>
    </main>
  );
};

export default Post;
