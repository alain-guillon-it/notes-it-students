// styles scss
import Styles from "../LearningHtml.module.scss";

// images
import LabelInputIMG from "../../../assets/images/img_html/label-input.jpg";

function ArticleINPUT() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h1>&lt;input&gt;: The Input (Form Input) element</h1>
      <p className="ml-25 mb-25">
        The &lt;form&gt; HTML element is used to create interactive controls for
        web-based forms in order to accept data from the user; a wide variety of
        types of input data and control widgets are available, depending on the
        device and user agent. The &lt;input&gt; element is one of the most
        powerful and complex in all of HTML due to the sheer number of
        combinations of input types and attributes.
      </p>

      <img
        src={LabelInputIMG}
        alt="Represent a label structur html"
        className="ml-25 mb-25"
      />
    </article>
  );
}

export default ArticleINPUT;
