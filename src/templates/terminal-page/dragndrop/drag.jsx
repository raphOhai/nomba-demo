import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useEffect } from "react";
import "./index.scss";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const Drag = () => {
  useEffect(() => {
    const box = document.querySelector(".c_drag_box");

    Draggable.create(box, {
      bounds: ".c_drag_img",
      edgeResistance: 0.65,
      type: "x,y",
      inertia: true,
      autoScroll: true,
      throwProps: true,
    });
  }, []);
  return (
    <div className="c_drag">
      <div className="c_drag_img">
        <StaticImage className="c_drag_box" alt="" src="../../../assets/images/svgs/terminal/nomba_pack.png" />
      </div>
    </div>
  );
};

export { Drag };
