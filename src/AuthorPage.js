import Banner from "./Banner";
import retrogirl2a from "./images/retrogirl2a.jpg";

const AuthorPage = ({ theme, setTheme }) => {
  return (
    <div className="author-page">
      <Banner theme={theme} setTheme={setTheme} />
      <div className="author-body">
        <h1>Author Information</h1>
        <div className="author-container">
          <div className="image-container">
            <img
              src={retrogirl2a}
              alt="a vintage illustration of a girl with dark hair"
            />
          </div>
          <div className="author-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthorPage;
