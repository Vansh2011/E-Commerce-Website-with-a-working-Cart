import React from "react";
import Heading from "../textheading/Textheading";
import Occasionrectangle from "./Occasionrectangle";

const occasion = [
  {
    title: "Birthday",
    blur: "blur-sm",
    opacity: "opacity-30",
    isRectangle: true,
  },
  {
    title: "Celebrations",
    blur: "blur-sm",
    opacity: "opacity-30",
    isRectangle: true,
  },
  {
    title: "Anniversary",
    blur: "blur-sm",
    opacity: "opacity-30",
    isRectangle: true,
  },
  {
    title: "Housewarming",
    blur: "blur-sm",
    opacity: "opacity-30",
    isRectangle: true,
  },
  {
    title: "I Love You",
    blur: "blur-sm",
    opacity: "opacity-30",
    isRectangle: true,
  },
  {
    title: "Wedding",
    blur: "blur-sm",
    opacity: "opacity-30",
    isRectangle: true,
  },
  {
    title: "Farewell",
    blur: "blur-sm",
    opacity: "opacity-30",
    isRectangle: false,
  },
  {
    title: "Thank You",
    blur: "blur-sm",
    opacity: "opacity-30",
    isRectangle: false,
  },
  {
    title: "I'm Sorry",
    blur: "blur-sm",
    opacity: "opacity-30",
    isRectangle: false,
  },
  {
    title: "Get Well Soon",
    blur: "blur-sm",
    opacity: "opacity-30",
    isRectangle: false,
  },
  {
    title: "I Miss You",
    blur: "blur-sm",
    opacity: "opacity-30",
    isRectangle: false,
  },
  {
    title: "Condolences",
    blur: "blur-sm",
    opacity: "opacity-30",
    isRectangle: false,
  },
];

function Occasion() {
  return (
    <section className="w-full my-8 bg-stone-100 flex flex-col justify-center items-center">
      <Heading
        heading="Flowers For Every Occasion"
        fontSize="text-5xl -md:text-3xl text-center text-zinc-400"
      />
      <div className="w-[90%] -xl:w-[100%] my-8 -md:my-4 flex justify-center items-center flex-wrap">
        {occasion.map((item, index) => (
          <div key={index}>
            <Occasionrectangle
              index={index}
              title={item.title}
              blur={item.blur}
              opacity={item.opacity}
              isRectangle={item.isRectangle}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Occasion;
