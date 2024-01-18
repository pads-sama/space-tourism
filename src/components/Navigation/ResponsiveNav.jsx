import { navMenu } from "../../util/NavigationMenu";
import { NavLink } from "react-router-dom";

const ResponsiveNav = () => {
  return (
    <>
      <div className="blur-bg transition | hidden font-barlowCondense tracking-[2.362px] text-[14px] | md:block md:h-full md:w-[450px] md:absolute md:right-0 md:top-0 | lg:w-[700px] lg:h-[96px] lg:top-7 | xl:w-[830px]">
        <ul className="flex h-full w-full items-center justify-around | lg:justify-start lg:px-24 lg:gap-x-10 lg:text-[16px]">
          {navMenu.map((menu, index) => (
            <li key={index} className="h-full flex items-center">
              <NavLink
                to={menu.to}
                className="transition | uppercase h-full flex items-center border-b-[3px] border-transparent | hover:border-white | lg:tracking-[2.7px] "
              >
                <span className="md:hidden | lg:block lg:w-8">
                  {menu.number}
                </span>
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ResponsiveNav;
