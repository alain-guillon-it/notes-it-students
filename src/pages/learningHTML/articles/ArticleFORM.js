// styles scss
import Styles from "../LearningHtml.module.scss";

// images
import FormIMG from "../../../assets/images/img_html/form_action.jpg";

function ArticleFORM() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h1>&lt;form&gt;: The Form element</h1>
      <p className="ml-25 mb-25">
        The &lt;form&gt; HTML element represents a document section containing
        interactive controls for submitting information.
      </p>

      <img
        src={FormIMG}
        alt="Represent a form action structur html"
        className="ml-25 mb-25"
      />
    </article>
  );
}

export default ArticleFORM;
