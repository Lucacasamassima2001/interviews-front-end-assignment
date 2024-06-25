import LinkButton from "../../UI/Link/linkButton.tsx";
import Flex from "../../UI/Flex/Flex.tsx";
import React from "react";
import useMediaQuery from "../../Hooks/UseMediaQuery.tsx";
export const Navbar = () => {
  const { isMobile } = useMediaQuery();
  return (
    <>
      <Flex justify="center" gap={isMobile ? "5px" : "100px"}>
        <LinkButton
          color="white"
          width={isMobile ? "100px" : "300px"}
          padding={isMobile ? "5px" : "10px"}
          textsize={isMobile ? "13px" : "40px"}
          to="/"
        >
          Welcome
        </LinkButton>
        <LinkButton
          color="white"
          width={isMobile ? "100px" : "300px"}
          padding={isMobile ? "5px" : "10px"}
          textsize={isMobile ? "13px" : "40px"}
          to="/about"
        >
          About
        </LinkButton>
        <LinkButton
          color="white"
          width={isMobile ? "100px" : "300px"}
          padding={isMobile ? "5px" : "10px"}
          textsize={isMobile ? "13px" : "40px"}
          to="/create-recipe"
        >
          Add your recipe
        </LinkButton>
      </Flex>
    </>
  );
};
