// styles scss
import Styles from "../LearningHtml.module.scss";

// images
import IMG from "../../../assets/images/img_html/img.jpg";
import IMGExemple from "../../../assets/images/img_html/img_exemple.jpg";

function ArticleLINK() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h1>&lt;img&gt;: The Image Embed element</h1>

      <p className="ml-25 mb-25">
        The &lt;img&gt; The HTML element embeds an image into the document.
      </p>

      <img
        src={IMG}
        alt="Represent a img structur html"
        className="ml-25 mb-25"
      />
      <img
        src={IMGExemple}
        alt="Represent a img exemple structur html"
        className="ml-25 mb-25"
      />
    </article>
  );
}

export default ArticleLINK;
