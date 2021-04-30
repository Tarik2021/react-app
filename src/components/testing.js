import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("MSG"),
  lastName: yup.string().required("MSG"),
  yearOfBirth: yup.number(),
  address: yup.string(),
});

const {register, handleSubmit, errors} = useForm({
  resolver: yupResolver(schema),
});

const onSubmit = (data) => console.log(data);

<form className="input-form" onSubmit={handleSubmit(onSubmit)}>
  <div style={{margin: "12px 0"}} key={key}>
    <label className="colorizer" htmlFor="firstName">
      {input.label}
    </label>
    <input type={input.type} name={input.name} value={student.firstName} onChange={changeHandler} ref={register} />
    <p>{errors[input.name]?.message}</p>
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
</form>;
