// dependencies
import { Link } from "react-router-dom";

// styles scss
import Styles from "./CardLanguage.module.scss";

function CardLanguage({ name, url }) {
  return (
    <div className={Styles.CardLanguage}>
      <div className="card__body">
        <img src={url} alt={`Represent the ${name} language`} />
      </div>
      <div className="card__footer">
        <Link to={`${name}`}>
          Show {name} <i class="fa fa-solid fa-eye"></i>
        </Link>
      </div>
    </div>
  );
}

export default CardLanguage;
