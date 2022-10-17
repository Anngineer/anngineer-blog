import Banner from "./Banner";
import backendCards from "./backendCards";
import backendBlogBody from "./backendBlogBody";
import { useState } from "react";
import { Link } from "react-router-dom";
const ArchivePage = ({ theme, setTheme }) => {
  const [fantasyBlogs, setFantasyBlogs] = useState(
    backendCards.filter((blog) => blog.tags.includes("fantasy"))
  );
  const [scifiBlogs, setSciFiBlogs] = useState(
    backendCards.filter((blog) => blog.tags.includes("sci fi"))
  );
  const [nonfictionBlogs, setNonfictionBlogs] = useState(
    backendCards.filter((blog) => blog.tags.includes("nonfiction"))
  );
  return (
    <div className="archive-page">
      <Banner theme={theme} setTheme={setTheme} />
      <div className="archive-body">
        <h1>Archive</h1>
        <h3>Fantasy</h3>
        <ul>
          {fantasyBlogs.map((blog) => (
            <li key={blog.id}>
              <Link to={`/blogs/${blog.id}`}> {blog.title}</Link>
            </li>
          ))}
        </ul>
        <h3>Sci Fi</h3>
        <ul>
          {scifiBlogs.map((blog) => (
            <li key={blog.id}>
              <Link to={`/blogs/${blog.id}`}> {blog.title}</Link>
            </li>
          ))}
        </ul>
        <h3>Nonfiction</h3>
        <ul>
          {nonfictionBlogs.map((blog) => (
            <li key={blog.id}>
              <Link to={`/blogs/${blog.id}`}> {blog.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ArchivePage;
