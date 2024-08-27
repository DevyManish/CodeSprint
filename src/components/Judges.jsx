import React from 'react';
import styled from 'styled-components';

const JudgesSection = styled.div`
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

const JudgesHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 40px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const JudgesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const JudgeCard = styled.div`
  max-width: 280px;
  width: 100%;
  background-color: #1c1c1c;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0 auto; 

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
  }

  @media only screen and (max-width: 768px) {
    width: 90%; 
    align-self: center; 
  }
`;

const JudgeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const JudgeInfo = styled.div`
  padding: 16px;
`;

const JudgeName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #ffffff;
`;

const JudgeTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #da4ea2;
`;

const JudgeDescription = styled.p`
  font-size: 0.9rem;
  color: #cccccc;
  line-height: 1.4;
  margin-bottom: 16px;
  text-align: justify;
  text-justify: inter-word;
`;

const JudgeActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const JudgeButton = styled.a`
  background-color: #da4ea2;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c2438f;
  }
`;

const judges = [
  {
    name: "Mrs. Debmitra Ghosh",
    title: "Assistant Professor",
    image: "/img/j2.jpg",
    description: "Mrs. Debmitra Ghosh is an Assistant Professor in the Department of CSE at JIS University.. Specializing in AI/ML, she focuses on research and teaching in advanced algorithms and data-driven technologies.",
    link: "https://www.linkedin.com/in/debmitra-ghosh-12694918/"
  },
  {
    name: "Dr. Bidisha Bhabani",
    title: "Assistant Professor",
    image: "/img/j1.jpg",
    description: "Dr. Bidisha Bhabani is an Assistant Professor in the Department of CSE at JIS University, with a specialization in AI and ML. Her research and teaching center around advanced algorithms and data-driven techniques.",
    link: "https://www.linkedin.com/in/dr-bidisha-bhabani-ph-d-9765a221/"
  },
  {
    name: "Prof. (Dr.) Sandip Roy",
    title: "HOD, CSE",
    image: "/img/j3.jpeg",
    description: "Dr. Sandip Roy, Head of CSE Dept. at JIS University, Kolkata, is recognized for teaching excellence, with research interests in Data Science, IoT, Cloud Computing, Green Computing, and Smart Technologies.",
    link: "https://www.linkedin.com/in/prof-sandip-roy-05808425/"
  }
];

const Judges = () => {
  return (
    <JudgesSection>
      <JudgesHeading>Our Esteemed Judges</JudgesHeading>
      <JudgesContainer>
        {judges.map((judge, index) => (
          <JudgeCard key={index}>
            <JudgeImage src={judge.image} alt={judge.name} />
            <JudgeInfo>
              <JudgeName>{judge.name}</JudgeName>
              <JudgeTitle>{judge.title}</JudgeTitle>
              <JudgeDescription>{judge.description}</JudgeDescription>
              <JudgeActions>
                <JudgeButton href={judge.link} target="_blank" rel="">
                  View Profile
                </JudgeButton>
              </JudgeActions>
            </JudgeInfo>
          </JudgeCard>
        ))}
      </JudgesContainer>
    </JudgesSection>
  );
};

export default Judges;
