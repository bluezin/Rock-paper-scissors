import React, { useContext } from "react";
import styled from "styled-components";
import { Store } from "./context/Score";

const HeaderStyled = styled.div`
  border: 4px solid var(--HeaderOutline);
  border-radius: 6px;
  margin: 20px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 18px;
    margin: 12px;
  }
  div {
    background-color: white;
    border-radius: 4px;
    text-align: center;
    width: 80px;
    height: 70px;
    padding: 2px;
  }
  small {
    color: var(--ScoreText);
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  p {
    color: var(--DarkText);
    font-size: 40px;
    font-weight: 700;
    margin: auto;
  }
  @media screen and (min-width: 1000px) {
    h1 {
      font-size: 25px;
    }

    small {
      font-size: 18px;
    }
    div {
      height: 90px;
      width: 90px;
    }
    p {
      margin-top: 7px;
    }
  }
`;

function Header() {
  const { store } = useContext(Store);
  return (
    <HeaderStyled>
      <h1>
        ROCK <br />
        PAPER <br />
        SCISSORS
      </h1>
      <div>
        <small>score</small>
        <p>{store}</p>
      </div>
    </HeaderStyled>
  );
}

export default Header;
