import React, { useState } from "react";
import styled from "styled-components";

const RulesStyled = styled.div`
  .rules-button {
    text-align: center;
  }

  button {
    border: 2px solid hsl(217, 16%, 45%);
    text-transform: uppercase;
    background-color: transparent;
    font-weight: 600;
    letter-spacing: 2px;
    outline: none;
    color: white;
    width: 130px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
  }
  button:hover {
    color: black;
    background-color: white;
  }
  .q {
    background-color: red;
  }
  @media screen and (min-width: 1000px) {
    .rules-button {
      position: fixed;
      right: 100px;
      bottom: 20px;
    }

    .div-DivImg {
      background-color: rgb(0, 0, 0, 0.4);
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: -20px;
      display: flex;
      justify-content: center;
    }
    button {
      font-size: 15px;
    }
  }
`;

const DivImg = styled.div`
  position: absolute;
  left: 0;
  right: -20px;
  top: 0;
  bottom: -130px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  flex-direction: column;

  & img:nth-of-type(2) {
    cursor: pointer;
  }
  h1 {
    color: black;
    font-size: 20px;
    letter-spacing: 2px;
  }
  @media screen and (min-width: 1000px) {
    width: 400px;
    height: 500px;
    margin: auto;
  }
`;

function Rules() {
  const [booleano, setBooleano] = useState(false);
  const handleClick = () => {
    setBooleano(!booleano);
  };
  //
  return (
    <RulesStyled>
      <div className="rules-button">
        <button onClick={handleClick}>rules</button>
      </div>
      {booleano && (
        <div className="div-DivImg">
          <DivImg>
            <h1>RULES</h1>
            <img src="/images/image-rules.svg" alt="rules" />
            <img
              src="/images/icon-close.svg"
              alt="close"
              onClick={() => setBooleano(false)}
            />
          </DivImg>
        </div>
      )}
    </RulesStyled>
  );
}

export default Rules;
