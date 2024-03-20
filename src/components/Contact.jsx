import React from 'react';

function Contact() {
  return (
    <section id="Contact">
      <div className="container px-4 py-5">
        <h3 className="fs-2 pb-1 mb-5">Contact Me</h3>
        <form className="row gy-2 gx-4 align-items-center justify-content-center">
          <div className="col-auto pb-5">
            <label className="visually-hidden" for="autoSizingInput">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="autoSizingInput"
              placeholder="John Smith"
            />
          </div>
          <div className="col-auto pb-5">
            <label className="visually-hidden" for="autoSizingInputGroup">
              Username
            </label>
            <div className="input-group">
              <div className="input-group-text">@</div>
              <input
                type="text"
                className="form-control"
                id="autoSizingInputGroup"
                placeholder="email"
              />
            </div>
          </div>
          <div className="col-auto pb-5">
            <label className="visually-hidden" for="autoSizingSelect">
              Preference
            </label>
            <select className="form-select" id="autoSizingSelect">
              <option selected>Choose...</option>
              <option value="1">Question</option>
              <option value="2">More Info</option>
              <option value="3">Newsletter</option>
            </select>
          </div>
          <div className="col-auto pb-5">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="autoSizingCheck"
              />
              <label className="form-check-label" for="autoSizingCheck">
                Remember me
              </label>
            </div>
          </div>
          <div className="col-auto pb-5">
            <button type="submit" className="btn btn-dark px-5">
              Submit
            </button>
          </div>
        </form>
        <div className="social">
          <ul>
            <li>
              <a href="https://github.com/CookingMeister?tab=repositories">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/shawn-meister-bb646b29a/">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
