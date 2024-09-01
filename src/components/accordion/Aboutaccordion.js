import React from "react";
import Textheading from "../textheading/Textheading";
import Accordion from "./Accordion";

const accordionData = [
  {
    icon: "bx bx-list-ul",
    title: "Product Description",
    content: `Elevate your gifting with our rose bouquet, wrapped in a personalised wrapping paper adorned with the recipient's name.
       A gesture of thoughtfullness and care, this gift encapsulates the beauty of dark pink roses, a symbol of appreciation and admiration. Give the joy
       of personalised elegance, expressing your feelings in a way that's as unique as the recepient. It's a heartfelt present that speaks volumes, making
       any occasion truly special`,
  },
  {
    icon: "bx bx-book-open",
    title: "Care Instructions",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
  },
  {
    icon: "bx bxs-truck",
    title: "Delivery Information",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
  },
];

function Aboutaccordion() {
  return (
    <div className="pb-8 border-b-4 border-solid border-zinc-100 -sm:ml-5 -sm:border-none">
      <Textheading heading="About the product" />
      <div className="accordion">
        {accordionData.map((item, index) => (
          <div key={index}>
            <Accordion
              icon={item.icon}
              title={item.title}
              content={item.content}
              isAbout={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aboutaccordion;
