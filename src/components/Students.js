import {useEffect, useState} from "react";
import {list} from "../services/apiService";
import {Link} from "react-router-dom";

const Students= () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    list("students", (data) => {
      setStudents(data);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="colorizer">Students</h1>
      <table className="tabela">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Year of Birth</th>
            <th>Addres</th>
            <td>
              <Link className="links" to="/students/0">Add new</Link>
            </td>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.firstName}</td>
              <td>{s.lastName}</td>
              <td>{s.yearOfBirth}</td>
              <td>{s.address}</td>
              <td>
                <Link className="links" to={`/students/${s._id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
