import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Header from "../Header/Header";
const Main = () => {
  return (
    <main className="main">
      <Header />
      <NewsCardList />
      <About />
    </main>
  );
};

export default Main;
