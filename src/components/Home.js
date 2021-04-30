import logo from "../assets/images/logo.png";

const Home = () => {
  return (
      <div className="container">
          <img src={logo} alt="logo" />
          <div className="title">
              Welcome to Hogwarts School of Witchcraft and Wizardry
          </div>
      </div>
  );
};

export default Home;
