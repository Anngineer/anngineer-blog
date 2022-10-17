import backendCards from "./backendCards";
import { Link } from "react-router-dom";
import RowTwo from "./RowTwo";
const HomeBlogSection = () => {
  // const

  const idNum = backendCards.length;
  return (
    <div className="home-blog-section">
      {/* Row 1 */}
      <Link className="row-one" to={`/blogs/${idNum}`}>
        {" "}
        <div className="first-row-image">
          {" "}
          <img
            src={backendCards[idNum - 1].image}
            alt={backendCards[idNum - 1].alt}
          />
          {/* </a> */}
        </div>
        <div className="new-post-info">
          <h3>{backendCards[idNum - 1].title}</h3>
          <p>{backendCards[idNum - 1].blurb} </p>
          <p>
            <b>Tags:</b> {backendCards[idNum - 1].tags.join(", ")}
          </p>
        </div>
      </Link>

      <RowTwo />
    </div>
  );
};
export default HomeBlogSection;
