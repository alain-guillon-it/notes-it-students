// styles scss
import Styles from "../LearningHtml.module.scss";

function ArticleBODY() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h1>Body</h1>
      <ul>
        <li>A quoi elle sert ?</li>
        <li>Exemple</li>
      </ul>
    </article>
  );
}

export default ArticleBODY;
