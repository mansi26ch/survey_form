import React from "react";

export default function Question(props) {
  return (
    <div>
      <div className="container-fluid">
        <div className="col-md-5 m-auto">
          <div className="mt-3">
            <div className="card text-left">
              <div className="card-body">
                <form onSubmit={props.submit}>
                  <div className="form-group">
                    <label htmlFor="">
                      {""}
                      <b>3. {" "}</b>What are you currently doing?
                    </label>
                    <br />
                    <input
                      type="radio"
                      id="teacher"
                      name="q1"
                      value="Teaching"
                      autoComplete="off"
                    />
                    
                    <label htmlFor="teacher">Teaching</label> {'    '}
                    <input
                      type="radio"
                      id="student"
                      name="q1"
                      value="student"
                      autoComplete="off"
                    />
                    <label htmlFor="student">Student</label>{"    "}
                    <input
                      type="radio"
                      id="programmer"
                      name="q1"
                      value="programmer"
                      autoComplete="off"
                    />
                    <label htmlFor="programmer">Programmer</label>{"    "}
                    <input
                      type="radio"
                      id="other"
                      value="other"
                      name="q1"
                      autoComplete="off"
                    />
                    <label htmlFor="other">Other</label>{"    "}
                    <br />
                    <input
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      name="other"
                      placeholder="Type here if not listed."
                    />
                  </div>
                  <div className="form-group"></div>
                  <label htmlFor="">
                    {" "}
                    <b>4. {" "}</b>Please rate our course.
                  </label>
                  <br />
                  <input type="radio" value="poor" id="poor" name="q2" autoComplete="off" />
                  <label htmlFor="poor">Poor</label>{"     "}
                  <input type="radio" value="good" id="good" name="q2" autoComplete="off" />
                  <label htmlFor="good">Good</label>{"     "}
                  <input
                    type="radio"
                    id="Excellent"
                    name="q2"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="excelent">Excelent</label>{'  '}
                  <br />
                  <label htmlFor="">
                    {""}
                    <b>5. {" "}</b>Write your review here.
                  </label>
                  <div className="form-group">
                    <textarea
                      id="reviewText" className="form-control"
                      name="reviewText"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                </form>
                <center>
                  <span className="badge badge-pill disabled">1</span>
                  {" "}
                  <span className="badge badge-pill badge-primary">2</span>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
