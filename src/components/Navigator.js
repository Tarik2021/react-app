import {Link} from "react-router-dom";

const Navigator = () => {
  return (
    <div className="navigator">
      <Link className="links" to="/">Hogwarts</Link>
      &nbsp;&nbsp;
      <Link className="links" to="/students">Students</Link>
      &nbsp;&nbsp;
      <Link className="links" to="/courses">Courses</Link>
    </div>
  );
};

export default Navigator;


