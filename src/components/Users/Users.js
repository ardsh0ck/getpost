import React from "react";
import Button from "../organism/Button/Button";
import Card from "../organism/Card/Card";
import styles from "./Users.module.scss";

const Users = ({ data, page, pages, showMore }) => {
  return (
    <section className={styles.users}>
      <div className={styles.usersInner}>
        <h1 className={styles.usersHeading}>Working with GET request</h1>
        <>
          <ul className={styles.usersList}>
            {data.map((item) => {
              return (
                <li
                  key={
                    item.id *
                    item.registration_timestamp *
                    Math.floor(Math.random() * 100)
                  }
                  className={styles.usersListItem}
                >
                  <Card props={item} />
                </li>
              );
            })}
          </ul>

          {pages && page !== pages && (
            <Button
              color="yellow"
              onClick={showMore}
              className={styles.usersShowMore}
            >
              Show more
            </Button>
          )}
        </>
      </div>
    </section>
  );
};

export default Users;
