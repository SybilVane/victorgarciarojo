import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: calc(100% - 85px);
  width: 24px;
  height: 24px;
`;

const Chevron = styled.div`
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;

  :first-child {
    animation: move 3s ease-out 1s infinite;
  }

  :nth-child(2) {
    animation: move 3s ease-out 2s infinite;
  }

  :before,
  :after {
    content: " ";
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #fff;
  }

  :before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  :after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }

  @keyframes move {
    25% {
      opacity: 1;
    }
    33% {
      opacity: 1;
      transform: translateY(30px);
    }
    67% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
  }

  @keyframes pulse {
    to {
      opacity: 1;
    }
  }
`;

function Arrows() {
  return (
    <Container>
      <Chevron />
      <Chevron />
      <Chevron />
    </Container>
  );
}

export default Arrows;
