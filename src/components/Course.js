import {useState, useEffect} from "react";
import {read, insert, update, remove} from "../services/apiService";

const Course = ({match, history}) => {
  const [inputReq, inputReqMsg] = useState("");
  const [id] = useState(match.params.id);
  const [course, setCourse] = useState({
    _id: "0",
    name: "",
    points: "",
  });

  useEffect(() => {
    if (id !== "0") {
      read("courses", id, (data) => {
        if (data) setCourse(data);
      });
    }
  }, [id]);

  function changeHandler(e) {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  }

  const back = () => {
    history.push("/courses");
  };

  const save = () => {
    if (!course.name || !course.points) {
      inputReqMsg("This field is required in Wizarding World. To proceed fill it out!");
    } else {
      if (id === "0") {
        course._id = undefined;
        insert("courses", course, (data) => {
          if (data) return history.push("/courses");
          console.log("There was error during save data");
        });
      } else {
        update("courses", id, course, (data) => {
          if (data) return history.push("/courses");
          console.log("There was error during save data");
        });
      }
    }
  };

  const del = () => {
    remove("courses", id, (data) => {
      history.push("/courses");
    });
  };

  return (
    <div className="container">
      <h1 className="colorizer">Course</h1>
      <form className="input-form">
        <div style={{margin: "12px 0"}}>
          <label className="colorizer" htmlFor="name">
            Course name:{" "}
          </label>
          <input type="text" placeholder="Enter course name" name="name" value={course.name} onChange={changeHandler} required="required" />
          <p style={{color: "red", fontSize: "10px"}} className="inputReqMsg">{inputReq}</p>
        </div>
        <div style={{margin: "12px 0"}}>
          <label className="colorizer" htmlFor="points">
            Course points:{" "}
          </label>
          <input type="text" placeholder="Enter course points" name="points" value={course.points} onChange={changeHandler} required="required" />
          <p style={{color: "red", fontSize: "10px"}} className="inputReqMsg">{inputReq}</p>
        </div>
        <hr className="colorizer" />
        {id !== "0" && (
          <div className="left">
            <button className="btn" type="button" onClick={del}>
              DELETE
            </button>
          </div>
        )}
        <div className="right">
          <button className="btn" type="button" onClick={back}>
            BACK
          </button>
          &nbsp;&nbsp;
          <button className="btn" type="button" onClick={save}>
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Course;
