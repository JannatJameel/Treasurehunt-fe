import { useState } from "react";
import { signup } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };

  return (
    <div className="container">
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            value={user.username}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            value={user.email}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={user.password}
            type="password"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button className="btn float-right" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
