// image
import LogoHTML from "../../assets/images/img_html/HTML5_logo_and_wordmark.svg.png";

// styles scss
import Styles from "./LearningHtml.module.scss";

function HomeHTML() {
  return (
    <article className={Styles.LearningHtml__article}>
      <h1>Bienvenue</h1>
      <section
        style={{
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            marginBottom: "100px",
            width: "70%",
          }}
        >
          HTML est le code utilisé pour structurer
          une page web et son contenu. Par exemple, le contenu de votre page
          pourra être structuré en un ensemble de paragraphes, une liste à puces
          ou avec des images et des tableaux de données. Comme le suggère le
          titre, cet article vous fournit les bases de compréhension du HTML et
          de ses fonctions.
        </p>
        <img src={LogoHTML} alt="Logo HTML" style={{
          width: "250px",
          filter: "drop-shadow(0 0 2.5px var(--black-intense))"
        }}/>
      </section>
    </article>
  );
}

export default HomeHTML;
