/* eslint-disable react/prop-types */
import { useState } from "react";
import Title from "../../UI/titles/title";
import Button from "../../UI/Button/button";
import Flex from "../../UI/Flex/Flex";
import Input from "../../UI/Input/input";
import Label from "../../UI/Input/label";
import Wrapper from "../../UI/Wrapper/wrapper";

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
    let url = "http://localhost:8080/recipes";
    let params = [];

    if (searchData.name) {
      params.push(`name_like=${searchData.name}`);
    }
    if (searchData.cousine) {
      params.push(`cuisineId=${searchData.cousine}`);
    }
    if (searchData.difficulty) {
      params.push(`difficultyId=${searchData.difficulty}`);
    }
    if (searchData.diet) {
      params.push(`dietId=${searchData.diet}`);
    }

    if (params.length > 0) {
      url += "?" + params.join("&");
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error(error);
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
    <Wrapper margin="100px 0 0 0" background="#E7D4B5">
      <Flex align="center" padding="10px" direction="column">
        {showFilters && (
          <Flex
            padding="10px"
            gap="10px"
            width="85%"
            height="500px"
            direction="row"
            wrap="wrap"
            justify="center"
          >
            <Flex direction="column" align="baseline" gap="10px">
              <Label fontSize="20px">Search by name:</Label>
              <Input
                name="name"
                onChange={handleFiltersChange}
                width="300px"
                height="40px"
                fontSize="20px"
                placeholder="Recipe name..."
              />
            </Flex>
            <Flex direction="column">
              <Label align="center" fontSize="20px">
                Cuisines:
              </Label>
              <Flex
                width="600px"
                justify="center"
                wrap="wrap"
                gap="10px"
                align="baseline"
              >
                {cousines.map((cousine) => (
                  <Button
                    selected={searchData.cousine === cousine.id}
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
              <Label align="center" fontSize="20px">
                Difficulty:
              </Label>
              <Flex
                width="600px"
                justify="center"
                wrap="wrap"
                gap="10px"
                align="baseline"
              >
                {difficulties.map((difficulty) => (
                  <Button
                    selected={searchData.difficulty === difficulty.id}
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
              <Label align="center" fontSize="20px">
                Diets:
              </Label>
              <Flex
                width="600px"
                justify="center"
                wrap="wrap"
                gap="10px"
                align="baseline"
              >
                {diets.map((diet) => (
                  <Button
                    selected={searchData.diet === diet.id}
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
        <Flex margin="10px 0 0 0" gap="5px" align="baseline">
          <Title fontSize="30px">{showFilters ? "Hide" : "Open"} Filters</Title>
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
    </Wrapper>
  );
};
