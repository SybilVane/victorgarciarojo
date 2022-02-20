import React, { useState, useRef } from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
import { publishedTitles, unreleasedTitles } from "./gamelist";

const ClickableTitle = styled.div`
  cursor: pointer;
  font-weight: 500;
  &:hover {
    text-shadow: 2px 2px 2px #e599dc;
  }
`;

const GameBox = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
`;

const Information = styled.div`
  display: ${(props) => (props.visible ? "initial" : "none")};
  a {
    margin-left: 0.5rem;
  }
  max-width: 70vw;
`;

const publishedGamesKeys = publishedTitles.map((title, key) => key);
const publishedGamesInitialState = {};

publishedGamesKeys.map((key) => (publishedGamesInitialState[key] = false));
console.log(publishedGamesInitialState);

function Published() {
  const [isInfoVisible, setIsInfoVisible] = useState(
    publishedGamesInitialState
  );

  const clickHandler = (i) => {
    setIsInfoVisible({
      ...isInfoVisible,
      [i]: !isInfoVisible[i],
    });
  };

  return (
    <div className='flex-column'>
      <Fade duration={2000}>
        <h2>Published Titles</h2>
        <p style={{ textAlign: "center" }}>
          Click on a title to get more information about the game
        </p>
        {publishedTitles.map((game, i) => (
          <GameBox key={game.title}>
            <ClickableTitle onClick={() => clickHandler(i)}>
              {game.title}
            </ClickableTitle>
            <Information visible={isInfoVisible[i]}>
              {game.description}
              <br />
              {game.links.map((link) => (
                <a href={link.url} target='_blank'>
                  {link.label}
                </a>
              ))}
            </Information>
          </GameBox>
        ))}
      </Fade>
    </div>
  );
}

export default Published;
