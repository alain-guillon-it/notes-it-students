// styles scss
import Styles from "../LearningHtml.module.scss";

function ArticleTAG() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h1>TAG</h1>
      <ul>
        <li>Comment écrire un tag</li>
        <li>Tag Orphelin ?</li>
      </ul>
    </article>
  );
}

export default ArticleTAG;
