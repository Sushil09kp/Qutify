import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import FeedbackModal from "../FeedbackModal/FeedbackModal";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button onClick={() => setOpen(true)}>Give Feedback</Button>
      <FeedbackModal open={open} onClose={() => setOpen(false)} />
    </nav>
  );
}

export default Navbar;