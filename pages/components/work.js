import styled from "styled-components";
import { Fade } from "react-reveal";

const WorkContainer = styled.div`
  padding: 0 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  row-gap: 4rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  } ;
`;

const WorkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WorkImg = styled.img`
  width: 40vw;
  @media (max-width: 768px) {
    width: 70vw;
  } ;
`;
const WorkTitle = styled.div`
  font-weight: 400;
`;
const WorkCaption = styled.div`
  font-size: 0.8rem;
`;

function Work() {
  return (
    <WorkContainer>
      <WorkBox>
        <Fade left>
          <WorkImg src='./images/resident_evil.jpg' />
          <WorkTitle>Title</WorkTitle>
          <WorkCaption>
            This is a funny description for any kind of stuff
          </WorkCaption>
        </Fade>
      </WorkBox>
      <WorkBox>
        <Fade right>
          <WorkImg src='./images/demon_girl.jpg' />
          <WorkTitle>Title</WorkTitle>
          <WorkCaption>
            This is a funny description for any kind of stuff
          </WorkCaption>
        </Fade>
      </WorkBox>
      <WorkBox>
        <Fade left>
          <WorkImg src='./images/deathgreen.jpg' />
          <WorkTitle>Title</WorkTitle>
          <WorkCaption>
            This is a funny description for any kind of stuff
          </WorkCaption>
        </Fade>
      </WorkBox>
      <WorkBox>
        <Fade right>
          <WorkImg src='./images/downward_spiral.jpg' />
          <WorkTitle>Title</WorkTitle>
          <WorkCaption>
            This is a funny description for any kind of stuff
          </WorkCaption>
        </Fade>
      </WorkBox>
      <WorkBox>
        <Fade left>
          <WorkImg src='./images/ogre_knight.jpg' />
          <WorkTitle>Title</WorkTitle>
          <WorkCaption>
            This is a funny description for any kind of stuff
          </WorkCaption>
        </Fade>
      </WorkBox>
      <WorkBox>
        <Fade right>
          <WorkImg src='./images/ink_machine.jpg' />
          <WorkTitle>Title</WorkTitle>
          <WorkCaption>
            This is a funny description for any kind of stuff
          </WorkCaption>
        </Fade>
      </WorkBox>
      <WorkBox>
        <Fade left>
          <WorkImg src='./images/ended_world.jpg' />
          <WorkTitle>Title</WorkTitle>
          <WorkCaption>
            This is a funny description for any kind of stuff
          </WorkCaption>
        </Fade>
      </WorkBox>
      <WorkBox>
        <Fade right>
          <WorkImg src='./images/ogre_knight.jpg' />
          <WorkTitle>Title</WorkTitle>
          <WorkCaption>
            This is a funny description for any kind of stuff
          </WorkCaption>
        </Fade>
      </WorkBox>
    </WorkContainer>
  );
}

export default Work;
