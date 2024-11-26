/* IMPORT COMPONENTS */
import MainText from "./components/MainText";
import ProfilePicture from "./components/ProfilePicture";
import Status from "./components/Status";
import HeaderBanner from "./components/HeaderBanner";
import InnerContent from "./components/InnerContent";

/* IMPORT CSS */
import "./style.css";

/* MAIN COMPONENT */
export const App = () => {
  return (
    <section id="container">
      <div className="inner-container">
        <ProfilePicture />
        <Status />
        <HeaderBanner />
        <MainText />
        <InnerContent />
      </div>
    </section>
  )
}

export default App;
