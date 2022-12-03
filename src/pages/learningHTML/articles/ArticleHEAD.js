// styles scss
import Styles from "../LearningHtml.module.scss";

function ArticleHEAD() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h3>HEAD</h3>
      <ul>
        <li>Son utilité ?</li>
        <li>Où l'écrire ?</li>
      </ul>
    </article>
  );
}

export default ArticleHEAD;
