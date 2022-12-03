// styles scss
import Styles from "../LearningHtml.module.scss";

function ArticleLINK() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h1>Link</h1>
      <ul>
        <li>Son utilité</li>
        <li>Comment ça marche ?</li>
        <li>Exemple</li>
      </ul>
    </article>
  );
}

export default ArticleLINK;
