import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const BlogCards = ({ blogList, frontPage }) => {
  //   const revBlogList = blogList.reverse();
  const revBlogList2 = [];
  // arr1 = [];
  for (let i = blogList.length - 1; i >= 0; i--) {
    revBlogList2.push(blogList[i]);
  }
  if (frontPage === true) {
    revBlogList2.shift();
  }
  return (
    <div className="blog-cards">
      {revBlogList2.map((book) => (
        <Link
          className="blog-card"
          key={book.key}
          //   as={Link}
          to={`/blogs/${book.key}`}
        >
          <div className="card-header">
            <div className="blog-header">
              <img src={book.image} alt={book.alt} style={{ width: "100%" }} />
            </div>
          </div>
          <div className="card-content">
            <h3>{book.title}</h3>
            <p className="blurb">{book.blurb}</p>
            <p>
              <b>Tags:</b> {book.tags.join(", ")}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCards;
