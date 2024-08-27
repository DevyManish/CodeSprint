import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Themes from "./components/Themes"
import Judges from "./components/Judges"
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <div id="home">
        <Hero />
      </div>
      <Who />
      <div id="themes">
        <Themes />
      </div>
      <div id="judges">
        <Judges />
      </div>
      <Works />
      <div id="contact">
        <Contact />
      </div>
    </Container>
  );
}

export default App;
