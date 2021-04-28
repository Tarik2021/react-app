import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import MainRouter from "./MainRouter";
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <AppHeader />
      <MainRouter />
      <AppFooter />
    </BrowserRouter>
  );
};

export default App;
