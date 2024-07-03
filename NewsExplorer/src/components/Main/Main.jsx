import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

const Main = () => {
  return (
    <div className="main">
      <NewsCardList />
      <About />
    </div>
  );
};

export default Main;
