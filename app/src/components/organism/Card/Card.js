import React from "react";
import styles from "./Card.module.scss";

const Card = ({ props }) => {
  const { photo, name, position, email, phone } = props;

  return (
    <div className={styles.card}>
      <img src={photo} alt={name} className={styles.cardImage} />
      <p className={styles.cardName}>{name}</p>

      <ul className={styles.cardBio}>
        <li className={styles.cardBioItem}>
          <p>{position}</p>
        </li>
        <li className={styles.cardBioItem}>
          <p>{email}</p>
        </li>
        <li className={styles.cardBioItem}>
          <p>{phone}</p>
        </li>
      </ul>
    </div>
  );
};

export default Card;
