import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 507) : text}
      <span
        onClick={toggleReadMore}
        className="text-blue-400 font-medium ml-1 hover:cursor-pointer"
      >
        {isReadMore ? "Read More..." : " Show Less"}
      </span>
    </p>
  );
};

const Content = () => {
  return (
    <div className="container">
      {/* <h2> */}
      <ReadMore>
        Ferns N Petals is India'stop gifting brand that helps you celebrate
        special moments by delivering fabulous gifts to your loved ones. You can
        find thoughtful gifts for all special days like Birthdays,
        Anniversaries, Valentine's Day and festivals like Rakshabandhan (Rakhi),
        Diwali and Chrismas etc. Our range of gifts includes flower bouquets and
        yummy cakes which can be delivered to all the major cities in under 2
        hours. We can also deliver personalised gifts, potted plants,
        chocolates, gift hampers etc. It is a long established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like).
      </ReadMore>
      {/* </h2> */}
    </div>
  );
};

export default Content;
