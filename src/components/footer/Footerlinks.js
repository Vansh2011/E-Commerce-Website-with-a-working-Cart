import React from "react";
import Footercoltitle from "./Footercoltitle";
import Footercol from "./Footercol";
import Footersubscribe from "./Footersubscribe";

const linkData = [
  {
    title: "Policy Info",
    links: [
      "Terms & Conditions",
      "Privacy Policy",
      "Terms of Use",
      "Disclaimer",
    ],
  },
  {
    title: "About Company",
    links: ["About us", "FNP Team", "Careers", "Testimonials", "News Room"],
  },
  {
    title: "FNP Business",
    links: [
      "Decoration",
      "Services",
      "Corporate Service",
      "Affiliate Program",
      "Retails Store",
      "Franchise",
    ],
  },
  {
    title: "Need help ?",
    links: ["Contact Us", "FAQs"],
  },
  {
    title: "useful links",
    links: ["Quotes N Wishes", "Flower Astrology", "Article Hub", "Care Guide"],
  },
];

function Footerlinks() {
  return (
    <section className="flex -lg:flex-col justify-center -md:items-center -xl:px-8 bg-neutral-100">
      <div className="flex -lg:border-b-2 -lg:border-solid -lg:border-neutral-200 ">
        {linkData.map((items, index) => (
          <div
            key={index}
            className={`px-12 flex flex-col  ${
              items.title === "useful links"
                ? "-lg:border-none border-r border-solid border-neutral-200"
                : "border-r border-solid border-neutral-200"
            } -xl:px-3`}
          >
            <Footercoltitle title={items.title} />
            <Footercol links={items.links} />
          </div>
        ))}
      </div>
      <Footersubscribe />
    </section>
  );
}

export default Footerlinks;
