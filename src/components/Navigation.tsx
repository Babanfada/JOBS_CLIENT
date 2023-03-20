import Image from "next/image";
import logo from "../asset/logo.svg";
const Nav = () => {
  return (
    <div>
      <Image src={logo} alt="logo" />
    </div>
  );
};

export default Nav;
