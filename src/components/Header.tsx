import Logo from "../svg/Logo";
import MenuIcon from "../svg/MenuIcon";

function Header(props: {
  setShowMenu: (bool: boolean) => void;
  showMenu: boolean;
}) {
  return (
    <>
      <header className="flex items-center justify-between px-6 absolute top-6 w-[100%]">
        <Logo />
        {!props.showMenu ? (
          <MenuIcon onClick={() => props.setShowMenu(true)} />
        ) : null}
        {/*<MenuIcon onClick={() => props.setShowMenu(true)} />*/}
      </header>
    </>
  );
}

export default Header;
