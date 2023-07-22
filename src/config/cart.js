import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const CartTerminals = [
  {
    name: "Nomba Max",
    price: "₦ 80,000",
    image: <StaticImage height={83} width={43} src="../assets/images/jpegs/cart/max.png" alt="Nomba Max" />,
  },
  {
    name: "Nomba Pro",
    price: "₦ 25,000",
    image: <StaticImage height={82} width={60} src="../assets/images/jpegs/cart/pro.png" alt="Nomba Pro" />,
  },
  {
    name: "Nomba Lite",
    price: "₦ 15,000",
    image: <StaticImage height={82} width={41} src="../assets/images/jpegs/cart/lite.png" alt="Nomba Lite" />,
  },
  {
    name: "Nomba Mini",
    price: "₦ 8,000",
    image: <StaticImage height={83} width={48} src="../assets/images/jpegs/cart/mini.png" alt="Nomba Mini" />,
  },
];
