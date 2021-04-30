import {useState, useEffect} from "react";
import {read, insert, update, remove} from "../services/apiService";

const Student = ({match, history}) => {
  const [id] = useState(match.params.id);
  const [student, setStudent] = useState({
    _id: "0",
    firstName: "",
    lastName: "",
    yearOfBirth: "",
    address: "",
  });

  useEffect(() => {
    if (id !== "0") {
      read("students", id, (data) => {
        if (data) setStudent(data);
      });
    }
  }, [id]);

  function changeHandler(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  const back = () => {
    history.push("/students");
  };

  const save = () => {
    if (id === "0") {
      student._id = undefined;
      insert("students", student, (data) => {
        if (data) return history.push("/students");
        console.log("There was error during save data");
      });
    } else {
      update("students", id, student, (data) => {
        if (data) history.push("/students");
        console.log("There was error during save data");
      });
    }
  };

  const del = () => {
    remove("students", id, (data) => {
      history.push("/students");
    });
  };

  return (
    <div className="container">
      <h1 className="colorizer">Student</h1>
      <form className="input-form">
        <div style={{margin: "12px 0"}}>
          <label className="colorizer" htmlFor="firstName">
            First name:{" "}
          </label>
          <input type="text" placeholder="Enter first name of student" name="firstName" value={student.firstName} onChange={changeHandler} required="required" />
        </div>
        <div style={{margin: "12px 0"}}>
          <label className="colorizer" htmlFor="lastName">
            Last name:{" "}
          </label>
          <input type="text" placeholder="Enter last name of student" name="lastName" value={student.lastName} onChange={changeHandler} required="required"/>
        </div>
        <div style={{margin: "12px 0"}}>
          <label className="colorizer" htmlFor="yearOfBirth">
            Year of Birth:{" "}
          </label>
          <input type="text" placeholder="Enter year of birth" name="yearOfBirth" value={student.yearOfBirth} onChange={changeHandler} />
        </div>
        <div style={{margin: "12px 0"}}>
          <label className="colorizer" htmlFor="address">
            Address:{" "}
          </label>
          <input type="text" placeholder="Enter address" name="address" value={student.address} onChange={changeHandler} />
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

export default Student;
