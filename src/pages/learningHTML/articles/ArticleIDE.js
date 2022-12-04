// styles scss
import IDE from "../../../components/IDE/IDE";
import Styles from "../LearningHtml.module.scss";

function ArticleIDE() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h1>IDE</h1>
      <section>
        <p
          style={{
            letterSpacing: "1.8px",
            margin: "0 auto",
            width: "75%",
          }}
        >
          Un IDE est en environement de développement, il permet d'écrire du
          code très simplement tout en bénéficiant d'une multitudes
          d'utilitaires (plugins) afin d'améliorer son potentiel. Voici une
          liste des éditeurs de code les plus connue.
          <br /> <br /> Libre à vous de choisir celui avec lequel vous vous
          sentirez le plus à l'aise.
        </p>
      </section>
      <section className={Styles.LearningHtml__article__ide}>
        <IDE
          name="Atom"
          url="https://martin-bozon.students-laplateforme.io/projets/ide/image/logoatom.png"
        />
        <IDE
          name="Brackets"
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brackets_Icon.svg/800px-Brackets_Icon.svg.png"
        />
        <IDE
          name="Sublime Text"
          url="https://upload.wikimedia.org/wikipedia/fr/7/78/Sublime_text_logo.png"
        />
        <IDE
          name="JeBrains"
          url="https://www.jetbrains.com/company/brand/img/jetbrains_logo.png"
        />
        <IDE
          name="Visual Studio Code"
          url="https://code.visualstudio.com/assets/apple-touch-icon.png"
        />
      </section>
    </article>
  );
}

export default ArticleIDE;
