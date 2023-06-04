import styles from "./Form.module.css";
import { useState } from "react";
import imagen from "./img/Rick-y-Morty.jpg";
import { validate } from "./validation";

function Form(props) {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors(validate({ ...userData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <img src={imagen} alt="" />
      <br />
      <label htmlFor="userName">Nombre:</label>
      <input
        className={errors.userName && styles.warning}
        type="text"
        value={userData.userName}
        name="userName"
        onChange={handleChange}
      />
      {errors.userName && <p className={styles.error}>{errors.userName}</p>}
      <label htmlFor="password">Password:</label>
      <input
        className={errors.password && styles.warning}
        type="password"
        value={userData.password}
        name="password"
        onChange={handleChange}
      />
      {errors.password && <p className={styles.error}>{errors.password}</p>}
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Form;
