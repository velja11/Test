import { useState } from "react";
import classes from "./../test.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const loginUser = localStorage.getItem("loguser");
  const [isLogged, setLogged] = useState(loginUser);

  console.log(isLogged);

  const loginHandler = (event) => {
    event.preventDefault();

    setLogged(true);
    localStorage.setItem("loguser", true);
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.divHome}>
        <Link className={classes.link} to="/">
          Home
        </Link>
        {isLogged && (
          <Link className={classes.link} to="/favorites">
            Favorites
          </Link>
        )}
      </div>
      {!isLogged && (
        <button className={classes.button1} onClick={loginHandler}>
          Login
        </button>
      )}
    </div>
  );
};

export default NavBar;
