import React from "react";
import Textheading from "../textheading/Textheading";
import Slider from "../splide-slide/Slider";
import "./testimonial.css";

const listItems = [
  {
    initials: "MK",
    number: 4,
    fname: "Ankit Kumar",
    ago: "2 months Ago",
    comment: "Thank you for making my friend's day so special",
    occassion: "Birthday",
    state: "Delhi",
  },
  {
    initials: "MK",
    number: 4,
    fname: "Ankit Kumar",
    ago: "2 months Ago",
    comment: "Thank you for making my friend's day so special",
    occassion: "Birthday",
    state: "Delhi",
  },
  {
    initials: "MK",
    number: 4,
    fname: "Ankit Kumar",
    ago: "2 months Ago",
    comment: "Thank you for making my friend's day so special",
    occassion: "Birthday",
    state: "Delhi",
  },
  {
    initials: "MK",
    number: 4,
    fname: "Ankit Kumar",
    ago: "2 months Ago",
    comment: "Thank you for making my friend's day so special",
    occassion: "Birthday",
    state: "Delhi",
  },
  {
    initials: "MK",
    number: 4,
    fname: "Ankit Kumar",
    ago: "2 months Ago",
    comment: "Thank you for making my friend's day so special",
    occassion: "Birthday",
    state: "Delhi",
  },
  {
    initials: "MK",
    number: 4,
    fname: "Ankit Kumar",
    ago: "2 months Ago",
    comment: "Thank you for making my friend's day so special",
    occassion: "Birthday",
    state: "Delhi",
  },
];

const options = {
  type: "slide",
  perPage: 4,
  perMove: 1,
  arrows: true,
  autoPlay: false,
  pagination: false,
  gap: "1rem",
  omitEnd: true,
  breakpoints: {
    360: {
      perPage: 1.5,
      gap: "2rem",
    },
    420: {
      perPage: 1.2,
      gap: "1rem",
    },
    768: {
      perPage: 2.5,
      gap: "1rem",
    },
    1024: {
      perPage: 3,
      gap: "1.5rem",
    },
  },
};

function Testimonial() {
  return (
    <section className="testimonial w-full text-left flex  flex-col px-24 -xl:px-8 -sm:px-5">
      <div className="text-left">
        <Textheading heading="What others are Saying?" />
      </div>
      <Slider list={listItems} options={options} isTestimonial={true} />
    </section>
  );
}

export default Testimonial;
