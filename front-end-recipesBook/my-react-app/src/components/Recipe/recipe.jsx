/* eslint-disable react/prop-types */
import Flex from "../../UI/Flex/Flex";
import LinkButton from "../../UI/Link/linkButton";
import List from "../../UI/List/list";
import ListItem from "../../UI/List/listItem";
import Image from "../../UI/image/Image";
import Paragraph from "../../UI/paragraph/paragraph";
import Title from "../../UI/titles/title";

export const RecipeItem = ({ recipe }) => {
  return (
    <>
      <Flex position="relative" radius="10px" width="900px" direction="row">
        <Flex>
          <Image
            radius="10px"
            width="500px"
            height="450px"
            src={`/server${recipe.image}`}
          />
        </Flex>
        <Flex
          width="500px"
          height="100%"
          direction="column"
          gap="10px"
          padding="10px"
        >
          <Title fontWeight="bold" fontSize="25px">
            {recipe.name}
          </Title>
          <Paragraph>{recipe.instructions}</Paragraph>
          <List liststyle="circle" direction="column" gap="10px">
            {recipe.ingredients.map((ingredient) => (
              <ListItem key={ingredient}>{ingredient}</ListItem>
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
