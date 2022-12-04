// styles scss
import Styles from "../LearningHtml.module.scss";

// images
import LabelInputIMG from "../../../assets/images/img_html/label-input.jpg";

function ArticleLABEL() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h1>&lt;label&gt;: The Label element</h1>
      <p className="ml-25 mb-25">
        The &lt;form&gt; HTML element represents a caption for an item in a user
        interface.
      </p>

      <img
        src={LabelInputIMG}
        alt="Represent a label structur html"
        className="ml-25 mb-25"
      />
    </article>
  );
}

export default ArticleLABEL;
