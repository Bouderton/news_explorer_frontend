import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";

const Main = ({ openPopup }) => {
  return (
    <main className="main">
      <Header openPopup={openPopup} />
      {/* <Preloader searching={false} /> */}
      {/* <NewsCardList /> */}
      <About />
    </main>
  );
};

export default Main;
