import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const tipsAndStoriesList = [
  {
    title: '"I\'m Fulfilled" | Nomba Partner of The year',
    date: "March, 2023",
    link: {
      href: {
        url: "https://youtu.be/MmfXoYWLu2M",
      },
    },
    isVideo: true,
    picture: (
      <StaticImage
        height={750}
        width={500}
        src="../assets/images/jpegs/homepage/tips-updates/image1.png"
        alt="Nomba team members"
      />
    ),
  },
  {
    title: "How Nomba transformed youth entrepreneurship",
    date: "February, 2022",
    link: {
      href: {
        url: "https://blog.kudi.com/i-joined-kudi-six-months-ago-and-here-is-what-i-found-out-17d2b58a782a",
      },
    },
    picture: (
      <StaticImage
        height={750}
        width={500}
        src="../assets/images/jpegs/careers/tips-and-stories/lady-with-pos.jpeg"
        alt="Smiling lady with POS"
      />
    ),
  },
  {
    title: "Growing the Numbers with Crossfit Jagun",
    date: "March, 2023",
    isVideo: true,
    link: {
      href: {
        url: "https://youtu.be/ECbL-gIMX9U",
      },
    },
    picture: (
      <StaticImage
        src="../assets/images/jpegs/homepage/tips-updates/image3.png"
        alt="Muscular man"
      />
    ),
  },
  {
    title: "How Nomba simplified my payment headaches",
    date: "February, 2022",
    link: {
      href: {
        url: "https://africaexplained.com.ng/nomba-kudi-review",
      },
    },
    picture: (
      <StaticImage
        height={750}
        width={500}
        src="../assets/images/jpegs/careers/tips-and-stories/white-beards-man.jpeg"
        alt="Standing man with white beards"
      />
    ),
  },
];
