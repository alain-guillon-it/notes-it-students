// dependencies
import { Link } from "react-router-dom";

// styles scss
import Styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <main className={Styles.HomePage}>
      <div className={Styles.Card}>
        <div className="card__header">
          <h1>Memory For IT-Students</h1>
        </div>
        <div className="card__body">
          <h2 title="Pourquoi ?">Why ?</h2>
          <p title="Cette page existe parce que j'apprends plusieurs langages pour devenir un futur développeur fullstack. Ce site peut être utilisé par mes camarades de classe. Ce mémoire n'a pas été écrit par IT-AKADEMY mais il est très utile pour nous.">
            This page exists because{" "}
            <strong>I'm learning several languages</strong> to become a future{" "}
            <strong>fullstack developer</strong>. This site{" "}
            <strong>can be used by my fellow students</strong>. This memory was
            not written by <strong>IT-AKADEMY</strong> but it's very useful for
            us.
          </p>
          <h2 title="Pour qui ?">For whom ?</h2>
          <p title="Dans un premier temps pour moi... Mais mes collègues étudiants peuvent très bien l'utilisé, c'est vraiment important.">
            At first for me... But my fellow students can use it very well, it's
            really important.
          </p>
          <h2 title="n'oublie jamais">Never forget</h2>
          <p>
            <ol>
              <li title="N'ai pas honte de demander de l'aide.">
                Don't be ashamed to ask for help!
              </li>
              <li title="N'ai pas peur de dire que tu ne comprends pas.">
                Don't be afraid to say you don't understand.
              </li>
              <li title="Sache qu'une notion existe et apprends à retrouver cette notion par toi même.">
                Don't try to learn everything by heart, know that a concept
                exists and learn to find it yourself.
              </li>
            </ol>
          </p>
        </div>
        <div className={Styles.Card__footer}>
          <Link to="/learning">Go to learn</Link>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
