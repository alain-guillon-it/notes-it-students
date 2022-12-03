// styles scss
import Styles from "../LearningHtml.module.scss";

function ArticleIDE() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h3>IDE</h3>
      <ul>
        <li>Bracket</li>
        <li>Atom</li>
        <li>SublimeText</li>
        <li>JetBrain</li>
        <li>Visua Studio Code</li>
      </ul>
    </article>
  );
}

export default ArticleIDE;
