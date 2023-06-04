import React from 'react';
import styles from './About.module.css';

function About(props) {
  return (
    <div>
      <h1 className={styles.title}>Bienvenido a mi aplicación</h1>
      <p className={styles.description}>En esta aplicación utilicé los conocimientos de Henry</p>
      <img src={props.imageSrc} alt="Imagen de perfil" className={styles.profileImage} />
      <h3 className={styles.name}>Hola, mi nombre es Martin Morales</h3>
      <p className={styles.linkedin}>
        Perfil de LinkedIn: <a href="https://www.linkedin.com/in/martin-jose-morales-jimenez-279748219/" target="_blank" rel="noopener noreferrer">Martin Morales</a>
      </p>
    </div>
  );
}

export default About;

