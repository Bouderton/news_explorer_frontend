import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Header from "../Header/Header";

const Main = ({ openPopup }) => {
  return (
    <main className="main">
      <Header openPopup={openPopup} />
      <NewsCardList />
      <About />
    </main>
  );
};

export default Main;
