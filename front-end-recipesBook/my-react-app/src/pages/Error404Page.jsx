import Paragraph from "../UI/paragraph/paragraph";
import Title from "../UI/titles/title";
import { GoBackButton } from "../components/GoBackButton/goBackButton";

export const Error404Page = () => {
  return (
    <>
      <GoBackButton />
      <Title margin="200px 0 0 0" aligntext="center">
        Oops...Something went wrong...
      </Title>
      <Paragraph
        fontSize="30px"
        margin="50px 0 0 0"
        aligntext="center"
        animation="not-found"
      >
        Please try again later!
      </Paragraph>
    </>
  );
};
