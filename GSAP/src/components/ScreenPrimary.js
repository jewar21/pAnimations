import React from "react";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./Navbar";
// import Header from "./Header";
import Gallery from "./Gallery";

import "../styles/styles.scss";

export const ScreenPrimary = () => {
  // const c1 = useRef();
  // const c2 = useRef();
  // const c3 = useRef();
  // const c4 = useRef();

  // const el = useRef();
  // const q = gsap.utils.selector(el);
  // gsap.registerPlugin(ScrollTrigger);
  // const tl = gsap.timeline();

  // useEffect(() => {
  //   gsap.from(c2.current, {
  //     duration: 3,
  //     y: "100",
  //     // opacity: 0,
  //     ease: "ease-in",
  //     scrollTrigger: {
  //       trigger: ".c2",
  //       markers: true,
  //       start: "top 90%",
  //       end: "bottom 60%",
  //       toggleActions: "restart complete reverse reset"
  //     }
  //   });
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: c2.current
    //     // trigger: ".c4"
    //   }
    // })
    // gsap.to(c1.current, { rotation: "+=360" });
    // gsap.to(c4.current, { duration: 3, x: 100, y: 50, delay: 1 });
    // gsap.to(c3.current, {
    //   duration: 3,
    //   delay: 1,
    //   borderRadius: "50%",
    //   ease: "bounce.out",
    //   y: 100
    // });
    // tl.to(c2.current, {duration: 3, delay: 1, x: 500})
  // }, []);

  return (
    <div className="screen-content">
      <Navbar />
      <Gallery />
    </div>
  );
};
