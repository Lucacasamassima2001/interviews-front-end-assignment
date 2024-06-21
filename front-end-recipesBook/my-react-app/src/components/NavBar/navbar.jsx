import LinkButton from "../../UI/Link/linkButton";
import Flex from "../../UI/Flex/Flex";

export const Navbar = () => {
  return (
    <>
      <Flex justify="center" gap="100px">
        <LinkButton width="250px" textsize="30px" to="/">
          Welcome
        </LinkButton>
        <LinkButton width="250px" textsize="30px" to="/about">
          About
        </LinkButton>
        <LinkButton width="250px" textsize="30px" to="/create-recipe">
          Add you recipe
        </LinkButton>
      </Flex>
    </>
  );
};
