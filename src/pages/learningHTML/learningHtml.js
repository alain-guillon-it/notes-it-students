// dependencies
import { NavLink, Outlet } from "react-router-dom";

// styles scss
import Styles from "./LearningHtml.module.scss";

function LearningHtml() {
  return (
    <main className={Styles.LearningHtml}>
      <section className={Styles.LearningHtml__menu}>
        <h2>Somaire</h2>

        <h3>Not visible</h3>
        <ul>
          <li>
            <NavLink to="ide">ide</NavLink>
          </li>
          <li>
            <NavLink to="tag">tag</NavLink>
          </li>
          <li>
            <NavLink to="structure">structure</NavLink>
          </li>
        </ul>

        <h3>Visible</h3>
        <ul>
          <li>
            <NavLink to="title">title</NavLink>
          </li>
          <li>
            <NavLink to="paragraph">paragraph</NavLink>
          </li>
          <li>
            <NavLink to="list">list</NavLink>
          </li>
          <li>
            <NavLink to="link">link</NavLink>
          </li>
          <li>
            <NavLink to="img">image</NavLink>
          </li>
          <li>
            <NavLink to="table">array</NavLink>
          </li>
          <li>
            {/* <NavLink to="audio">audio</NavLink> */}
            AUDIO ------------ <small>à faire</small>
          </li>
          <li>
            {/* <NavLink to="video">video</NavLink> */}
            VIDEO ------------ <small>à faire</small>
          </li>
          <li>
            {/* <NavLink to="iframe">iframe</NavLink> */}
            IFRAME ---------- <small>à faire</small>
          </li>
        </ul>

        <h3>Formulaire</h3>
        <ul>
          <li>
            <NavLink to="form">form</NavLink>
          </li>
          <li>
            <NavLink to="label">label</NavLink>
          </li>
          <li>
            <NavLink to="input">input</NavLink>
          </li>
          <li>
            {/* <NavLink to="button">button</NavLink> */}
            BUTTON ---------- <small>à faire</small>
          </li>
          <li>
            {/* <NavLink to="textarea">textarea</NavLink> */}
            TEXTAREA ---------- <small>à faire</small>
          </li>
        </ul>
      </section>
      <Outlet />
    </main>
  );
}

export default LearningHtml;
