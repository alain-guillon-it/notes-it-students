// styles scss
import Styles from "../LearningHtml.module.scss";

function ArticleHTML() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h3>HTML</h3>
      <ul>
        <li>HTML ?</li>
        <li>A quoi sa sert ?</li>
      </ul>
    </article>
  );
}

export default ArticleHTML;
