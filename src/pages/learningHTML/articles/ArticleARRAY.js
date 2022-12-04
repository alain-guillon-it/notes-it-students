// styles scss
import Styles from "../LearningHtml.module.scss";

// images
import TableIMG from "../../../assets/images/img_html/table.jpg";

function ArticleARRAY() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h1>ARRAY</h1>

      <h2 className="ml-25 mb-25">&lt;table&gt;: The Table element</h2>
      <p className="ml-25 mb-25">
        The &lt;table&gt; HTML element represents tabular data — that is,
        information presented in a two-dimensional table comprised of rows and
        columns of cells containing data.
      </p>
      <h2 className="ml-25 mb-25">&lt;tr&gt;: The Table Row element</h2>
      <p className="ml-25 mb-25">
        The &lt;tr&gt; HTML element defines a row of cells in a table. The row's
        cells can then be established using a mix of &lt;td&gt; (data cell) and
        &lt;th&gt; (header cell) elements.
      </p>
      <h2 className="ml-25 mb-25">&lt;th&gt;: The Table Header element</h2>
      <p className="ml-25 mb-25">
        The &lt;th&gt; HTML element defines a cell as header of a group of table
        cells. The exact nature of this group is defined by the scope and
        headers attributes.
      </p>
      <h2 className="ml-25 mb-25">&lt;td&gt;: The Table Data Cell element</h2>
      <p className="ml-25 mb-25">
        The &lt;td&gt; HTML element defines a cell of a table that contains
        data. It participates in the table model.
      </p>

      <img
        src={TableIMG}
        alt="Represent a table structur html"
        className="ml-25 mb-25"
      />
    </article>
  );
}

export default ArticleARRAY;
