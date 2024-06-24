import LinkButton from "../../UI/Link/linkButton.tsx";
import Flex from "../../UI/Flex/Flex.tsx";
import React from "react";

export const Navbar = () => {
  return (
    <>
      <Flex justify="center" gap="100px">
        <LinkButton
          color="white"
          width="300px"
          padding="10px"
          textsize="40px"
          to="/"
        >
          Welcome
        </LinkButton>
        <LinkButton
          color="white"
          width="300px"
          padding="10px"
          textsize="40px"
          to="/about"
        >
          About
        </LinkButton>
        <LinkButton
          color="white"
          width="300px"
          padding="10px"
          textsize="40px"
          to="/create-recipe"
        >
          Add your recipe
        </LinkButton>
      </Flex>
    </>
  );
};
