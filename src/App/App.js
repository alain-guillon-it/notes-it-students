// dependencies
import { Outlet } from "react-router-dom";

// styles scss
import Styles from "./App.module.scss";

// components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div className={Styles.App}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
