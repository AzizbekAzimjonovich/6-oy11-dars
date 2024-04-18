import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ThemeContainer from "../components/ThemeContainer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <ThemeContainer />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
