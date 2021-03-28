import React, { useState, useContext } from "react";
import Play from "./Play";
import styled from "styled-components";
import { Store } from "./context/Score";

const ConatinerStyled = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  grid-gap: 0px 100px;
  position: relative;
  margin: 40px;
  & div:nth-of-type(3) {
    grid-column: span 2;
    margin-top: -10px;
  }
  .In-play {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 15px;
  }
  .result {
    font-size: 48px;
    letter-spacing: 2px;
    text-align: center;
    margin-top: 50px;
    text-transform: uppercase;
  }
  .play-button {
    background-color: white;
    border: none;
    border-radius: 10px;
    padding: 12px;
    width: 200px;
    letter-spacing: 2px;
    font-weight: 700;
    color: #2a46c0;
    cursor: pointer;
    outline: none;
  }
  .triangle {
    display: ${({ played }) => (played ? "none" : "block")};
    position: absolute;
    height: 13px;
    width: 220px;
    background-color: rgb(0, 0, 0, 0.3);
    top: 58px;
    z-index: -1;
    &:before {
      content: "";
      position: absolute;
      width: 220px;
      height: 14px;
      background-color: rgb(0, 0, 0, 0.3);
      top: 0;
      left: 0;
      right: 0;
      transform: rotate(60deg);
      transform-origin: left top;
    }
    &:after {
      content: "";
      position: absolute;
      width: 220px;
      height: 14px;
      background-color: rgb(0, 0, 0, 0.3);
      top: 0;
      left: 0;
      right: 0;
      transform: rotate(-60deg);
      transform-origin: right top;
    }
  }
  @media screen and (min-width: 1000px) {
    grid-gap: 0px 250px;
    ${({ result }) => result && "grid-template-columns: 100px 100px 100px;"}
    & div:nth-of-type(3) {
      ${({ result }) => result && "grid-column: 2 / 3; grid-row: 1;"}
    }

    .triangle {
      &::before {
        width: 250px;
        transform: rotate(67deg);
      }
      &:after {
        width: 250px;
        transform: rotate(-67deg);
      }
    }

    .In-play {
      display: flex;
      flex-direction: column-reverse;
      p {
        font-size: 20px;
      }
    }

    .div-result {
      text-align: center;
      position: relative;
      top: 50px;
      width: 600px;
    }
    .result {
      font-size: 50px;
    }
    .play-button {
      font-size: 16px;
    }
  }
`;

function Container() {
  const [played, setPlayed] = useState(false);
  const [nameToken, setNameToken] = useState("");
  const [choose, setChoose] = useState("default");
  const [result, setResult] = useState("");
  const { setStore } = useContext(Store);
  //array
  let elements = ["paper", "rock", "scissors"];
  //random
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function housePick() {
    return new Promise((resolve, reject) => {
      let pick;
      const interval = setInterval(() => {
        pick = elements[getRandomInt(0, 3)];
        setChoose(pick);
      }, 75);
      setTimeout(() => {
        clearInterval(interval);
        resolve(pick);
      }, 2000);
    });
  }
  //
  async function handleClick(name) {
    setNameToken(name);
    setPlayed(true);
    const picked = await housePick();
    const Resultend = Result(name, picked);
    setResult(Resultend);
    setStore(Resultend);
  }

  function Result(name, elegido) {
    if (name === elegido) {
      return "draw";
    }
    if (name === "paper") {
      if (elegido === "rock") {
        return "win";
      }
      if (elegido === "scissors") {
        return "lose";
      }
    }

    if (name === "rock") {
      if (elegido === "paper") {
        return "lose";
      }
      if (elegido === "scissors") {
        return "win";
      }
    }

    if (name === "scissors") {
      if (elegido === "rock") {
        return "lose";
      }
      if (elegido === "paper") {
        return "win";
      }
    }
  }

  return (
    <>
      <ConatinerStyled played={played} result={result}>
        <span className="triangle"></span>
        {!played ? (
          <>
            <Play name="paper" onClick={handleClick} />
            <Play name="rock" onClick={handleClick} />
            <Play name="scissors" onClick={handleClick} />
          </>
        ) : (
          <>
            <div className="In-play">
              <Play
                name={nameToken}
                isAnimation={result === "win"}
                token="token"
              />
              <p>You picked</p>
            </div>
            <div className="In-play">
              <Play
                name={choose}
                isAnimation={result === "lose"}
                token="token"
              />
              <p>The house picked</p>
            </div>
            {result !== "" && (
              <div className="div-result">
                <h1 className="result">You {result}</h1>
                <button
                  onClick={() => {
                    setPlayed(false);
                    setResult("");
                  }}
                  className="play-button"
                >
                  PLAY AGAIN
                </button>
              </div>
            )}
          </>
        )}
      </ConatinerStyled>
    </>
  );
}

export default Container;
