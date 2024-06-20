import Wrapper from "../UI/Wrapper/wrapper";
import { useEffect, useState } from "react";
import { Navbar } from "../components/NavBar/navbar";
import { Filters } from "../components/Filters/filters";
import Title from "../UI/titles/title";
import Flex from "../UI/Flex/Flex";
import { RecipeItem } from "../components/Recipe/recipe";
import Button from "../UI/Button/button";
import Image from "../UI/image/Image";

export const Homepage = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipesPage, setRecipesPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(10);
  const [cousines, setCousines] = useState([]);
  const [difficulties, setDifficulties] = useState([]);
  const [diets, setDiets] = useState([]);
  // const totalPages = Math.ceil(recipes.length / recipesPerPage);
  // const startIndex = (recipesPage - 1) * recipesPerPage;
  // const endIndex = startIndex + recipesPerPage;

  useEffect(() => {
    // fetch cousines
    fetch("http://localhost:8080/cuisines")
      .then((response) => response.json())
      .then((data) => {
        setCousines(data);
      })
      .catch((error) => {
        console.error(error);
      });

    // fetch difficulties
    fetch("http://localhost:8080/difficulties")
      .then((response) => response.json())
      .then((data) => {
        setDifficulties(data);
      })
      .catch((error) => {
        console.error(error);
      });

    // fetch diets
    fetch("http://localhost:8080/diets")
      .then((response) => response.json())
      .then((data) => {
        setDiets(data);
      })
      .catch((error) => {
        console.error(error);
      });
    fetch(
      `http://localhost:8080/recipes?_page=${recipesPage}&_limit=${recipesPerPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        const recipes = data;
        setRecipes(recipes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [recipesPage, recipesPerPage]);

  const onLoadMore = async () => {
    setRecipesPage((prevPage) => prevPage + 1);
    const response = await fetch(
      `http://localhost:8080/recipes?_page=${recipesPage}&_limit=${recipesPerPage}`
    );

    const data = await response.json();
    setRecipes([...recipes, ...data]);
  };
  const setFiltered = (recipes) => {
    setRecipes(recipes);
  };

  return (
    <Wrapper background="#E7D4B5">
      <Flex
        padding="20px"
        align="center"
        justify="space-between"
        height="100px"
        gap="20px"
      >
        <Title fontSize="50px">RecipeBook</Title>
        <Image radius="50%" src="/cook.jpg" height={"100%"} />
      </Flex>
      <Navbar />
      <Filters
        setRecipes={setFiltered}
        cousines={cousines}
        difficulties={difficulties}
        diets={diets}
      />
      <Flex>
        <Flex
          radius="10px"
          padding="10px"
          background="#F6E6CB"
          width="80%"
          direction="column"
        >
          <Title fontSize="30px">
            Check out the latest recipes from our Community!
          </Title>
          <Flex direction="row" gap="100px" wrap="wrap">
            {recipes
              ? recipes.map((recipe) => (
                  <RecipeItem recipe={recipe} key={recipe.id} />
                ))
              : ""}
          </Flex>
        </Flex>
        <Flex width="20%"></Flex>
      </Flex>

      <Flex padding="10px" justify="center">
        {/* to fix on pageEnd */}
        {recipesPage !== 3 && (
          <Button fontSize="15px" padding="10px" onClick={onLoadMore}>
            Load More
          </Button>
        )}
      </Flex>
    </Wrapper>
  );
};
