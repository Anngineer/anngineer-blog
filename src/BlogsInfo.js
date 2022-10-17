import { useParams } from "react-router-dom";
import backendCards from "./backendCards";
import backendBlogBody from "./backendBlogBody";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const BlogsInfo = ({ theme, setTheme }) => {
  const { id } = useParams();
  const handleThemeButton = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="blog-info-page">
      <nav className="blog-home-nav">
        <Link to="/">Writing Blog</Link>
        {theme === "dark" && (
          <button
            className="theme-button dark"
            onClick={() => handleThemeButton()}
          >
            <Icon name="sun" />
          </button>
        )}
        {theme === "light" && (
          <button
            className="theme-button light"
            onClick={() => handleThemeButton()}
          >
            <Icon name="moon" />
          </button>
        )}
      </nav>

      <div className="blog-section">
        <h1>{backendCards[id - 1].title}</h1>

        <img src={backendCards[id - 1].image} alt={backendCards[id - 1].alt} />
        <h4>by {backendCards[id - 1].author}</h4>

        <div className="blog-info-blog-body">
          {backendBlogBody[id - 1].body}
        </div>
      </div>
    </div>
  );
};
export default BlogsInfo;
