/* eslint-disable react/prop-types */
import { useState } from "react";
import Title from "../../UI/titles/title";
import Button from "../../UI/Button/button";
import Flex from "../../UI/Flex/Flex";
import Input from "../../UI/Input/input";
import Label from "../../UI/Input/label";

export const Filters = ({ setRecipes, cousines, difficulties, diets }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchData, setSearchData] = useState({
    name: "",
    cousine: "",
    difficulty: "",
    diet: "",
  });

  const handleFiltersChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };
  const searchFilteredRecipes = async () => {
    if (searchData.name) {
      const response = await fetch(
        `http://localhost:8080/recipes?name_like=${searchData.name}`
      );
      const data = await response.json();
      setRecipes(data);
    } else if (searchData.cousine) {
      const response = await fetch(
        `http://localhost:8080/recipes?cuisineId=${searchData.cousine}`
      );
      const data = await response.json();
      setRecipes(data);
    } else if (searchData.difficulty) {
      const response = await fetch(
        `http://localhost:8080/recipes?difficultyId=${searchData.difficulty}`
      );
      const data = await response.json();
      setRecipes(data);
    } else if (searchData.diet) {
      const response = await fetch(
        `http://localhost:8080/recipes?dietId=${searchData.diet}`
      );
      const data = await response.json();
      setRecipes(data);
    } else if (
      searchData.name !== "" &&
      searchData.cousine !== "" &&
      searchData.difficulty !== "" &&
      searchData.diet !== ""
    ) {
      const response = await fetch(
        `http://localhost:8080/recipes?name_like=${searchData.name}&cuisineId=${searchData.cousine}&difficultyId=${searchData.difficulty}&dietId=${searchData.diet}`
      );
      const data = await response.json();
      setRecipes(data);
    }
  };

  const resetFilters = async () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
    const response = await fetch("http://localhost:8080/recipes");
    const data = await response.json();
    setRecipes(data);
    setSearchData({
      name: "",
      cousine: "",
      difficulty: "",
      diet: "",
    });
  };

  return (
    <Flex padding="10px" direction="column">
      {showFilters && (
        <Flex
          padding="10px"
          gap="10px"
          width="100%"
          height="500px"
          direction="column"
        >
          <Title fontSize="30px">Filters</Title>
          <Flex direction="column" align="baseline" gap="10px">
            <Label>Search by name:</Label>
            <Input
              name="name"
              onChange={handleFiltersChange}
              width="300px"
              height="40px"
              fontSize="20px"
            />
          </Flex>
          <Flex direction="column">
            <Label>Cuisines:</Label>
            <Flex width="600px" wrap="wrap">
              {cousines.map((cousine) => (
                <Button
                  name="cousine"
                  value={cousine.id}
                  onClick={handleFiltersChange}
                  key={cousine.id}
                  width="150px"
                  height="40px"
                  fontSize="20px"
                >
                  {cousine.name}
                </Button>
              ))}
            </Flex>
          </Flex>
          <Flex direction="column">
            <Label>Difficulty:</Label>
            <Flex>
              {difficulties.map((difficulty) => (
                <Button
                  name="difficulty"
                  value={difficulty.id}
                  onClick={handleFiltersChange}
                  key={difficulty.id}
                  width="100px"
                  height="40px"
                  fontSize="20px"
                >
                  {difficulty.name}
                </Button>
              ))}
            </Flex>
          </Flex>
          <Flex direction="column">
            <Label>Diets:</Label>
            <Flex>
              {diets.map((diet) => (
                <Button
                  name="diet"
                  value={diet.id}
                  onClick={handleFiltersChange}
                  key={diet.id}
                  width="200px"
                  height="40px"
                  fontSize="20px"
                >
                  {diet.name}
                </Button>
              ))}
            </Flex>
          </Flex>
          <Flex gap="10px" alig="baseline" justify="center">
            <Button
              onClick={() => searchFilteredRecipes()}
              width="150px"
              height="40px"
              fontSize="20px"
            >
              Search
            </Button>
            <Button
              onClick={() => resetFilters()}
              width="150px"
              height="40px"
              fontSize="20px"
            >
              Clear Filters
            </Button>
          </Flex>
        </Flex>
      )}
      <Flex margin="40px 0 0 0" gap="5px" align="baseline">
        <Title fontSize="20px">Filter Recipes</Title>
        <Button
          width="40px"
          height="40px"
          fontSize="20px"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? (
            <i
              style={{ color: "#74512d" }}
              className="fa-solid fa-arrow-up"
            ></i>
          ) : (
            <i
              style={{ color: "#74512d" }}
              className="fa-solid fa-arrow-down"
            ></i>
          )}
        </Button>
      </Flex>
    </Flex>
  );
};
