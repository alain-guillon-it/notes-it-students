// styles scss
import Styles from "../LearningHtml.module.scss";

// images
import ListIMG from "../../../assets/images/img_html/list.jpg";

function ArticleLIST() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h1>List</h1>

      <h2>&lt;ul&gt;: The Unordered List element</h2>
      <p className="ml-25 mb-25">
        The &lt;ul&gt; HTML element represents an unordered list of items,
        typically rendered as a bulleted list.
      </p>
      <h2>&lt;ol&gt;: The Ordered List element</h2>
      <p className="ml-25 mb-25">
        The &lt;ol&gt; HTML element represents an ordered list of items —
        typically rendered as a numbered list.
      </p>
      <h2>&lt;li&gt;: The List Item element</h2>
      <p className="ml-25 mb-25">
        The &lt;li&gt; HTML element is used to represent an item in a list. It
        must be contained in a parent element: an ordered list (&lt;ol&gt;), an
        unordered list (&lt;ul&gt;), or a menu (&lt;menu&gt;). In menus and
        unordered lists, list items are usually displayed using bullet points.
        In ordered lists, they are usually displayed with an ascending counter
        on the left, such as a number or letter.
      </p>
      <img
        src={ListIMG}
        alt="Represent a list structur html"
        className="ml-25"
      />
    </article>
  );
}

export default ArticleLIST;
