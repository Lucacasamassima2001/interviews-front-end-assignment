import Title from "../UI/titles/title.tsx";
import Flex from "../UI/Flex/Flex.tsx";
import Image from "../UI/image/Image.tsx";
import Paragraph from "../UI/paragraph/paragraph.tsx";
import LinkButton from "../UI/Link/linkButton.tsx";
import Wrapper from "../UI/Wrapper/wrapper.tsx";
import BackgroundLayer from "../components/backgroundLayer/backgroundLayer.tsx";
import React from "react";
import useMediaQuery from "../Hooks/UseMediaQuery.tsx";
function Welcome() {
  const { isMobile } = useMediaQuery();
  return (
    <>
      <Wrapper height="100vh" background="transparent">
        <BackgroundLayer position="absolute" height="100%">
          <Flex
            width="100%"
            height="100%"
            direction="row"
            justify="center"
            align="center"
            gap="100px"
          >
            {!isMobile && (
              <Flex
                direction="column"
                justify="center"
                align="center"
                gap="10px"
              >
                <Image
                  src="/welcome-image.jpeg"
                  width="80%"
                  height="80%"
                  radius="30px"
                />
              </Flex>
            )}
            <Flex direction="column" justify="center" align="center" gap="10px">
              <Image
                src="/cook.jpg"
                width="200px"
                height="200px"
                radius="50%"
              />
              <Title
                fontSize={isMobile ? "30px" : "50px"}
                aligntext="center"
                color="white"
              >
                Welcome to RecipesBook
              </Title>
              <Paragraph aligntext="center" color="white" fontSize="30px">
                The place for all your recipes
              </Paragraph>
              <LinkButton
                color="white"
                margin="20px"
                textsize="18px"
                padding="2px"
                to="/Homepage"
              >
                Get started
              </LinkButton>
            </Flex>
          </Flex>
        </BackgroundLayer>
      </Wrapper>
    </>
  );
}

export default Welcome;
