import Title from "../UI/titles/title";
import Flex from "../UI/Flex/Flex";
import Image from "../UI/image/Image";
import Paragraph from "../UI/paragraph/paragraph";
import LinkButton from "../UI/Link/linkButton";
import Wrapper from "../UI/Wrapper/wrapper";
import BackgroundLayer from "../components/backgroundLayer/backgroundLayer";
function App() {
  return (
    <>
      <Wrapper position="relative" height="100vh" background="transparent">
        <BackgroundLayer position="absolute" height="100%">
          <Flex
            width="100%"
            height="100%"
            direction="row"
            justify="center"
            align="center"
            gap="100px"
          >
            <Flex direction="column" justify="center" align="center" gap="10px">
              <Image
                src="/welcome-image.jpeg"
                width="80%"
                height="80%"
                radius="30px"
              />
            </Flex>
            <Flex direction="column" justify="center" align="center" gap="10px">
              <Image
                src="/cook.jpg"
                width="200px"
                height="200px"
                radius="50%"
              />
              <Title color="white">Welcome to RecipesBook</Title>
              <Paragraph color="white" fontSize="30px">
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

export default App;
