import { NavLink } from "react-router-dom";
import { navMenu } from "../../util/NavigationMenu";

const SideBar = ({ isMobileNavOpen, setIsMobileNavOpen }) => {
  const handleOutsideNavClick = (e) => {
    if (
      !isMobileNavOpen.current ||
      !navMenu.containerRef.current?.contains(e.target)
    ) {
      setIsMobileNavOpen(false);
    }
  };
  return (
    <>
      <div
        onClick={handleOutsideNavClick}
        className="h-screen w-full absolute z-40 | md:hidden | lg:hidden | xl:hidden"
      >
        <aside
          className={`${
            isMobileNavOpen ? "right-0" : "-right-96"
          } sidebar transition w-[254px] blur-bg absolute h-screen top-0 flex-Y-center p-5 z-20 | md:hidden `}
        >
          <div className="mt-[100px]  flex-items-center gap-y-3 flex-col">
            {navMenu.map((menu, index) => (
              <NavLink
                onClick={() => {
                  setIsMobileNavOpen(false);
                }}
                to={menu.to}
                key={index}
                className="w-full transition h-[32px] overflow-hidden inline-flex gap-x-3 border-b-[3px] border-transparent | hover:border-white"
              >
                <span className="font-bold w-5">{menu.number}</span>
                <span className="">{menu.name}</span>
              </NavLink>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
};

export default SideBar;
