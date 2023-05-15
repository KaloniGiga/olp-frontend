import React from "react";
import "../App.css";
import s2 from "../images/third_c.png";
const Fifth = () => {
  return (
    <>
      <div className="fifth">
        <img src={s2} alt="cover2" className="w-100 " />
        <div className="sec_cover"></div>
        <div className="sec_caption">
          <h2>Life Partners, What we need</h2>
          <h3>
            "A great marriage is not when the 'perfect couple' comes together.{" "}
            <br /> It is when an imperfect couple learns to enjoy their
            differences"
          </h3>
          <h4>-Dave Meurer</h4>
        </div>
      </div>
    </>
  );
};

export default Fifth;
