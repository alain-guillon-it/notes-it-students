// styles scss
import Styles from "../LearningHtml.module.scss";

// images
import ParagraphIMG from "../../../assets/images/img_html/paragraphe.jpg";

function ArticlePARAGRAPH() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h1>&lt;p&gt;: The Paragraph element</h1>
      <p className="ml-25 mb-25">
        The &lt;p&gt; HTML element represents a paragraph. Paragraphs are
        usually represented in visual media as blocks of text separated from
        adjacent blocks by blank lines and/or first-line indentation, but HTML
        paragraphs can be any structural grouping of related content, such as
        images or form fields.
      </p>
      <img
        src={ParagraphIMG}
        alt="Represent a paragraph structur html"
        className="ml-25"
      />
      <p className="ml-25 mt-25">
        For generat a lorem ipsum, write loremX with X is a reference at a
        number of words do you want. <br />
        Push tab on your keyboard and look the magic tricks.
      </p>
    </article>
  );
}

export default ArticlePARAGRAPH;
