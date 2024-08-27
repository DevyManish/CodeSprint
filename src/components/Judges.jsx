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
  width: 280px;
  background-color: #1c1c1c;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
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
`;

const JudgeActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const JudgeButton = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const judges = [
    {
        name: "Dr. Jane Smith",
        title: "AI Research Scientist",
        image: "/img/.jpg",
        description: "Leading expert in AI with over 15 years of experience in machine learning and neural networks."
    },
    {
        name: "John Doe",
        title: "Blockchain Entrepreneur",
        image: "/img/judge2.jpg",
        description: "Founder of a successful blockchain startup, instrumental in developing decentralized finance solutions."
    },
    {
        name: "Dr. Emily Chen",
        title: "MedTech Innovator",
        image: "/img/judge3.jpg",
        description: "Pioneered breakthrough medical devices and holds multiple patents in biomedical engineering."
    },
    {
        name: "Michael Johnson",
        title: "AgriTech Specialist",
        image: "/img/judge4.jpg",
        description: "Dedicated to developing sustainable agricultural technologies, focusing on precision farming and IoT."
    },
    {
        name: "Sarah Brown",
        title: "Robotics Engineer",
        image: "/img/judge5.jpg",
        description: "Renowned robotics engineer working on cutting-edge projects in industrial automation and consumer robotics."
    },
    {
        name: "Dr. Robert Lee",
        title: "Clean Energy Expert",
        image: "/img/judge6.jpg",
        description: "Leading researcher in renewable energy technologies, advisor to governments on sustainable energy policies."
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
                                <JudgeButton>View Profile</JudgeButton>
                            </JudgeActions>
                        </JudgeInfo>
                    </JudgeCard>
                ))}
            </JudgesContainer>
        </JudgesSection>
    );
};

export default Judges;