import { useEffect, useState } from "react";
import Flex from "../UI/Flex/Flex";
import Title from "../UI/titles/title";
import Image from "../UI/image/Image";
import Paragraph from "../UI/paragraph/paragraph";
import Label from "../UI/Input/label";
import Wrapper from "../UI/Wrapper/wrapper";
import List from "../UI/List/list";
import ListItem from "../UI/List/listItem";
import { Review } from "../components/Reviews/review";
import { GoBackButton } from "../components/GoBackButton/goBackButton";
import Input from "../UI/Input/input";
import Button from "../UI/Button/button";
import "../index.css";
import { Error404Page } from "./Error404Page";
export const RecipeDetails = () => {
  const [recipeData, setRecipeData] = useState({});
  const [notFound, setNotFound] = useState(false);
  const currentDate = new Date();
  const utcDate = currentDate.toISOString().split("T")[0] + "T00:00:00.000Z";
  const [newComment, setNewComment] = useState({
    comment: "",
    rating: 0,
    date: utcDate,
  });
  const [hover, setHover] = useState(null);
  // eslint-disable-next-line no-unused-vars
  let totalStars = 5;
  console.log(recipeData);
  const path = window.location.pathname.split("/");
  useEffect(() => {
    // fetch data from id in the path
    fetch(`http://localhost:8080/recipes/${path[2]}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipeData((prev) => ({ ...prev, data: data }));
        setNotFound(false);
      })
      .catch((error) => {
        console.error(error);
        setNotFound(true);
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
      {!notFound ? (
        <Wrapper padding="10px" background="rgba(0, 0, 0, 0.5)">
          <GoBackButton color="white" />
          <Flex direction="column" gap="10px" align="center">
            <Title color="white" width="100%" aligntext="center">
              {recipeData.data?.name}
            </Title>
            <Image
              radius="20px"
              width="800px"
              height="800px"
              src={`/server${recipeData.data?.image}`}
            />
          </Flex>

          <Flex
            margin="100px 0 0 0"
            direction="row"
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
                <List direction="column" liststyle="circle">
                  {recipeData.data?.ingredients?.map((ingredient) => (
                    <ListItem color="white" fontSize="30px" key={ingredient}>
                      {ingredient}
                    </ListItem>
                  ))}
                </List>
              </Flex>
            </Flex>
            <Flex direction="column">
              {recipeData.comments?.length > 0 ? (
                <Flex direction="column" gap="10px">
                  <Title color="white" fontSize="40px">
                    Comments:
                  </Title>
                  <List
                    width="800px"
                    direction="row"
                    liststyle="none"
                    wrap="wrap"
                  >
                    {recipeData.comments?.map((comment) => (
                      <ListItem fontSize="30px" key={comment.id}>
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
              <Flex width="100%" direction="column">
                <Title color="white" fontSize="40px">
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
                  <Flex gap="10px" align="center">
                    <Input
                      type="text"
                      width="600px"
                      fontSize="30px"
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
                      height="65px"
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
