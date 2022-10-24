import Banner from "./Banner";
// import retrogirl2a from "./images/retrogirl2a.jpg";
// import authorphoto9 from "./images/authorphoto9.jpg";
import authorphoto10 from "./images/authorphoto10.jpg";

const AuthorPage = ({ theme, setTheme }) => {
  return (
    <div className="author-page">
      <Banner theme={theme} setTheme={setTheme} />
      <div className="author-body">
        <h1>Ann Bridge</h1>
        <div className="author-container">
          <div className="image-container">
            <img
              src={authorphoto10}
              alt="smiling, brunette woman in a gray suit and glasses"
            />
          </div>
          <div className="author-description">
            Ann is a web developer. With a background in research, she is a
            published co-author in&nbsp;
            <a href="https://pubmed.ncbi.nlm.nih.gov/32338550/">
              Disability and Rehabilitation: Assistive Technology.
            </a>
            <br />
            <br />
            Having found a passion for teaching engineering topics while at
            university, she continues to do so by blogging, creating educational
            YouTube content, and writing story-based educational games. Feel
            free to peruse her projects on{" "}
            <a href="https://github.com/Anngineer">GitHub</a> as well.
            <br />
            <br />
            This blog is written to help others discover and explore their love
            of technology and mathematics. And most importantly, it aims to
            support readers as they navigate new career challenges and personal
            growth.
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthorPage;
