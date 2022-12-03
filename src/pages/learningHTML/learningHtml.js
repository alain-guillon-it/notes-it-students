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
            <NavLink to="html">html</NavLink>
          </li>
          <li>
            <NavLink to="head">head</NavLink>
          </li>
          <li>
            <NavLink to="meta">meta</NavLink>
          </li>
          <li>
            <NavLink to="title">title</NavLink>
          </li>
          <li>
            <NavLink to="link">link</NavLink>
          </li>
          <li>
            <NavLink to="script">Script</NavLink>
          </li>
          <li>
            <NavLink to="body">body</NavLink>
          </li>
          <li>
            <NavLink to="structure">structure</NavLink>
          </li>
        </ul>

        <h3>Visible</h3>
        <ul>
          <li>
            <NavLink to="semantique">semantique</NavLink>
          </li>
          <li>
            <NavLink to="paragraphe">paragraphe</NavLink>
          </li>
          <li>
            <NavLink to="listes">listes</NavLink>
          </li>
          <li>
            <NavLink to="lien">lien</NavLink>
          </li>
          <li>
            <NavLink to="images">images</NavLink>
          </li>
          <li>
            <NavLink to="tableau">tableau</NavLink>
          </li>
          <li>
            <NavLink to="audio">audio</NavLink>
          </li>
          <li>
            <NavLink to="video">video</NavLink>
          </li>
          <li>
            <NavLink to="iframe">iframe</NavLink>
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
            <NavLink to="button">button</NavLink>
          </li>
          <li>
            <NavLink to="textarea">textarea</NavLink>
          </li>
        </ul>
      </section>
      <Outlet />
    </main>
  );
}

export default LearningHtml;
