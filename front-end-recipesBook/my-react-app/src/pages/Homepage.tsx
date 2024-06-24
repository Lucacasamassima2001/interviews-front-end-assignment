import Wrapper from "../UI/Wrapper/wrapper.tsx";
import { useEffect, useState } from "react";
import { Navbar } from "../components/NavBar/navbar.tsx";
import { Filters } from "../components/Filters/filters.tsx";
import Title from "../UI/titles/title.tsx";
import Flex from "../UI/Flex/Flex.tsx";
import { RecipeItem } from "../components/Recipe/recipe.tsx";
import Button from "../UI/Button/button.tsx";
import Image from "../UI/image/Image.tsx";
import Paragraph from "../UI/paragraph/paragraph.tsx";
import React from "react";

export const Homepage = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipesPage, setRecipesPage] = useState(1);
  interface RecipesDetails {
    cuisines: any[];
    difficulties: any[];
    diets: any[];
  }

  const [recipesDetails, setRecipesDetails] = useState<RecipesDetails>({
    cuisines: [],
    difficulties: [],
    diets: [],
  });
  const recipesPerPage = 10;
  let totalPages = Math.ceil(recipes.length / recipesPerPage);
  const startIndex = (recipesPage - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  useEffect(() => {
    // fetch cousines
    fetch("http://localhost:8080/cuisines")
      .then((response) => response.json())
      .then((data) => {
        setRecipesDetails((prev) => ({ ...prev, cuisines: data }));
      })
      .catch((error) => {
        console.error(error);
      });

    // fetch difficulties
    fetch("http://localhost:8080/difficulties")
      .then((response) => response.json())
      .then((data) => {
        setRecipesDetails((prev) => ({ ...prev, difficulties: data }));
      })
      .catch((error) => {
        console.error(error);
      });

    // fetch diets
    fetch("http://localhost:8080/diets")
      .then((response) => response.json())
      .then((data) => {
        setRecipesDetails((prev) => ({ ...prev, diets: data }));
      })
      .catch((error) => {
        console.error(error);
      });
    fetch(`http://localhost:8080/recipes`)
      .then((response) => response.json())
      .then((data) => {
        const recipes = data;
        setRecipes(recipes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const setFiltered = (recipes) => {
    setRecipes(recipes);
    recipesPage === 1 ? setRecipesPage(1) : setRecipesPage(1);
  };
  return (
    <Wrapper background="rgb(0, 0, 0, 0.3)">
      <Flex
        padding="20px"
        align="center"
        justify="space-between"
        height="100px"
        gap="20px"
      >
        <Title color="white" fontSize="50px">
          RecipesBook
        </Title>
        <Image radius="50%" src="/cook.jpg" height={"100%"} />
      </Flex>
      <Navbar />

      <Flex gap="10px" margin="100px 0 0 0">
        <Flex
          radius="10px"
          padding="10px"
          background="#F6E6CB"
          width="80%"
          direction="column"
          height="100%"
          minheight="800px"
        >
          <Title fontSize="30px">
            Check out the latest recipes from our Community!
          </Title>
          <Flex direction="row" gap="100px" wrap="wrap">
            {recipes.slice(startIndex, endIndex).map((recipe: any) => (
              <RecipeItem key={recipe.id} recipe={recipe} />
            ))}
          </Flex>
          {recipes.length === 0 && (
            <Paragraph animation={"not-found"} fontSize="30px">
              No recipes found!!!
            </Paragraph>
          )}
        </Flex>
        <Flex width="20%">
          <Filters
            setRecipes={setFiltered}
            cousines={recipesDetails.cuisines}
            difficulties={recipesDetails.difficulties}
            diets={recipesDetails.diets}
          />
        </Flex>
      </Flex>

      <Flex padding="10px" justify="center">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            color="white"
            width="30px"
            height="30px"
            radius="50%"
            selected={recipesPage === index + 1}
            key={index}
            fontSize="15px"
            padding="5px"
            onClick={() => setRecipesPage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </Flex>
    </Wrapper>
  );
};
