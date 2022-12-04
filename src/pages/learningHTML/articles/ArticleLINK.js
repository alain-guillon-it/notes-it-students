// styles scss
import Styles from "../LearningHtml.module.scss";

// images
import LinkIMG from "../../../assets/images/img_html/link.jpg";
import LinkElementIMG from "../../../assets/images/img_html/lien_element.jpg";

function ArticleLINK() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h1>&lt;a&gt;: The Anchor element</h1>

      <p className="ml-25 mb-25">
        The &lt;a&gt; HTML element (or anchor element), with its href attribute,
        creates a hyperlink to web pages, files, email addresses, locations in
        the same page, or anything else a URL can address. <br />
        <br />
        Content within each &lt;a&gt; should indicate the link's destination. If
        the href attribute is present, pressing the enter key while focused on
        the &lt;a&gt; element will activate it.
      </p>

      <img
        src={LinkIMG}
        alt="Represent a link structur html"
        className="ml-25 mb-25"
      />
      <img
        src={LinkElementIMG}
        alt="Represent a link structur html"
        className="ml-25 mb-25"
      />
    </article>
  );
}

export default ArticleLINK;
