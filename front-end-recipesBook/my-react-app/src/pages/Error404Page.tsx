/* eslint-disable react/prop-types */
import React from "react";
import Paragraph from "../UI/paragraph/paragraph.tsx";
import Title from "../UI/titles/title.tsx";
import { GoBackButton } from "../components/GoBackButton/goBackButton.tsx";
import Flex from "../UI/Flex/Flex.tsx";

export const Error404Page = ({ wrongPath }) => {
  return (
    <>
      <GoBackButton color={"white"} />
      <Flex height="100vh" justify="center" align="center">
        <Flex
          width="50%"
          height="30%"
          direction="column"
          align="center"
          background="rgba(0, 0, 0, 0.5)"
          radius="20px"
        >
          <Title color="white" aligntext="center">
            Oops...Something went wrong...
          </Title>
          <Paragraph
            fontSize="30px"
            margin="50px 0 0 0"
            aligntext="center"
            animation="not-found"
            color="white"
          >
            {wrongPath ? "This page doesn't exist" : "Please try again later!"}
          </Paragraph>
        </Flex>
      </Flex>
    </>
  );
};
