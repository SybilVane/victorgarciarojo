import styled from "styled-components";
import Fade from "react-reveal";

const Text = styled.div`
  width: 70%;
  text-align: center;
  h2 {
    margin: 1rem 0;
  }
`;

function About() {
  return (
    <div className='flex-column'>
      <Text>
        <Fade duration={2000}>
          <h2>Multidisciplinary Artist</h2>
          <p>
            I love developing games using 2D, 3D, pixel art, animation, and
            traditional art, and I have a passion for art direction and creative
            production. During my experience of more than 16 years in the
            industry, I have worked for companies such as Pyro Studios,
            Wayforward Technologies, Play Wireless, Lemonquest, and a wide range
            of indie developers.
            <br />
            Aside from my portfolio, feel free to check out my links at the end
            of the page, and if you want to reach out you'll be very welcome!
          </p>
        </Fade>
      </Text>
    </div>
  );
}

export default About;
