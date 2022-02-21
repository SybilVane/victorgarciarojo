import React from "react";
import styled from "styled-components";

const Text = styled.div`
  position: absolute;
  top: calc(100% - 18px);
  left: calc(100% - 295px);
  display: flex;
  align-items: center;
  font-family: "Press Start 2P";
  font-size: 0.5rem;
  color: #ffffff;
  z-index: 1;
  @media (max-width: 1024px) {
    font-size: 0.4rem;
    top: calc(100% - 15px);
    left: calc(50% - 120px);
  }
  @media (max-width: 500px) {
    font-size: 0.4rem;
  }
`;

const Icon = styled.img`
  height: 1rem;
  width: auto;
  margin: 0 7px;
  @media (max-width: 1024px) {
    height: 0.6rem;
  }
  @media (max-width: 500px) {
    height: 0.4rem;
  }
`;

const Heart = styled(Icon)`
  height: 0.9rem;
  animation: pulse 0.5s infinite;
  @media (max-width: 1024px) {
    height: 0.6rem;
  }
  @media (max-width: 500px) {
    height: 0.4rem;
  }
`;

function Signature() {
  return (
    <a href='https://github.com/SybilVane' target='_blank' rel='noreferrer'>
      <Text>
        Developed with <Heart src='./images/heart.png' />
        and <Icon src='./images/coffee.png' /> by SybilVane
      </Text>
    </a>
  );
}

export default Signature;
