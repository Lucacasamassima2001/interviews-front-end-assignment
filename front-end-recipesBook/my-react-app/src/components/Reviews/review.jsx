import Flex from "../../UI/Flex/Flex";
import Paragraph from "../../UI/paragraph/paragraph";

/* eslint-disable react/prop-types */
export const Review = ({ review }) => {
  function transformToStars(rating) {
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += "⭐";
    }
    return stars;
  }

  function transformDate(date) {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  }

  return (
    <Flex
      width="300px"
      height="150px"
      border="1px solid black"
      radius="10px"
      direction="column"
      background="#F6E6CB"
    >
      <Paragraph>{transformToStars(review.rating)}</Paragraph>
      <Paragraph>{review.comment}</Paragraph>
      <Paragraph>{transformDate(review.date)}</Paragraph>
    </Flex>
  );
};
