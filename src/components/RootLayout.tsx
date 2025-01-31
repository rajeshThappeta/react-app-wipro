import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Header />
      {/* main content dynamic loading */}
      <div style={{minHeight:'90vh'}}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
