// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Header from './Header';
// // import About from './About';
// // import Portfolio from './Portfolio';
// // import Resume from './Resume';
// // import Contact from './Contact';
// // import Footer from './Footer';

// // function App() {
// //   return (
// //     <Router>
// //     <div>
// //       <Header />
// //       <Routes>
// //         <Route path="/" element={<About />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/portfolio" element={<Portfolio />} />
// //         <Route path="/resume" element={<Resume />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="*" element={<Footer />} />
// //       </Routes>

// //       {/* <About />
// //       <Portfolio />
// //       <Resume />
// //       <Contact /> */}
// //       <Footer />
// //     </div>
// //   </Router>
// //   );
// // }

// // export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={</>} /> */}
        </Routes>
        <Footer />
      </div>
  );
}
export default App;
// import { Routes, Route, Outlet, Link } from "react-router-dom";
// import Header from './Header';
// import Footer from './Footer';

// export default function App() {
//   return (
//     <div>

//       <p>
//         This example demonstrates some of the core features of React Router
//         including nested <code>&lt;Route&gt;</code>s,{" "}
//         <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
//         "*" route (aka "splat route") to render a "not found" page when someone
//         visits an unrecognized URL.
//       </p>
//       {/* <Header /> */}
//       {/* Routes nest inside one another. Nested route paths build upon
//             parent route paths, and nested route elements render inside
//             parent route elements. See the note about <Outlet> below. */}
//       <Routes>
//         <Route path="/" element={<Header />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="portfolio" element={<Portfolio />} />

//           {/* Using path="*"" means "match anything", so this route
//                 acts like a catch-all for URLs that we don't have explicit
//                 routes for. */}
//           <Route path="*" element={<NoMatch />} />
//         </Route>
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// function Layout() {
//   return (
//     <div>
//       {/* A "layout route" is a good place to put markup you want to
//           share across all the pages on your site, like navigation. */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/portfolio">Portfolio</Link>
//           </li>
//           <li>
//             <Link to="/nothing-here">Nothing Here</Link>
//           </li>
//         </ul>
//       </nav>

//       <hr />

//       {/* An <Outlet> renders whatever child route is currently active,
//           so you can think about this <Outlet> as a placeholder for
//           the child routes we defined above. */}
//       <Outlet />
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Portfolio() {
//   return (
//     <div>
//       <h2>Portfolio</h2>
//     </div>
//   );
// }

// function NoMatch() {
//   return (
//     <div>
//       <h2>Nothing to see here!</h2>
//       <p>
//         <Link to="/">Go to the home page</Link>
//       </p>
//     </div>
//   );
// }
