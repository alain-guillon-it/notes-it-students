// styles scss
import Styles from "../LearningHtml.module.scss";

// images
import StructureIMG from "../../../assets/images/img_html/structure.jpg";

function ArticleSTRUCTURE() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h1>Structure</h1>
      <p className="mx-25 mb-25" title="En programmation, la sémantique fait référence au sens d'une partie de code — par exemple quel effet aura l'exécution de cette ligne de JavaScript ?, ou quel est le rôle ou le but de cet élément HTML (plutôt que à quoi ressemble-t-il ?.)">
        In programming, Semantics refers to the meaning of a piece of code — for
        example "what effect does running that line of JavaScript have?", or
        "what purpose or role does that HTML element have" (rather than "what
        does it look like?".)
      </p>
      <h3 className="ml-25">It's a basic structure of code html</h3>
      <img
        src={StructureIMG}
        alt="A structure of webpage write in html"
        className="mt-25 ml-25"
      />
    </article>
  );
}

export default ArticleSTRUCTURE;
