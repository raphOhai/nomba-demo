import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const tipsAndUpdatesList = [
  {
    title: '"I\'m Fulfilled" | Nomba Partner of The year',
    date: "MARCH, 2023",
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
    title: "Meeting of Minds at the Nomba Aggregator Conference",
    date: "March 2022",
    link: {
      href: {
        url:
          "https://medium.com/@nombastories/meeting-of-minds-at-the-kudi-aggregator-conference-cc6b8f4dfff3",
      },
    },
    picture: (
      <StaticImage
        height={750}
        width={500}
        src="../assets/images/jpegs/homepage/tips-updates/conference.jpeg"
        alt="Conference hall"
      />
    ),
  },
  {
    title: "Growing the Numbers with Crossfit Jagun",
    date: "March 2023",
    isVideo: true,
    link: {
      href: {
        url: "https://youtu.be/ECbL-gIMX9U",
      },
    },
    picture: (
      <StaticImage
        src="../assets/images/jpegs/homepage/tips-updates/image3.png"
        alt="Woman feeling confident"
      />
    ),
  },
  {
    title: "African fintech company, Kudi, changes its identity to Nomba",
    date: "April 2022",
    link: {
      href: {
        url:
          "https://technext.ng/2022/04/14/african-fintech-company-kudi-changes-its-identity-to-nomba/",
      },
    },

    picture: (
      <StaticImage
        height={750}
        width={500}
        src="../assets/images/jpegs/homepage/tips-updates/big-reveal.png"
        alt="Nomba big reveal"
      />
    ),
  },
];
