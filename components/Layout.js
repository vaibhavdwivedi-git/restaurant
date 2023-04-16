import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Navbar
        findus={() => {
          router.push("/#footer");
        }}
      />
      {children}
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
