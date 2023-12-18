import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import MediaQuery from "react-responsive";

export default function Homepage() {
  return (
    <>
      <MediaQuery maxWidth={767}>
        {/* <div className="App" id="outer-container"> */}
          <Sidebar
            // pageWrapId={"page-wrap"}
            // outerContainerId={"outer-container"}
          />
          {/* <div id="page-wrap"> */}
            <Header />
            <Nav />
            <Main />
            <Footer />
          {/* </div>
        </div> */}
      </MediaQuery>

      <MediaQuery minWidth={768}>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </MediaQuery>
    </>
  );
}
