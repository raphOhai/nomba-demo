import React from "react";
import PropType from "prop-types";
import Abc from "jpegs/terminal/max/sponsors/abc.png";
import Borough from "jpegs/terminal/max/sponsors/borough.png";
import crossFit from "jpegs/terminal/max/sponsors/cross-fit-png.png";
import Gig from "jpegs/terminal/max/sponsors/gig.png";
import Lacore from "jpegs/terminal/max/sponsors/LACORE.png";
import Marios from "jpegs/terminal/max/sponsors/marios.png";
import Sneaklin from "jpegs/terminal/max/sponsors/sneaklin.png";
import Smoke from "jpegs/terminal/max/sponsors/Smoke.png";
import Kaab from "jpegs/terminal/max/sponsors/Kaab.png";
import Ghat from "jpegs/terminal/max/sponsors/ghat.png";
import goddis from "jpegs/terminal/max/sponsors/goddis.png";
import ball from "jpegs/terminal/max/sponsors/ball.png";
const Sponsors = ({ className }) => {
  const images = [Abc, Borough, crossFit, Gig, goddis, Lacore, Ghat, Marios, ball, Sneaklin, Smoke, Kaab];
  return (
    <div className={`mq`}>
      <div>
        {Array.from({ length: 50 }, (_, index) => (
          <img
            key={index}
            width={80}
            className="md:max-w-[80px] max-w-[45px]"
            height={80}
            src={images[index % images.length]}
            alt={`Sponsor ${index}`}
          />
        ))}

        {/* <img width={80} className="md:max-w-[80px] max-w-[45px]" height={28} src={Borough} alt="Borough" />
        <img width={123} className="md:max-w-[123px] max-w-[65px]" height={46} src={crossFit} alt="crossFit" />
        <img width={80} className="md:max-w-[80px] max-w-[45px]" height={56} src={Gig} alt="Gig" />
        <img width={98} className="md:max-w-[98px] max-w-[50px]" height={60} src={goddis} alt="goddis" />
        <img width={119} className="md:max-w-[119px] max-w-[55px]" height={66} src={Lacore} alt="Lacore" />
        <img width={130} className="md:max-w-[130px] max-w-[45px]" height={32} src={Ghat} alt="Ghatview" />
        <img width={80} className="md:max-w-[80px] max-w-[45px]" height={52} src={Marios} alt="Marios" />
        <img width={67} className="md:max-w-[80px] max-w-[45px]" height={67} src={ball} alt="ball" />
        <img width={73} className="md:max-w-[80px] max-w-[45px]" height={73} src={Sneaklin} alt="Sneaklin" />
        <img width={62} className="md:max-w-[80px] max-w-[45px]" height={61} src={Smoke} alt="Smoke" />
        <img width={117} className="md:max-w-[117px] max-w-[45px]" height={35} src={Kaab} alt="Kaab" /> */}
      </div>
    </div>
  );
};

Sponsors.defaultProps = {
  className: "",
};
Sponsors.propTypes = {
  className: PropType.string,
};
export { Sponsors };
