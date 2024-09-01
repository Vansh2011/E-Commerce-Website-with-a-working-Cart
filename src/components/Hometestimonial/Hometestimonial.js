import React from "react";
import Heading from "../textheading/Textheading";
import Heroslider from "../splide-slide/Heroslider";

const testimonials = [
  {
    name: "Maxwell",
    from: "Marketing, XYZ",
    description:
      "Invite outline horizontal scape polygon draft ellipse draft. Selection blur follower plugin object image rectangle boolean object move. Italic arrange flatten vertical image fill ellipse export flows create",
  },
  {
    name: "Maxwell",
    from: "Marketing, XYZ",
    description:
      "Invite outline horizontal scape polygon draft ellipse draft. Selection blur follower plugin object image rectangle boolean object move. Italic arrange flatten vertical image fill ellipse export flows create",
  },
  {
    name: "Maxwell",
    from: "Marketing, XYZ",
    description:
      "Invite outline horizontal scape polygon draft ellipse draft. Selection blur follower plugin object image rectangle boolean object move. Italic arrange flatten vertical image fill ellipse export flows create",
  },
  {
    name: "Maxwell",
    from: "Marketing, XYZ",
    description:
      "Invite outline horizontal scape polygon draft ellipse draft. Selection blur follower plugin object image rectangle boolean object move. Italic arrange flatten vertical image fill ellipse export flows create",
  },
  {
    name: "Maxwell",
    from: "Marketing, XYZ",
    description:
      "Invite outline horizontal scape polygon draft ellipse draft. Selection blur follower plugin object image rectangle boolean object move. Italic arrange flatten vertical image fill ellipse export flows create",
  },
  {
    name: "Maxwell",
    from: "Marketing, XYZ",
    description:
      "Invite outline horizontal scape polygon draft ellipse draft. Selection blur follower plugin object image rectangle boolean object move. Italic arrange flatten vertical image fill ellipse export flows create",
  },
];

const options = {
  type: "loop",
  perPage: 3,
  perMove: 1,
  arrows: true,
  autoPlay: false,
  pagination: false,
  width: "100%",
  breakpoints: {
    768: {
      perPage: 2,
    },
    420: {
      perPage: 1,
    },
  },
};

function Hometestimonial() {
  return (
    <section className="w-full flex flex-col items-center">
      <Heading
        heading="What People Say"
        fontSize="text-5xl -md:text-3xl text-center text-zinc-400"
      />
      <div className="w-[60%] -xl:w-[80%] my-8 flex  Newest Arrivalss justify-center items-center">
        <Heroslider
          options={options}
          list={testimonials}
          isTestimonial={true}
        />
      </div>
    </section>
  );
}
export default Hometestimonial;
