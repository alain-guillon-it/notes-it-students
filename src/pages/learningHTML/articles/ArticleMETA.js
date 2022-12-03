// styles scss
import Styles from "../LearningHtml.module.scss";

function ArticleMeta() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h3>Découverte</h3>
      <ul>
        <li>Les méta ça sert à quoi ?</li>
        <li>Comment ça marche ?</li>
        <li>Les plus importante</li>
      </ul>
    </article>
  );
}

export default ArticleMeta;
