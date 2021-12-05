import React from "react";

import tigerBooks from "../images/tiger-books.jpeg";

import styles from "./home.module.scss";

const Home: React.FC = () => (
  <div className={styles.pageContainer}>
    <header className={styles.menuHeader}>
      <h1 className="f1">tiger projects</h1>
      <p>Tiger Hagino Reid</p>
      <p>萩野タイガー</p>
      <nav className="f6">
        <a
          className={styles.menuLink}
          href="https://www.instagram.com/tigerhaginoreid"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
        <a
          className={styles.menuLink}
          href="https://twitter.com/tigerhaginoreid"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
        <a
          className={styles.menuLink}
          href="mailto:hello@tigerprojects.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          email
        </a>
      </nav>
    </header>
    <main className={styles.mainContent}>
      <div className={styles.imageWrapper}>
        <img src={tigerBooks} alt="Tiger Reid" />
      </div>
    </main>
  </div>
);

export default Home;
