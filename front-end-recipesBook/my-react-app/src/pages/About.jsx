import Flex from "../UI/Flex/Flex";
import Wrapper from "../UI/Wrapper/wrapper";
import Image from "../UI/image/Image";
import Paragraph from "../UI/paragraph/paragraph";
import Title from "../UI/titles/title";
import { GoBackButton } from "../components/GoBackButton/goBackButton";

export const About = () => {
  return (
    <Wrapper height="100vh" background="#E7D4B5" padding="10px 0 0 0">
      <GoBackButton />
      <Flex direction="column" align="center">
        <Title fontStyle="italic" aligntext="center">
          Know more about RecipesBook!
        </Title>
        <Image radius="10px" width={"1000px"} src="/about-image.jpg" />
      </Flex>
      <Flex padding="10px" direction="column" align="center">
        <Paragraph
          fontWeight="bold"
          width="900px"
          fontSize="40px"
          margin="100px 0 0 0"
        >
          RecipesBook is a website where you can find all your favorite recipes.
          You can also add your own recipes and share them with others on the
          site.
        </Paragraph>
        <Title fontStyle="italic" fontSize="50px">
          Cooking...is about passion!
        </Title>
      </Flex>
    </Wrapper>
  );
};
