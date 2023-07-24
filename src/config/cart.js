import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const CartTerminals = [
  {
    name: "Nomba Max",
    price: "₦ 80,000",
    image: <StaticImage height={83} width={43} src="../assets/images/jpegs/cart/max.png" alt="Nomba Max" />,
    info: "Android 11.0, 1GB RAM, 5MP Camera",
  },
  {
    name: "Nomba Pro",
    price: "₦ 25,000",
    image: <StaticImage height={82} width={60} src="../assets/images/jpegs/cart/pro.png" alt="Nomba Pro" />,
    info: "1GB RAM, 7.4V/2000mAh Battery",
  },
  {
    name: "Nomba Lite",
    price: "₦ 15,000",
    image: <StaticImage height={82} width={41} src="../assets/images/jpegs/cart/lite.png" alt="Nomba Lite" />,
    info: "1GB RAM, 7.4V/2000mAh Battery",
  },
  {
    name: "Nomba Mini",
    price: "₦ 8,000",
    image: <StaticImage height={83} width={48} src="../assets/images/jpegs/cart/mini.png" alt="Nomba Mini" />,
    info: "1GB RAM, 7.4V/2000mAh Battery",
  },
];
