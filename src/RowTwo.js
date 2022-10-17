// import { Card } from "semantic-ui-react";
import backendCards from "./backendCards";
import BlogCards from "./BlogCards";
const RowTwo = () => {
  return (
    <div className="row-two">
      {/* <h2>Row Two</h2> */}
      <BlogCards blogList={backendCards} frontPage={true} />
    </div>
  );
};
export default RowTwo;
