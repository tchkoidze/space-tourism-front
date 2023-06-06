import { Link } from "react-router-dom";
import Close from "../svg/Close";

function Menu(props: { setShowMenu: (bool: boolean) => void }) {
  return (
    <div className="absolute top-0 right-0 w-[254px] h-[100vh] pl-[32px] pr-[26px] py-[33px] bg-white/[0.04] backdrop-blur-2xl">
      <div>
        <Close onClick={() => props.setShowMenu(false)} />
      </div>
      <nav className="flex flex-col   text-white">
        <Link to={"/home"}>
          <button>00 HOME</button>
        </Link>
        <Link to={"/destination"}>
          <button>01 DESTINATION</button>
        </Link>
        <Link to={"/crew"}>
          <button>02 CREW</button>
        </Link>
        <Link to={"/technology"}>
          <button>03 TECHNOLOGY</button>
        </Link>
      </nav>
    </div>
  );
}

export default Menu;
