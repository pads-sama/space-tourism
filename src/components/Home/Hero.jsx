import styled from "styled-components";
import Button from "../Button";

const Hero = () => {
  return (
    <>
      <HeroContainer className="font-barlow p-5 flex-X-center text-center relative text-[15px] | md:text-[16px] md:p-20 | lg:grid lg:grid-cols-2 lg:text-left">
        <div className="h-[100vh] flex flex-col mt-[9.5rem] | md:mt-28 | lg:h-[60vh] lg:px-20 lg:justify-end">
          <div className="transition | uppercase text-[16px] font-barlowCondense tracking-[2.7px] | md:tracking-[3.375px] | lg:text-[28px] lg:tracking-[4.725px] ">
            So, you want to travel to
          </div>
          <div className="transition | font-bellefair text-[5rem] uppercase leading-[100px] text-light-0 | md:text-heading1 md:leading-[150px] | lg:leading-normal">
            space
          </div>
          <p className=" leading-6 w-[327px] | md:w-[444px] md:leading-7 |lg:leading-8 lg:text-[18px] ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Button />
      </HeroContainer>
    </>
  );
};

export default Hero;

const HeroContainer = styled.div`
  height: calc(100dvh - 100px);
  color: var(--light-purple-clr);
`;
