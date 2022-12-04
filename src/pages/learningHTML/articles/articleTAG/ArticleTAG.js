import { NavLink, Outlet } from "react-router-dom";

// styles scss
import Styles from "../../LearningHtml.module.scss";
import StylesArticleTag from "./ArticleTag.module.scss";

function ArticleTAG() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h1>TAG</h1>
      <section className={StylesArticleTag.ArticleTAG}>
        <nav>
          <NavLink to="what-is-a-tag-or-balise">
            What's a tag or a balise ?
          </NavLink>
          <NavLink to="how-writing-a-tag">How writing a tag ?</NavLink>
        </nav>

        <div>
          <Outlet />
        </div>
        <div
          style={{
            display: "flex",
            border: "none",
            padding: "5px 0",
            justifyContent: "space-between",
          }}
        >
          <small>* Select an option for look the content</small>
          <small>
            source:{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">
              MDN
            </a>
          </small>
        </div>
      </section>
    </article>
  );
}

export default ArticleTAG;
