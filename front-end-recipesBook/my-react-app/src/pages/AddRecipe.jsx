/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Input from "../UI/Input/input";
import Label from "../UI/Input/label";
import Flex from "../UI/Flex/Flex";
import Button from "../UI/Button/button";
import Title from "../UI/titles/title";
import { GoBackButton } from "../components/GoBackButton/goBackButton";
import TextArea from "../UI/Input/textarea";
import Wrapper from "../UI/Wrapper/wrapper";

export const AddRecipe = () => {
  const [cousines, setCousines] = useState([]);
  const [difficulties, setDifficulties] = useState([]);
  const [diets, setDiets] = useState([]);
  const [recipeData, setRecipeData] = useState({
    name: "",
    instructions: "",
    cuisineId: "",
    difficultyId: "",
    dietId: "",
    ingredients: [],
    image: null,
  });
  console.log(recipeData);
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
  }, []);

  const handleRecipeChange = (e) => {
    setRecipeData({
      ...recipeData,
      [e.target.name]: e.target.value,
    });
  };

  const createNewRecipe = () => {
    // transforming ingredients from object to array and pushing every value
    const ingredientsArray = [];
    for (const [key, value] of Object.entries(recipeData.ingredients)) {
      ingredientsArray.push(value);
    }
    setRecipeData({
      ...recipeData,
      ingredients: ingredientsArray,
    });

    // create new recipe
    const newRecipe = {
      name: recipeData.name,
      instructions: recipeData.instructions,
      cuisineId: recipeData.cuisineId,
      difficultyId: recipeData.difficultyId,
      dietId: recipeData.dietId,
      ingredients: ingredientsArray,
      image: recipeData.image,
    };
    const formData = new FormData();
    for (const key in newRecipe) {
      formData.append(key, newRecipe[key]);
    }
    fetch("http://localhost:8080/recipes", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Wrapper>
      <Flex padding="10px" direction="column">
        <GoBackButton />
        <Title>Add Recipe</Title>
        <form onSubmit={(e) => e.preventDefault()}>
          <Flex direction="column" gap="10px">
            <Flex direction="column" align="baseline" gap="10px">
              <Label fontSize="30px" htmlFor="name">
                Name
              </Label>
              <Input
                width={"900px"}
                padding="10px"
                fontSize="20px"
                onChange={handleRecipeChange}
                id="name"
                name="name"
                type="text"
                value={recipeData.name}
              />
            </Flex>
            <Flex direction="column" align="baseline" gap="10px">
              <Label fontSize="30px" htmlFor="name">
                Instructions
              </Label>
              <TextArea
                width={"900px"}
                padding="10px"
                fontSize="20px"
                height="200px"
                onChange={handleRecipeChange}
                id="instructions"
                name="instructions"
                type="textarea"
                value={recipeData.instructions}
              />
            </Flex>
            <Flex direction="column">
              <Label fontSize="30px">Cuisine:</Label>
              <Flex>
                {cousines.map((cousine) => (
                  <Button
                    name="cuisineId"
                    value={cousine.id}
                    onClick={handleRecipeChange}
                    key={cousine.id}
                    width="100px"
                    height="40px"
                    fontSize="20px"
                    padding="30px"
                  >
                    {cousine.name}
                  </Button>
                ))}
              </Flex>
            </Flex>
            <Flex direction="column">
              <Label fontSize="30px">Difficulty:</Label>
              <Flex>
                {difficulties.map((difficulty) => (
                  <Button
                    name="difficultyId"
                    value={difficulty.id}
                    onClick={handleRecipeChange}
                    key={difficulty.id}
                    width="100px"
                    height="40px"
                    padding="30px"
                    fontSize="20px"
                  >
                    {difficulty.name}
                  </Button>
                ))}
              </Flex>
            </Flex>
            <Flex direction="column">
              <Label fontSize="30px">Diets:</Label>
              <Flex>
                {diets.map((diet) => (
                  <Button
                    name="dietId"
                    value={diet.id}
                    onClick={handleRecipeChange}
                    key={diet.id}
                    width="200px"
                    height="40px"
                    padding="30px"
                    fontSize="20px"
                  >
                    {diet.name}
                  </Button>
                ))}
              </Flex>
            </Flex>
            <Flex direction="column">
              <Label fontSize="30px">Ingredients:</Label>
              <Flex margin="10px" width="600px" wrap="wrap" gap="10px">
                <Input
                  width="200px"
                  height="40px"
                  fontSize="20px"
                  padding="5px"
                  placeholder="Ingredient 1"
                  name="ingredient1"
                  type="text"
                  onChange={(e) =>
                    setRecipeData((prev) => ({
                      ...prev,
                      ingredients: {
                        ...prev.ingredients,
                        ingredient1: e.target.value,
                      },
                    }))
                  }
                />
                <Input
                  width="200px"
                  height="40px"
                  fontSize="20px"
                  padding="5px"
                  placeholder="Ingredient 2"
                  name="ingredient2"
                  type="text"
                  onChange={(e) =>
                    setRecipeData((prev) => ({
                      ...prev,
                      ingredients: {
                        ...prev.ingredients,
                        ingredient2: e.target.value,
                      },
                    }))
                  }
                />
                <Input
                  width="200px"
                  height="40px"
                  fontSize="20px"
                  padding="5px"
                  placeholder="Ingredient 3"
                  name="ingredient3"
                  type="text"
                  onChange={(e) =>
                    setRecipeData((prev) => ({
                      ...prev,
                      ingredients: {
                        ...prev.ingredients,
                        ingredient3: e.target.value,
                      },
                    }))
                  }
                />
                <Input
                  width="200px"
                  height="40px"
                  fontSize="20px"
                  padding="5px"
                  placeholder="Ingredient 4"
                  name="ingredient4"
                  type="text"
                  onChange={(e) =>
                    setRecipeData((prev) => ({
                      ...prev,
                      ingredients: {
                        ...prev.ingredients,
                        ingredient4: e.target.value,
                      },
                    }))
                  }
                />
                <Input
                  width="200px"
                  height="40px"
                  fontSize="20px"
                  padding="5px"
                  placeholder="Ingredient 5"
                  name="ingredient5"
                  type="text"
                  onChange={(e) =>
                    setRecipeData((prev) => ({
                      ...prev,
                      ingredients: {
                        ...prev.ingredients,
                        ingredient5: e.target.value,
                      },
                    }))
                  }
                />
              </Flex>
            </Flex>
            <Flex>
              <Input
                type="file"
                onChange={(e) =>
                  setRecipeData({ ...recipeData, image: e.target.files[0] })
                }
              />
            </Flex>
          </Flex>
          <Flex>
            <Button
              onClick={() => createNewRecipe()}
              width="100px"
              height="40px"
              fontSize="10px"
            >
              Create new Recipe
            </Button>
          </Flex>
        </form>
      </Flex>
    </Wrapper>
  );
};
