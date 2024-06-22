import Flex from "../UI/Flex/Flex";
import Wrapper from "../UI/Wrapper/wrapper";
import Image from "../UI/image/Image";
import Paragraph from "../UI/paragraph/paragraph";
import Title from "../UI/titles/title";
import { GoBackButton } from "../components/GoBackButton/goBackButton";
import BackgroundLayer from "../components/backgroundLayer/backgroundLayer";

export const About = () => {
  return (
    <Wrapper background="transparent" padding="10px 0 0 0">
      <GoBackButton color="white" />
      <Flex padding="10px" position="relative" justify="center" height="90%">
        <BackgroundLayer width="70%" borderRadius="10px">
          <Flex direction="column" align="center">
            <Title color="white" fontStyle="italic" aligntext="center">
              Know more about RecipesBook!
            </Title>
            <Image radius="10px" width={"80%"} src="/about-image.jpg" />
          </Flex>
          <Flex padding="10px" direction="column" align="center">
            <Paragraph
              color="white"
              fontWeight="bold"
              fontSize="40px"
              margin="100px 0 0 0"
            >
              RecipesBook is a website where you can find all your favorite
              recipes. You can also add your own recipes and share them with
              others on the site.
            </Paragraph>
            <Title color="white" fontStyle="italic" fontSize="50px">
              Cooking...is about passion!
            </Title>
          </Flex>
        </BackgroundLayer>
      </Flex>
    </Wrapper>
  );
};
