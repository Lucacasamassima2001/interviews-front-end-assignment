/* eslint-disable react/prop-types */
import { useState } from "react";
import Title from "../../UI/titles/title.tsx";
import Button from "../../UI/Button/button.tsx";
import Flex from "../../UI/Flex/Flex.tsx";
import Input from "../../UI/Input/input.tsx";
import Label from "../../UI/Input/label.tsx";
import Wrapper from "../../UI/Wrapper/wrapper.tsx";
import React from "react";
import useMediaQuery from "../../Hooks/UseMediaQuery.tsx";

export const Filters = ({ setRecipes, cousines, difficulties, diets }) => {
  const [showFilters, setShowFilters] = useState(false);
  const { isMobile } = useMediaQuery();
  interface searchDataProps {
    name: string;
    cousine: string;
    difficulty: string;
    diet: string;
  }
  const [searchData, setSearchData] = useState<searchDataProps>({
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
    let params = [
      searchData.name ? `name_like=${searchData.name}` : "",
      searchData.cousine ? `cuisineId=${searchData.cousine}` : "",
      searchData.difficulty ? `difficultyId=${searchData.difficulty}` : "",
      searchData.diet ? `dietId=${searchData.diet}` : "",
    ];

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
    <Wrapper
      width={isMobile ? "100%" : "80%"}
      radius="10px"
      height={isMobile ? "auto" : "1150px"}
      background={showFilters ? "#E7D4B5" : "transparent"}
    >
      <Flex align="center" padding="10px" direction="column">
        {showFilters && (
          <Flex
            animation="slideFromTop"
            padding="10px"
            gap="40px"
            width="85%"
            direction="row"
            wrap="wrap"
            justify="center"
          >
            <Flex direction="column" align="baseline" gap="10px">
              <Label fontSize="20px">Search by name:</Label>
              <Input
                // on key press enter search
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    searchFilteredRecipes();
                  }
                }}
                name="name"
                onChange={handleFiltersChange}
                width="250px"
                height="40px"
                fontSize="20px"
                placeholder="Recipe name..."
                padding="10px"
              />
            </Flex>
            <Flex direction="column">
              <Label fontWeight="bold" align="center" fontSize="20px">
                Cuisines:
              </Label>
              <Flex justify="center" wrap="wrap" gap="10px" align="baseline">
                {cousines.map((cousine) => (
                  <Button
                    selected={searchData.cousine === cousine.id}
                    name="cousine"
                    value={cousine.id}
                    onClick={handleFiltersChange}
                    key={cousine.id}
                    width="100px"
                    height="40px"
                    fontSize="15px"
                  >
                    {cousine.name}
                  </Button>
                ))}
              </Flex>
            </Flex>
            <Flex direction="column">
              <Label fontWeight="bold" align="center" fontSize="20px">
                Difficulty:
              </Label>
              <Flex justify="center" wrap="wrap" gap="10px" align="baseline">
                {difficulties.map((difficulty) => (
                  <Button
                    selected={searchData.difficulty === difficulty.id}
                    name="difficulty"
                    value={difficulty.id}
                    onClick={handleFiltersChange}
                    key={difficulty.id}
                    width="80px"
                    height="40px"
                    fontSize="15px"
                  >
                    {difficulty.name}
                  </Button>
                ))}
              </Flex>
            </Flex>
            <Flex width="100%" direction="column">
              <Label fontWeight="bold" align="center" fontSize="20px">
                Diets:
              </Label>
              <Flex wrap="wrap" gap="10px" align="baseline" justify="center">
                {diets.map((diet) => (
                  <Button
                    selected={searchData.diet === diet.id}
                    name="diet"
                    value={diet.id}
                    onClick={handleFiltersChange}
                    key={diet.id}
                    width="150px"
                    height="40px"
                    fontSize="15px"
                  >
                    {diet.name}
                  </Button>
                ))}
              </Flex>
            </Flex>
            <Flex gap="10px" align="baseline" justify="center">
              <Button
                onClick={() => searchFilteredRecipes()}
                width="150px"
                height="40px"
                fontSize="30px"
              >
                <i
                  style={{ color: "#74512d" }}
                  className="fa-brands fa-searchengin"
                ></i>
              </Button>
              <Button
                onClick={() => resetFilters()}
                width="150px"
                height="40px"
                fontSize="20px"
              >
                <i
                  style={{ color: "#74512d" }}
                  className="fa-solid fa-arrows-rotate"
                ></i>
              </Button>
            </Flex>
          </Flex>
        )}
        <Flex
          background={!showFilters ? "#E7D4B5" : "transparent"}
          gap="5px"
          align="baseline"
          radius="10px"
          padding={isMobile ? "5px" : "10px"}
        >
          <Title color="#74512d" fontSize={isMobile ? "15px" : "30px"}>
            {showFilters ? "Hide" : "Open"} Filters
          </Title>
          <Button
            color="white"
            width={isMobile ? "10px" : "40px"}
            height={isMobile ? "10px" : "40px"}
            fontSize={isMobile ? "15px" : "20px"}
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
