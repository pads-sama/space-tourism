import styled from "styled-components";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <>
      <HomeContainer className="w-full h-[100dvh]">
        <Hero />
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
  background-image: url("../src/assets/home/background-home-mobile.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    background-image: url("../src/assets/home/background-home-tablet.jpg");
    background-position: center;
  }
  @media (min-width: 1024px) {
    background-image: url("../src/assets/home/background-home-desktop.jpg");
    background-position: center;
  }
`;
