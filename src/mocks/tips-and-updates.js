import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const tipsAndUpdatesList = [
  {
    title:
      "Nigeria’s Kudi, Changes Name to Nomba and Strengthens Expansion Plans With New Strategic Hires",
    date: "April 2022",
    link: {
      href: {
        url:
          "https://medium.com/@nombastories/nigerias-kudi-changes-name-to-nomba-and-strengthens-expansion-plans-with-new-strategic-hires-1d879ef41f8a",
      },
    },
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
        src="../assets/images/jpegs/homepage/tips-updates/image2.png"
        alt="Conference hall"
      />
    ),
  },
  {
    title: "Kudi, Organically Growing a Safe Place for All Employees To Thrive",
    date: "March 2022",
    link: {
      href: {
        url:
          "https://medium.com/@nombastories/kudi-organically-growing-a-safe-place-for-all-employees-to-thrive-84e4540b635f",
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
        src="../assets/images/jpegs/homepage/tips-updates/image4.png"
        alt="Nomba big reveal"
      />
    ),
  },
];
