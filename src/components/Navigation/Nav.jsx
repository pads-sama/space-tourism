import { useState } from "react";
import { Close, Hamburger, Logo } from "../../assets";
import SideBar from "./SideBar";
import ResponsiveNav from "./ResponsiveNav";

const Nav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const openNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="h-[100px] w-full flex-items-between p-5 absolute bg-black/5 xl:p-16 z-50 ">
        <div>
          <img
            src={Logo}
            alt="web logo"
            className="w-10 | lg:mt-12 | xl:mt-6"
          />
        </div>
        <span
          className="transition | h-[1px] bg-light-0 hidden absolute opacity-[0.2515] z-50  | xl:block xl:left-[16rem]
xl:bottom-[40%] xl:w-[473px]"
        ></span>
        <ResponsiveNav />
        <button onClick={openNav} className="z-50 | md:hidden">
          <img src={isMobileNavOpen ? Close : Hamburger} alt="nav icons" />
        </button>
      </nav>
      <SideBar
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />
    </>
  );
};

export default Nav;
