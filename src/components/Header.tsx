import { Link } from "react-router-dom";
import Logo from "../svg/Logo";
import MenuIcon from "../svg/MenuIcon";
import { useState } from "react";

function Header(props: {
  setShowMenu: (bool: boolean) => void;
  showMenu: boolean;
}) {
  const [location, setLocation] = useState("/");
  return (
    <>
      <header className="flex items-center justify-between px-6 absolute top-6 w-[100%] md:pl-[39px] md:pr-0 md:top-0 lg:pl-[55px]">
        <Logo />
        <div className="hidden w-[32%] h-[1px] bg-white/[0.25] mr-[-150px] lg:block"></div>
        <div className="hidden h-[96px] bg-white/[0.04] px-[48px] md:flex lg:pl-[123px] lg:pr-[167px]">
          <ul className="flex gap-[37px] font-barlow font-normal text-[14px] leading-[17px] tracking-[2.362px] text-white uppercase lg:gap-[50px] lg:text-[16px] lg:leading-[19px]">
            <li className="flex flex-col justify-center">
              <Link
                to={"/"}
                className="flex mt-auto"
                onClick={() => setLocation("/")}
              >
                <span className="hidden mr-[11px] lg:block">00</span> HOME
              </Link>
              <div
                style={location === "/" ? { borderColor: "#fff" } : undefined}
                className="w-[100%] h-[3px] border-b-[3px] border-transparent mt-auto"
                
              ></div>
            </li>
            <li className="flex flex-col justify-center  ">
              <Link
                to={"/destination"}
                className="flex mt-auto"
                onClick={() => setLocation("destination")}
              >
                <span className="hidden mr-[11px] lg:block">01</span>{" "}
                destination
              </Link>
              <div
                style={
                  location === "destination"
                    ? { borderColor: "#fff" }
                    : undefined
                }
                className="w-[100%] h-[3px] border-b-[3px] border-transparent mt-auto"
              ></div>
            </li>
            <li className="flex flex-col justify-center  ">
              <Link
                to={"/crew"}
                className="flex mt-auto"
                onClick={() => setLocation("crew")}
              >
                <span className="hidden mr-[11px] lg:block">02</span> crew
              </Link>
              <div
                style={
                  location === "crew" ? { borderColor: "#fff" } : undefined
                }
                className="w-[100%] h-[3px] border-b-[3px] border-transparent mt-auto"
              ></div>
            </li>
            <li className="flex flex-col justify-center  ">
              <Link
                to={"/technology"}
                className="flex mt-auto"
                onClick={() => setLocation("technology")}
              >
                <span className="hidden mr-[11px] lg:block">03</span> technology
              </Link>
              <div
                className="w-[100%] h-[3px] border-b-[3px] border-transparent mt-auto"
                style={
                  location === "technology"
                    ? { borderColor: "#fff" }
                    : undefined
                }
              ></div>
            </li>
          </ul>
        </div>
        {!props.showMenu ? (
          <MenuIcon onClick={() => props.setShowMenu(true)} />
        ) : null}
        {/*<MenuIcon onClick={() => props.setShowMenu(true)} />*/}
      </header>
    </>
  );
}

export default Header;
