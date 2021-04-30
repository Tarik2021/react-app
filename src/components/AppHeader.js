import logo from "../assets/images/hp.png";
import Navigator from "./Navigator";

const AppHeader = () => {
  return (
    <header>
      <div className="left">
        <img src={logo} alt="logo" />
      </div>
      <div className="right">
        <Navigator />
      </div>
    </header>
  );
};

export default AppHeader;
