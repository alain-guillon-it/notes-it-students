// styles scss
import Styles from "../LearningHtml.module.scss";

function ArticleBODY() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h3>Body</h3>
      <ul>
        <li>A quoi elle sert ?</li>
        <li>Exemple</li>
      </ul>
    </article>
  );
}

export default ArticleBODY;
