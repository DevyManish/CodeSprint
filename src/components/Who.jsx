import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import SplineDesign from "./SplineDesign";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  line-height: 30px;
  color: lightgray;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  background: linear-gradient(135deg, #F06292, #D81B60);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c2438f;
  }
`;

const Link = styled.a`
  text-decoration: none; 
`;

const Text = styled.div`
  margin-top: 10rem; 
  width: 90%;
  height: 66.6667vh;
  border-radius: 12px;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas> */}
          <Text>
            <SplineDesign/>
          </Text>
        </Left>
        <Right>
          <Title>Get ready to innovate!</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Unleash Your Inner Ninja and Hack Your Way to SIH 2024!</Subtitle>
          </WhatWeDo>
          <Desc>
            Form your team, tackle real-world challenges, and earn the chance to represent our university on the national stage. Innovate, collaborate, and take the first step towards making a difference!
          </Desc>
          <Link href="https://www.instagram.com/codesprintjisu/">
            <Button>Follow Us</Button>
          </Link>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
