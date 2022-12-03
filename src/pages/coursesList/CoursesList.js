// styles scss
import CardLanguage from "../../components/CardLanguage/CardLanguage";
import Styles from "./CoursesList.module.scss";

// import images
import imgHTML from "../../assets/images/img_html/html.jpg";
import imgCSS from "../../assets/images/img_css/css.jpg";
import imgJS from "../../assets/images/img_js/js.jpeg";
import imgPHP from "../../assets/images/img_php/php.jpg";

function CoursesList() {
  return (
    <main className={Styles.CoursesList}>
      <h1>Courses</h1>
      <section>
        <CardLanguage name="HTML" url={imgHTML} />
        <CardLanguage name="CSS" url={imgCSS} />
        <CardLanguage name="JS" url={imgJS} />
        <CardLanguage name="PHP" url={imgPHP} />
      </section>
    </main>
  );
}

export default CoursesList;
