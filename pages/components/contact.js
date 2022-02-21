import styled from "styled-components";
import Signature from "./signature";

const Container = styled.div`
  position: relative;
  width: 100vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const Intro = styled.h1`
  font-weight: 500;
  font-size: 2rem;
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

const ExtLink = styled.a`
  &:link,
  &:visited {
    font-size: 1.5rem;
    font-weight: 300;
    color: #ffffff;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
    @media (max-width: 350px) {
      font-size: 0.8rem;
    }
  }

  &:hover {
    text-shadow: 2px 2px 2px #e599dc;
  }
`;

function Contact() {
  return (
    <Container>
      <Intro>Links</Intro>
      <ExtLink
        href='https://linkedin.com/in/victor-garcia-rojo'
        target='_blank'
        rel='noreferrer'
      >
        Follow me on LinkedIn
      </ExtLink>
      <ExtLink
        href='https://instagram.com/victorgarciarojo_art'
        target='_blank'
        rel='noreferrer'
      >
        Follow me on Instagram
      </ExtLink>
      <ExtLink
        href='https://deviantart.com/victorgarciarojo'
        target='_blank'
        rel='noreferrer'
      >
        DeviantArt Profile (2D, 3D, Pixel Art)
      </ExtLink>
      <ExtLink
        href='https://pixeljoint.com/p/19163.htm'
        target='_blank'
        rel='noreferrer'
      >
        Pixel Joint Profile (Pixel Art)
      </ExtLink>
      <Intro style={{ marginTop: "1rem" }}>Contact Me</Intro>
      <ExtLink href='mailto:vgrojo@gmail.com'>vgrojo@gmail.com</ExtLink>

      <Signature />
    </Container>
  );
}

export default Contact;
