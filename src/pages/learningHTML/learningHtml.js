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
            <NavLink to="tag">tag / balise</NavLink>
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
            <NavLink to="link">link</NavLink>
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
          <li>SEMANTIQUE</li>
          <li>TITRE</li>
          <li>PARAGRAPHE</li>
          <li>LISTES</li>
          <li>LIEN</li>
          <li>IMAGES</li>
          <li>TABLEAUX</li>
          <li>AUDIO</li>
          <li>VIDEO</li>
          <li>IFRAME</li>
        </ul>

        <h3>Formulaire</h3>
        <ul>
          <li>FORM</li>
          <li>LABEL</li>
          <li>INPUT</li>
          <li>BUTTON</li>
          <li>TEXTAREA</li>
        </ul>
      </section>
      <Outlet />
    </main>
  );
}

export default LearningHtml;
