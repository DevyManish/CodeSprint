import React from 'react';
import styled from 'styled-components';

const ThemesSection = styled.div`
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  @media only screen and (max-width: 768px) {
    height: auto;
    padding: 50px 0;
  }
`;

const ThemesHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 40px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const ThemesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1400px;
  width: 100%;
  padding: 0 20px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ThemeCard = styled.div`
  position: relative;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:nth-child(n+5) {
    grid-column: span 1;
  }

  @media only screen and (max-width: 1200px) {
    &:nth-child(n+5) {
      grid-column: auto;
    }
  }
`;

const ThemeBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  filter: brightness(0.7);
  transition: filter 0.3s ease;

  ${ThemeCard}:hover & {
    filter: brightness(0.5);
  }
`;

const ThemeContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
  text-align: center;
`;

const ThemeTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;

  ${ThemeCard}:hover & {
    transform: scale(1.1);
  }
`;

const themes = [
  {
    bgImage: "/img/Agriculture.webp",
    title: "Agriculture & Rural Development",
    description: "Innovating for sustainable farming and rural growth"
  },
  {
    bgImage: "/img/Blockchain.jpg",
    title: "Blockchain & Cybersecurity",
    description: "Securing digital assets and protecting data"
  },
  {
    bgImage: "/img/Clean.jpg",
    title: "Clean & Green Technology",
    description: "Developing eco-friendly solutions for a sustainable future"
  },
  {
    bgImage: "/img/Med.jpg",
    title: "MedTech",
    description: "Advancing healthcare through technology"
  },
  {
    bgImage: "/img/Robot.jpg",
    title: "Robotics & Drones",
    description: "Automating tasks and exploring new frontiers"
  },
  {
    bgImage: "/img/Smart.jpg",
    title: "Smart Automation",
    description: "Streamlining processes for efficiency"
  },
  {
    bgImage: "/img/Education.jpg",
    title: "Smart Education",
    description: "Revolutionizing learning through technology"
  },
  {
    bgImage: "/img/Miscellaneous.avif",
    title: "Miscellaneous",
    description: "Rest SIH themes are included in this segment."
  }
];

const Themes = () => {
  return (
    <ThemesSection>
      <ThemesHeading>Themes</ThemesHeading>
      <ThemesContainer>
        {themes.map((theme, index) => (
          <ThemeCard key={index}>
            <ThemeBackground bgImage={theme.bgImage} />
            <ThemeContent>
              <ThemeTitle>{theme.title}</ThemeTitle>
            </ThemeContent>
          </ThemeCard>
        ))}
      </ThemesContainer>
    </ThemesSection>
  );
};

export default Themes;