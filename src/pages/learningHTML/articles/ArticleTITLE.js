// styles scss
import Styles from "../LearningHtml.module.scss";

// images
import TitleIMG from "../../../assets/images/img_html/title.jpg";

function ArticleTITLE() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h1>Title</h1>
      <p className="ml-25 mb-25">
        The &lt;h1&gt; to &lt;h6&gt; HTML elements represent six levels of
        section headings. &lt;h1&gt; is the highest section level and &lt;h6&gt;
        is the lowest.
      </p>
      <img src={TitleIMG} alt="Represent a lvl heading" className="ml-25"/>
    </article>
  );
}

export default ArticleTITLE;
