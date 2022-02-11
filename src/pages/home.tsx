import React from "react";

// import tigerBooks from "../images/tiger-books.jpeg";

import styles from "./home.module.scss";

const Home: React.FC = () => (
  <>
    <div className={styles.background} />
    <div className={styles.tigerPhoto} />
    <div className={styles.pageContainer}>
      <header className={styles.menuHeader}>
        <h1 className="f1">tiger projects</h1>
        <p className={styles.name}>Tiger Hagino Reid</p>
        <p className={styles.name}>萩野タイガー</p>
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
            href="https://www.linkedin.com/in/tigerhaginoreid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
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
      <main>
        <ul className={styles.list}>
          <li>music release campaign strategy</li>
          <li>record label project management </li>
          <li>artist management</li>
          <li>international</li>
        </ul>
        <h2 className={styles.listTitle}>Roster:</h2>
        <ul className={styles.list}>
          <li>Kyary Pamyu Pamyu: global project manager for Asobi System</li>
          <li>Lucinda Chua: manager w/ ATC</li>
          <li>Rina Sawayama: international for Dirty Hit</li>
          <li>Yaeji: global project manager for XL Recordings</li>
        </ul>
      </main>
      {/* <main className={styles.mainContent}>
      <div className={styles.imageWrapper}>
        <img src={tigerBooks} alt="Tiger Reid" />
      </div>
    </main> */}
    </div>
  </>
);

export default Home;
