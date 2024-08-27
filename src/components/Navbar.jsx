import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 90px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 110px;
  padding: 10px;
  background-color: #ffffff;
  font-size: 1rem;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Navbar = () => {
  const handleButtonClick = () => {
    window.open("https://intelligent-war-081.notion.site/CodeSprint-1-0-Guide-741af42c5f5a4a0b9888a60eeeaf70a6#8cf7774d3b55420dbf4914358c364f9e");
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/favicon.png" />
          <List>
            <ListItem onClick={() => scrollToSection('home')}>Home</ListItem>
            <ListItem onClick={() => scrollToSection('themes')}>Themes</ListItem>
            <ListItem onClick={() => scrollToSection('judges')}>Judges</ListItem>
            <ListItem onClick={() => scrollToSection('contact')}>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button onClick={handleButtonClick}>Learn More</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
