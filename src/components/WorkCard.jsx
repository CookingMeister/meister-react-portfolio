import React from 'react';

function WorkCard({ link, image, title, alt }) {
  return (
    // <div className="col-lg-12 col">
    //   <a href={link}>
    //     <div
    //       className="bg-image card text-bg-dark rounded-4 shadow-lg"
    //       style={{ backgroundImage: `url(${image})` }}
    //       alt={alt}
    //     >
    //       <div className="d-flex flex-column h-100 p-5 pb-3 text-black text-shadow-1">
    //         <h3 className="py-4 mt-3 mb-4 display-7 lh-1">{title}</h3>
    //         <ul className="d-flex list-unstyled mt-auto">
    //           <li className="me-auto">
    //             <img
    //               src="./img/profile.png"
    //               alt="Sunny outdoors profile by the water"
    //               width="32"
    //               height="32"
    //               className="rounded-circle border border-white"
    //             />
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </a>
    // </div>
    <div class="col">
        <a href="https://github.com/CookingMeister/Portfolio-dev">
          <card
            className="bg-image h-100 card text-bg-dark rounded-4 shadow-lg"
            style="background-image: url('./img/Mockup.png')"
            alt="a portfolio website showing title bar, an about section and profile pic"
          >
            <div
              className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
            >
              <h3 className="py-4 mt-2 mb-4 display-8 lh-1">
                Development Portfolio
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="./img/pic1.png"
                    alt="Sunny outdoors profile by the water"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
              </ul>
            </div>
          </card>
        </a>
      </div>
  );
}

export default WorkCard;
