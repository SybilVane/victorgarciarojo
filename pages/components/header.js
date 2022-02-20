import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Arrows from "./arrows";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IntroContainer = styled.div`
  padding: 3rem;
  border-color: white;
  border-width: 2px;
  border-style: solid;
  @media (max-width: 768px) {
    padding: 1rem;
  } ;
`;

const Intro = styled.h1`
  font-weight: 500;
  font-size: 3rem;
  color: white;

  @media (max-width: 768px) {
    font-weight: 300;
    font-size: 1.5rem;
  }
  @media (max-width: 350px) {
    font-weight: 200;
    font-size: 1rem;
  } ;
`;
function Header() {
  return (
    <Container>
      <IntroContainer>
        <Intro>
          Hello World, <br />
          I'm Victor García Rojo
          <br />
          <Typewriter
            options={{
              strings: [
                "Art Director",
                "Pixel Artist",
                "2D Animator",
                "Creative Director",
                "3D Generalist",
                "Illustrator",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Intro>
      </IntroContainer>
      <Arrows />
    </Container>
  );
}

export default Header;
