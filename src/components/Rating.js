import React, { useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onclick }) => {
  useEffect(() => {
    console.log(rating);
  }, [rating]);
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span onClick={() => onclick(i)} style={{ cursor: "pointer" }} key={i}>
          {rating > i ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </div>
  );
};

export default Rating;
