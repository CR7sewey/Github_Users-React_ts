import { useNavigation } from "react-router-dom";
import { Outlet } from "react-router-dom"; // to displays the children in App

const HomeLayout = () => {
  const navigation = useNavigation(); // returns state of the page
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <section className="page">
        {isPageLoading ? (
          <h1>Loading...</h1>
        ) : (
          <section className="align-element py-20">
            <Outlet />
          </section>
        )}
      </section>
    </>
  );
};

export default HomeLayout;
