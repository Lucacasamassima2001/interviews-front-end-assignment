import { useEffect, useState } from "react";
import Flex from "../UI/Flex/Flex.tsx";
import Title from "../UI/titles/title.tsx";
import Image from "../UI/image/Image.tsx";
import Paragraph from "../UI/paragraph/paragraph.tsx";
import Label from "../UI/Input/label.tsx";
import Wrapper from "../UI/Wrapper/wrapper.tsx";
import List from "../UI/List/list.tsx";
import ListItem from "../UI/List/listItem.tsx";
import { Review } from "../components/Reviews/review.tsx";
import { GoBackButton } from "../components/GoBackButton/goBackButton.tsx";
import Input from "../UI/Input/input.tsx";
import Button from "../UI/Button/button.tsx";
import "../index.css";
import { Error404Page } from "./Error404Page.tsx";
import React from "react";
import useMediaQuery from "../Hooks/UseMediaQuery.tsx";
export const RecipeDetails = () => {
  const { isMobile } = useMediaQuery();
  interface RecipeData {
    data: any;
    comments: any;
    notFound: boolean;
  }

  interface NewComment {
    comment: string;
    rating: number;
    date: string;
  }

  const [recipeData, setRecipeData] = useState<RecipeData>({
    data: {},
    comments: [],
    notFound: false,
  });
  const currentDate = new Date();
  const utcDate = currentDate.toISOString().split("T")[0] + "T00:00:00.000Z";
  const [newComment, setNewComment] = useState<NewComment>({
    comment: "",
    rating: 0,
    date: utcDate,
  });

  // get total rating of recipe
  let totalRating = recipeData.comments.reduce(
    (acc, comment) => acc + comment.rating,
    0
  );

  let averageRating = totalRating / recipeData.comments.length;
  const [hover, setHover] = useState(null as number | null);
  let totalStars = 5;
  const path = window.location.pathname.split("/");
  useEffect(() => {
    // fetch data from id in the path
    fetch(`http://localhost:8080/recipes/${path[2]}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipeData((prev) => ({ ...prev, data: data }));
        setRecipeData((prev) => ({ ...prev, notFound: false }));
      })
      .catch((error) => {
        console.error(error);
        setRecipeData((prev) => ({ ...prev, notFound: true }));
      });

    // fetch comments of recipe

    fetch(`http://localhost:8080/recipes/${path[2]}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setRecipeData((prev) => ({ ...prev, comments: data }));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // function to create a new review
  const onCreatingReview = async () => {
    const response = await fetch(
      `http://localhost:8080/recipes/${path[2]}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      }
    );
    const data = await response.json();
    console.log(data);
    setNewComment({
      comment: "",
      rating: 0,
      date: utcDate,
    });

    // function to fetch recipe's comments
    const fetchComments = () => {
      fetch(`http://localhost:8080/recipes/${path[2]}/comments`)
        .then((response) => response.json())
        .then((data) => {
          setRecipeData((prev) => ({ ...prev, comments: data }));
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchComments();
  };
  return (
    <>
      {!recipeData.notFound ? (
        <Wrapper padding="10px" background="rgba(0, 0, 0, 0.5)">
          <GoBackButton color="white" />
          <Flex direction="column" gap="10px" align="center">
            <Flex direction="row" align="baseline" gap="10px">
              <Title
                fontSize={isMobile ? "25px" : "50px"}
                color="white"
                width="100%"
                aligntext="center"
              >
                {recipeData.data?.name}
              </Title>

              {Array.from({ length: averageRating }, (_, index) => (
                <span
                  style={{
                    color: "yellow",
                    fontSize: isMobile ? "15px" : "50px",
                  }}
                  key={index}
                >
                  &#9733;
                </span>
              ))}
            </Flex>
            <Image
              radius="20px"
              width={isMobile ? "100%" : "800px"}
              height={isMobile ? "100%" : "800px"}
              src={`/server${recipeData.data?.image}`}
            />
          </Flex>

          <Flex
            margin="100px 0 0 0"
            direction={isMobile ? "column" : "row"}
            gap="150px"
            justify="center"
            align="baseline"
          >
            <Flex direction="column">
              <Flex
                margin="50px 0 100px 0"
                direction="column"
                gap="10px"
                align="left"
              >
                <Label color="white" fontSize="40px">
                  Instructions:
                </Label>
                <Paragraph color="white" fontSize="30px">
                  {recipeData.data?.instructions}
                </Paragraph>
              </Flex>
              <Flex
                margin="50px 0 100px 0"
                direction="column"
                gap="10px"
                align="left"
              >
                <Label color="white" fontSize="40px">
                  Ingredients:
                </Label>
                <List
                  width={isMobile ? "300px" : "800px"}
                  direction="column"
                  liststyle="circle"
                >
                  {recipeData.data?.ingredients?.map((ingredient) => (
                    <ListItem
                      width={isMobile ? "300px" : "800px"}
                      color="white"
                      fontSize="30px"
                      key={ingredient}
                    >
                      {ingredient}
                    </ListItem>
                  ))}
                </List>
              </Flex>
            </Flex>
            <Flex direction="column">
              {recipeData.comments?.length > 0 ? (
                <Flex
                  align={isMobile ? "center" : "none"}
                  direction="column"
                  gap="10px"
                >
                  <Title color="white" fontSize="40px">
                    Comments:
                  </Title>
                  <List
                    width={isMobile ? "300px" : "800px"}
                    direction="row"
                    liststyle="none"
                    wrap="wrap"
                  >
                    {recipeData.comments?.map((comment) => (
                      <ListItem
                        width={"300px"}
                        fontSize="30px"
                        key={comment.id}
                      >
                        <Review review={comment} />
                      </ListItem>
                    ))}
                  </List>
                </Flex>
              ) : (
                <Paragraph color="white" fontSize="30px">
                  No comments yet
                </Paragraph>
              )}
              <Flex
                align={isMobile ? "center" : "none"}
                width="100%"
                direction="column"
              >
                <Title color="white" fontSize={isMobile ? "35px" : "40px"}>
                  Rate this recipe:
                </Title>
                <form onSubmit={(e) => e.preventDefault()}>
                  {[...Array(totalStars)].map((star, index) => {
                    const currentRating = index + 1;

                    return (
                      <label key={index}>
                        <input
                          key={star}
                          type="radio"
                          name="rating"
                          value={currentRating}
                          onChange={() =>
                            setNewComment((prev) => ({
                              ...prev,
                              rating: currentRating,
                            }))
                          }
                        />
                        <span
                          className="star"
                          style={{
                            fontSize: isMobile ? "25px" : "40px",
                            color:
                              currentRating <= (hover || newComment.rating)
                                ? "#ffc107"
                                : "#e4e5e9",
                          }}
                          onMouseEnter={() => setHover(currentRating)}
                          onMouseLeave={() => setHover(null)}
                        >
                          &#9733;
                        </span>
                      </label>
                    );
                  })}
                  <Flex
                    gap="10px"
                    align="center"
                    direction={isMobile ? "column" : "row"}
                  >
                    <Input
                      type="text"
                      width={isMobile ? "300px" : "600px"}
                      fontSize={isMobile ? "15px" : "30px"}
                      padding="10px"
                      height={"50px"}
                      placeholder="Add a comment"
                      value={newComment.comment}
                      name="comment"
                      onChange={(e) =>
                        setNewComment((prev) => ({
                          ...prev,
                          comment: e.target.value,
                        }))
                      }
                    />
                    <Button
                      border="2px solid #74512d"
                      height={isMobile ? "40px" : "65px"}
                      padding="10px"
                      onClick={() => onCreatingReview()}
                      disabled={!newComment.comment}
                    >
                      <i
                        style={{ color: "white" }}
                        className="fa-solid fa-plus"
                      ></i>
                    </Button>
                  </Flex>
                </form>
              </Flex>
            </Flex>
          </Flex>
        </Wrapper>
      ) : (
        <Error404Page wrongPath={false} />
      )}
    </>
  );
};
