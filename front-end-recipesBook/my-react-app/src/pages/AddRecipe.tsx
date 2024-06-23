import { useEffect, useState, useRef } from "react";
import Input from "../UI/Input/input.tsx";
import Label from "../UI/Input/label.tsx";
import Flex from "../UI/Flex/Flex.tsx";
import Button from "../UI/Button/button.tsx";
import Title from "../UI/titles/title.tsx";
import { GoBackButton } from "../components/GoBackButton/goBackButton.tsx";
import TextArea from "../UI/Input/textarea.tsx";
import Wrapper from "../UI/Wrapper/wrapper.tsx";
import Image from "../UI/image/Image.tsx";
import Modal from "../components/Modals/Modal.tsx";
import React from "react";

export const AddRecipe = () => {
  const [recipesDetails, setRecipesDetails] = useState({
    cuisines: [],
    difficulties: [],
    diets: [],
  });
  interface RecipeData {
    name: string;
    instructions: string;
    cuisineId: string;
    difficultyId: string;
    dietId: string;
    ingredients: string[];
    image: any;
  }
  const [recipeData, setRecipeData] = useState<RecipeData>({
    name: "",
    instructions: "",
    cuisineId: "",
    difficultyId: "",
    dietId: "",
    ingredients: [],
    image: null,
  });
  const [imgPreview, setImgPreview] = useState({
    previewURL: null,
    isActive: false,
  });
  const [emptyFields, setEmptyFields] = useState(true);
  const [success, setSuccess] = useState(false);
  const imgRef = useRef<HTMLInputElement>(null);
  const dialog = useRef(null);
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

    // check if form is filled to allow to create

    if (
      recipeData.name.trim() !== "" &&
      recipeData.instructions.trim() !== "" &&
      recipeData.image !== null
    ) {
      setEmptyFields(false);
    }
  }, [emptyFields, recipeData]);

  const handleRecipeChange = (e) => {
    setRecipeData({
      ...recipeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setRecipeData({
      ...recipeData,
      image: e.target.files[0],
    });

    // get url from image file
    const imageFile = new File([e.target.files[0]], e.target.files[0].name, {
      type: e.target.files[0].type,
    });
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.addEventListener("load", () => {
      setImgPreview((prev: any) => ({
        ...prev,
        previewURL: reader.result,
      }));
    });
  };

  const createNewRecipe = () => {
    // transforming ingredients from object to array and pushing every value
    const ingredientsArray: string[] = [];
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
        setSuccess(true);
        (dialog.current as any)?.open();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Wrapper background="transparent">
      <GoBackButton color="white" />
      <Modal isOpen={success} isSuccess={success} ref={dialog} />
      <Flex justify="center">
        <Flex
          background="rgba(0, 0, 0, 0.5)"
          padding="10px"
          justify="center"
          height="90%"
          radius="10px"
        >
          <Flex padding="10px" gap="50px" direction="row">
            <Flex direction="column">
              <Title color="white">Add Recipe</Title>
              <form onSubmit={(e) => e.preventDefault()}>
                <Flex direction="column" gap="10px">
                  <Flex direction="column" align="baseline" gap="10px">
                    <Label color="white" fontSize="30px" htmlFor="name">
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
                      placeholder="Your Recipe name..."
                    />
                  </Flex>
                  <Flex direction="column" align="baseline" gap="10px">
                    <Label color="white" fontSize="30px" htmlFor="name">
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
                      value={recipeData.instructions}
                      placeholder="Your Recipe instructions..."
                    />
                  </Flex>
                  <Flex direction="column">
                    <Label color="white" fontSize="30px">
                      Cuisine:
                    </Label>
                    <Flex>
                      {recipesDetails.cuisines?.map((cousine: any) => (
                        <Button
                          color="white"
                          selected={recipeData.cuisineId === cousine.id}
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
                    <Label color="white" fontSize="30px">
                      Difficulty:
                    </Label>
                    <Flex>
                      {recipesDetails.difficulties?.map((difficulty: any) => (
                        <Button
                          color="white"
                          selected={recipeData.difficultyId === difficulty.id}
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
                    <Label color="white" fontSize="30px">
                      Diets:
                    </Label>
                    <Flex>
                      {recipesDetails.diets?.map((diet: any) => (
                        <Button
                          selected={recipeData.dietId === diet.id}
                          name="dietId"
                          value={diet.id}
                          onClick={handleRecipeChange}
                          key={diet.id}
                          width="200px"
                          height="40px"
                          padding="30px"
                          fontSize="20px"
                          color="white"
                        >
                          {diet.name}
                        </Button>
                      ))}
                    </Flex>
                  </Flex>
                  <Flex direction="column">
                    <Label color="white" fontSize="30px">
                      Ingredients:
                    </Label>
                    <Flex margin="10px" width="600px" wrap="wrap" gap="10px">
                      {[...Array(5)].map((_, index) => (
                        <Input
                          key={index}
                          width="200px"
                          height="40px"
                          fontSize="20px"
                          padding="5px"
                          placeholder={`Ingredient ${index + 1}`}
                          name={`ingredient${index + 1}`}
                          type="text"
                          onChange={(e) =>
                            setRecipeData((prev) => ({
                              ...prev,
                              ingredients: {
                                ...prev.ingredients,
                                [`ingredient${index + 1}`]: e.target.value,
                              },
                            }))
                          }
                        />
                      ))}
                    </Flex>
                  </Flex>
                  <Flex>
                    <Input
                      ref={imgRef}
                      style={{ display: "none" }}
                      type="file"
                      onChange={(e) => handleImageChange(e)}
                    />
                    <Button
                      fontSize="30px"
                      onClick={() => imgRef.current?.click()}
                    >
                      <i
                        style={{ color: "white" }}
                        className="fa-solid fa-image"
                      ></i>
                    </Button>
                  </Flex>
                </Flex>
                <Flex>
                  <Button
                    onClick={() => createNewRecipe()}
                    width="180px"
                    height="40px"
                    fontSize="20px"
                    color="white"
                    hovertextdecoration="underline"
                    disabled={emptyFields}
                  >
                    Create new Recipe
                  </Button>
                </Flex>
              </form>
            </Flex>
            <Flex padding="10px" align="center" direction="column">
              <Flex gap="10px" align="center" direction="row">
                <Title color="white" fontSize="30px">
                  Your recipe image preview:
                </Title>
                <Button
                  onClick={() =>
                    setImgPreview((prev) => ({
                      ...prev,
                      isActive: !prev.isActive,
                    }))
                  }
                  width="40px"
                  height="40px"
                  fontSize="20px"
                >
                  {imgPreview.isActive ? (
                    <i
                      style={{ color: "white" }}
                      className="fa-solid fa-eye-slash"
                    ></i>
                  ) : (
                    <i
                      style={{ color: "white" }}
                      className="fa-solid fa-eye"
                    ></i>
                  )}
                </Button>
              </Flex>

              {imgPreview.isActive && (
                <Image
                  radius="10px"
                  width={"350px"}
                  height={"300px"}
                  src={
                    imgPreview.previewURL
                      ? imgPreview.previewURL
                      : "/placeholder.jpg"
                  }
                />
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  );
};
