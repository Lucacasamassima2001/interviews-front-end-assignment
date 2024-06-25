import React from "react";
import Flex from "../UI/Flex/Flex.tsx";
import Wrapper from "../UI/Wrapper/wrapper.tsx";
import Image from "../UI/image/Image.tsx";
import Paragraph from "../UI/paragraph/paragraph.tsx";
import Title from "../UI/titles/title.tsx";
import { GoBackButton } from "../components/GoBackButton/goBackButton.tsx";
import BackgroundLayer from "../components/backgroundLayer/backgroundLayer.tsx";
import useMediaQuery from "../Hooks/UseMediaQuery.tsx";
export const About = () => {
  const { isMobile } = useMediaQuery();
  return (
    <Wrapper background="transparent" padding="10px 0 0 0">
      <GoBackButton color="white" />
      <Flex padding="10px" position="relative" justify="center" height="90%">
        <BackgroundLayer width={isMobile ? "100%" : "70%"} radius="10px">
          <Flex direction="column" align="center">
            <Title
              fontSize={isMobile ? "30px" : "50px"}
              color="white"
              fontStyle="italic"
              aligntext="center"
            >
              Know more about RecipesBook!
            </Title>
            <Image radius="10px" width={"80%"} src="/about-image.jpg" />
          </Flex>
          <Flex padding="10px" direction="column" align="center">
            <Paragraph
              color="white"
              fontWeight="bold"
              fontSize={isMobile ? "20px" : "40px"}
              margin="100px 0 0 0"
            >
              RecipesBook is a website where you can find all your favorite
              recipes. You can also add your own recipes and share them with
              others on the site.
            </Paragraph>
            <Title
              fontSize={isMobile ? "30px" : "50px"}
              color="white"
              fontStyle="italic"
            >
              Cooking...is about passion!
            </Title>
          </Flex>
        </BackgroundLayer>
      </Flex>
    </Wrapper>
  );
};
