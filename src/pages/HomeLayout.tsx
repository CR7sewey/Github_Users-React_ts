import { useNavigation } from "react-router-dom";
import { Outlet } from "react-router-dom"; // to displays the children in App
import preloader from '../assets/preloader.gif'
import { Navbar } from "../components/Navbar";
import { PrivateRoute } from "./PrivateRoute";


const HomeLayout = () => {
  const navigation = useNavigation(); // returns state of the page
  const isPageLoading = navigation.state === "loading";


  return (
    <section className="page">
      <Navbar />
      {isPageLoading ? (
        <img src={preloader} alt="loader" />
      ) : (
        <section className="align-element py-20">
          <Outlet />

        </section>
      )}
    </section>
  );
};

export default HomeLayout;
