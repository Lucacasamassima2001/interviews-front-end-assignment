/* eslint-disable react/prop-types */
import React from "react";
import Flex from "../../UI/Flex/Flex.tsx";
import LinkButton from "../../UI/Link/linkButton.tsx";
import List from "../../UI/List/list.tsx";
import ListItem from "../../UI/List/listItem.tsx";
import Image from "../../UI/image/Image.tsx";
import Paragraph from "../../UI/paragraph/paragraph.tsx";
import Title from "../../UI/titles/title.tsx";
import useMediaQuery from "../../Hooks/UseMediaQuery.tsx";
export const RecipeItem = ({ recipe }) => {
  const { isMobile } = useMediaQuery();
  return (
    <>
      <Flex
        position="relative"
        radius="10px"
        width={isMobile ? "300px" : "900px"}
        height={isMobile ? "750px" : "none"}
        direction={isMobile ? "column" : "row"}
      >
        <Flex>
          <Image
            radius="10px"
            width={isMobile ? "300px" : "500px"}
            height={isMobile ? "300px" : "450px"}
            src={`/server${recipe.image}`}
          />
        </Flex>
        <Flex
          width={isMobile ? "300px" : "500px"}
          height="100%"
          direction="column"
          gap="10px"
          padding="10px"
        >
          <Title fontWeight="bold" fontSize="25px">
            {recipe.name}
          </Title>
          <Paragraph fontSize={isMobile ? "15px" : "20px"}>
            {recipe.instructions}
          </Paragraph>
          <List
            width={isMobile ? "200px" : "500px"}
            liststyle="circle"
            direction="column"
            gap="10px"
          >
            {recipe.ingredients.map((ingredient) => (
              <ListItem width={isMobile ? "200px" : "500px"} key={ingredient}>
                {ingredient}
              </ListItem>
            ))}
          </List>
          <Flex justify="center">
            <LinkButton
              position="absolute"
              bottom="0px"
              width="150px"
              to={`/recipe/${recipe.id}`}
              state={{ data: recipe }}
              key={recipe.id}
            >
              View Recipe
            </LinkButton>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
