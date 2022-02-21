import styled from "styled-components";
import { Fade } from "react-reveal";
import { worklist } from "../../public/worklist";

const WorkContainer = styled.div`
  padding: 0 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  row-gap: 3rem;
  justify-items: center;
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
  width: 100%;
`;

const WorkTitle = styled.div`
  margin-top: 0.8rem;
  font-weight: 400;
`;

function Work() {
  return (
    <WorkContainer>
      {worklist.map((work) => (
        <WorkBox key={work.title}>
          <Fade duration={2000}>
            <WorkImg src={work.src} />
            <WorkTitle>{work.title}</WorkTitle>
          </Fade>
        </WorkBox>
      ))}
    </WorkContainer>
  );
}

export default Work;
