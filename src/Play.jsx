import React from "react";

import styled, { keyframes } from "styled-components";

const rotate = keyframes`
 to {
   transform: rotateY(360deg)
 }
`;
const shadows = keyframes`
to{
    box-shadow: 0 0 0 40px rgba(255,255,255,.04), 0 0 0 80px rgba(255,255,255,.04), 0 0 0 120px rgba(255,255,255,.02);
}
`;

const PlayStyled = styled.div`
  border: 13px solid ${({ color }) => color.color};
  background-color: ${({ name }) => (name === "default" ? "#122343" : "white")};
  width: 130px;
  height: 125px;
  border-radius: 50%;
  display: flex;
  margin: 30px;
  box-sizing: border-box;
  box-shadow: 0 5px 1px ${({ color }) => color.border};
  animation: ${({ isAnimation }) => (isAnimation ? shadows : "")} forwards;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
  div {
    box-shadow: 0 -4px 5px ${({ name }) => (name === "default" ? "transparent" : "#babfd4")};
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .img-play {
    animation: 2s linear ${({ isAnimation }) => (isAnimation ? rotate : "")};
    width: 40%;
  }

  @media screen and (min-width: 1000px) {
    border: ${({ token }) => (token ? "30px" : "16px")} solid
      ${({ color }) => color.color};
    width: ${({ token }) => (token ? "300px" : "200px")};
    height: ${({ token }) => (token ? "300px" : "200px")};
    margin: 0;
    .img-play {
      width: 70px;
    }
  }
`;

function Play({ name, onClick, lose, isAnimation, token }) {
  //
  const colors = {
    paper: {
      color: "#4865f4",
      border: "#2543c3",
    },
    rock: {
      color: "#ec9e0e",
      border: "#c76c14",
    },
    scissors: {
      color: "#dc2e4e",
      border: "#980e31",
    },
    default: {
      color: "#122343",
      border: "#122343",
    },
  };

  const color = colors[name];

  function handleClick(name) {
    if (onClick) {
      onClick(name);
    }
  }
  console.log(isAnimation);

  return (
    <PlayStyled
      name={name}
      lose={lose}
      color={color}
      token={token}
      isAnimation={isAnimation}
      onClick={() => handleClick(name)}
    >
      <div>
        <img src={`/images/icon-${name}.svg`} alt="" className="img-play" />
      </div>
    </PlayStyled>
  );
}

export default Play;
