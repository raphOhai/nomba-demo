import { Br, Button, Container, Ntext } from "components";
import React, { useContext } from "react";
import "../styles/index.scss";
import { StaticImage } from "gatsby-plugin-image";
import Glow from "./glowSvgs/glow";
import Glow2 from "./glowSvgs/glow2";
import { TypingAnimation } from "./hooks/typingAnimation";
import { AppContext } from "states/context";

// import mockup from "../../../assets/images/svgs/terminal/menu-image.svg";
const HeroUp = () => {
  TypingAnimation();
  const { onOpen } = useContext(AppContext);
  return (
    <div>
      <div className="heroSection">
        <Container>
          <div className="grid1 shift-Top-desktop padding-buttom">
            <div id="hero-box" className="shift-Top-deskto padding-top2">
              <div className="svg-Container2">
                <Glow2 />
              </div>
              <div className="stack gap2">
                <div className="stack gap1">
                  <div className="stack gap2">
                    <Ntext
                      variant="h1"
                      color="primary-100"
                      className="text-center md:text-left md:leading-[20px]"
                      // data-animation="ltr"
                    >
                      <div className="hero-text">
                        Power your <Br on="all" />{" "}
                        <span id="text-output" className="highLighted-text text-output"></span>
                      </div>
                    </Ntext>
                  </div>

                  <Ntext
                    variant="text4lite"
                    color="primary-100"
                    className="text-center md:text-left"
                    data-animation="ltr"
                  >
                    <div className="grey-text">
                      A unified system to process and manage your food <Br on="desktop" /> items, receive payment and
                      streamline operations.
                    </div>
                  </Ntext>
                </div>

                <div className=" hero-btn gap flex elevate2">
                  <div className="hero-btn-grid">
                    <div>
                      <Button
                        onClick={onOpen}
                        className="!font-medium  !text-center responsive-btn btn1"
                        text=""
                        withArrow={true}
                      />
                    </div>
                    <div>
                      <Button
                        className="!font-medium !text-center contact-btn responsive-btn btn2"
                        text="Contact sales"
                        // withArrow={true}
                        phone={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex center ">
              <StaticImage
                alt="Iphone with hand"
                src="../../../assets/images/svgs/terminal/pos-feature3.png"
                className="pos-moc SlideUp"
                width={300}
                // height={900}
              />
            </div>
          </div>
        </Container>

        {/* <div className="svg-Container">
          <svg
            className="svg-pattarn"
            width="817"
            height="1290"
            viewBox="0 0 817 1290"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.56">
              <path
                d="M773.887 904.104C744.162 917.731 723.477 947.806 713.916 991.272C709.918 1009.83 707.832 1030.04 707.832 1051.66C707.832 1120.73 728.17 1203.91 765.891 1287.31C766.239 1288.02 766.586 1288.96 766.934 1289.66H775.626C774.756 1287.78 774.061 1286.14 773.192 1284.26C776.147 1282.85 778.928 1281.21 781.536 1279.33C790.749 1272.75 798.571 1263.35 804.655 1251.84C812.478 1237.27 816.997 1219.41 816.997 1199.91V896.585C801.526 895.646 787.098 898.23 773.887 904.104Z"
                fill="#1A1A1A"
              />
              <path
                d="M658.295 686.772C702.795 666.566 758.421 675.964 817.002 709.093V549.559C713.747 467.09 611.187 433.726 533.833 469.204C517.841 476.488 503.413 486.591 490.549 499.043C484.813 504.682 479.424 510.791 474.383 517.37C472.123 520.424 469.69 523.479 467.604 526.768C466.213 528.648 464.996 530.762 463.606 532.877C462.737 534.052 462.041 535.226 461.346 536.401C458.912 540.395 456.653 544.39 454.567 548.619C454.219 549.324 453.871 549.794 453.698 550.498C452.133 553.553 450.742 556.372 449.352 559.427C446.571 565.301 444.137 571.174 441.877 577.518C441.703 577.988 441.529 578.223 441.356 578.693C440.313 581.042 439.443 583.627 438.748 585.976C437.358 589.736 436.315 593.495 435.098 597.254C434.402 599.369 433.881 601.483 433.359 603.598C431.621 609.707 430.057 615.816 428.666 622.394C427.449 628.033 426.406 633.672 425.363 639.311C423.973 646.83 422.93 654.583 421.887 662.572C421.713 663.746 421.539 664.921 421.539 666.096C420.148 677.609 419.279 689.591 418.758 701.574C418.584 704.393 418.41 707.448 418.41 710.267C418.236 713.322 418.236 716.376 418.236 719.43C418.062 722.485 418.063 725.539 418.063 728.594C418.063 734.233 418.062 739.872 418.236 745.51C418.41 754.204 418.932 763.132 419.453 772.06C419.801 776.524 420.148 780.989 420.496 785.453C423.451 820.931 429.014 857.819 437.184 895.881C445.006 932.769 455.088 970.597 467.604 1009.13C487.073 1068.81 511.93 1129.9 541.829 1190.51C544.089 1195.21 546.522 1199.68 548.956 1204.38C559.56 1225.52 570.859 1246.2 582.332 1266.4C586.851 1274.16 591.371 1281.91 596.064 1289.66H697.233C692.887 1281.91 688.541 1274.39 684.543 1266.4C678.807 1256.07 673.418 1245.49 668.029 1234.69C663.162 1224.82 658.295 1214.71 653.775 1204.85C648.213 1192.86 642.998 1180.88 638.131 1168.66C633.264 1156.92 628.744 1145.4 624.398 1133.66C607.537 1088.07 594.673 1042.96 585.982 999.731C584.939 994.562 583.896 989.393 583.027 984.224C582.158 979.29 581.289 974.356 580.593 969.422C576.595 944.047 574.161 919.377 573.292 896.116C572.075 860.873 574.335 828.449 580.767 799.785C592.761 743.631 619.705 704.394 658.295 686.772Z"
                fill="#1A1A1A"
              />
              <path
                d="M302.464 143.557C227.892 177.625 175.916 253.046 152.102 362.3C141.846 408.821 136.805 460.041 136.805 514.785C136.805 708.152 199.383 944.986 314.806 1178.53C333.754 1216.83 353.744 1253.95 374.256 1289.9H496.806C492.286 1282.15 487.767 1274.63 483.247 1266.64C466.907 1237.97 450.915 1208.37 435.966 1177.83C425.014 1155.51 414.585 1133.42 404.676 1110.86C304.724 883.898 264.396 653.173 298.988 495.284C318.457 406.001 361.045 344.208 422.059 316.484C528.443 267.848 674.808 327.996 817 461.215V357.601C634.479 169.872 440.485 80.5893 302.464 143.557Z"
                fill="#1A1A1A"
              />
              <path
                d="M7.64844 371.228C7.64844 310.61 13.0372 253.986 24.1623 203.001C43.6312 114.423 79.614 45.5811 129.677 0H116.292C69.7056 46.7559 35.9827 114.423 17.383 199.711C5.73638 253.516 0 312.254 0 375.222C0 597.959 71.9654 870.741 204.945 1139.76C230.672 1191.69 257.789 1241.97 286.297 1289.9H295.858C266.133 1239.85 237.625 1187.46 210.681 1133.18C79.7877 868.626 7.47461 592.32 7.64844 371.228Z"
                fill="#1A1A1A"
              />
              <path
                d="M816.999 230.725C726.086 131.339 631.87 52.6292 540.783 0.234375H521.141C618.311 53.0991 719.48 136.273 816.999 243.882V230.725Z"
                fill="#1A1A1A"
              />
            </g>
          </svg>
          
        
        </div>
         */}
        <div className="svg-Container">
          <Glow />
        </div>
      </div>
    </div>
  );
};

export default HeroUp;
