import React from 'react';

export default function Resume() {
  return (
    <section id="Resume">
      <div className="container px-4 py-5">
        <h2 className="fs-2 pb-2">Resume</h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col-12 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <a href="https://github.com/CookingMeister/Portfolio-dev">
                    Portfolio-dev
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
