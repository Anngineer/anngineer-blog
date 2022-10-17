import Banner from "./Banner";
import HomeBlogSection from "./HomeBlogSection";

const Home = ({ theme, setTheme }) => {
  return (
    <>
      {" "}
      {theme === "light" && (
        <div className="home-page light">
          <Banner theme={theme} setTheme={setTheme} />
          <HomeBlogSection theme={theme} />
        </div>
      )}
      {theme === "dark" && (
        <div className="home-page dark">
          <Banner theme={theme} setTheme={setTheme} />
          <HomeBlogSection theme={theme} />
        </div>
      )}
    </>
  );
};
export default Home;
