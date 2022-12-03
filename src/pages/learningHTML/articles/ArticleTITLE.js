// styles scss
import Styles from "../LearningHtml.module.scss";

function ArticleTITLE() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h1>Title</h1>
      <ul>
        <li>A quoi ça sert ?</li>
      </ul>
    </article>
  );
}

export default ArticleTITLE;
