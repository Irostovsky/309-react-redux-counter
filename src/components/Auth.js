import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store";

const Auth = () => {
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === "test@test.com" && password === "test") {
      dispatch(authActions.login());
    } else {
      console.log("Invalid credentials!");
    }
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
