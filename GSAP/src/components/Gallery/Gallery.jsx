import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import '../../styles/styles.scss'

// import Inicio from "./inicio";
// import ExpErco from "./experienciaErco";
// import NuestroSocio from "./nuestroSocio";
// import Empresas from "./empresas";
// import SistemaSolar from "./sistemaSolar";
// import Tecnologia from "./tecnologia";
// import CostoInversion from "./costoInversion";
// import RetornoInversion from "./retornoInversion";
// import MedioAmbiente from "./medioAmbiente";
// import Firmar from "./firmar";

const Gallery = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");
    console.log(sections);
  //   // gsap.from(".box", {
  //   //   duration: 3,
  //   //   y: "100",
  //   //   // opacity: 0,
  //   //   ease: "ease-in",
  //   //   scrollTrigger: {
  //   //     trigger: ".box",
  //   //     markers: true,
  //   //     start: "top 90%",
  //   //     end: "bottom 60%",
  //   //     toggleActions: "restart complete reverse reset"
  //   //   }
  //   // });
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".Mwrap",
        pin: true,
        scrub: 1,
        markers: true,
        snap: 1 / (sections.length - 1),
        //     // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + document.querySelector(".Mwrap").offsetWidth
      }
    });
  }, []);

  return (
    // <div>
    //   <Inicio />
    //   <ExpErco />
    //   <NuestroSocio />
    //   <Empresas />
    //   <SistemaSolar />
    //   <Tecnologia />
    //   <CostoInversion />
    //   <RetornoInversion />
    //   <MedioAmbiente />
    //   <Firmar />
    // </div>
    <>
      <div className="Mwrap">
        <div className="panel yellow-container">
          <p>
            Con el Ecosistema de Energía Erco, tienes el control de tu Energía
          </p>
        </div>
        <div className="panel  blue-container" name="blue">
          <p>Experiencia ERCO</p>
        </div>
        <div className="panel red-container">
          <p>Nuestro Socio</p>
        </div>
        <div className="panel black-container">
          <p>Empresas que confían en nosotros</p>
        </div>
      </div>
      <div className="full-container">
        <p>Tu sistema solar</p>
      </div>
      <div className="full-container">
        <p>Tecnología</p>
      </div>
      <div className="full-container">
        <p>Costo de inversión</p>
      </div>
      <div className="full-container">
        <p>Retorno de inversión</p>
      </div>
      <div className="full-container">
        <p>Medio ambiente</p>
      </div>
      <div className="full-container">
        <p>Firmar</p>
      </div>
    </>
  );
};

export default Gallery;
