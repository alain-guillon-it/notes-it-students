// dependencies
import { NavLink } from "react-router-dom";

// styles scss
import Styles from "./Header.module.scss";

function Header() {
  return (
    <header className={Styles.Header}>
      <section>
        <img
          src="https://pbs.twimg.com/profile_images/1483831832454090756/ESRnU6Nr_400x400.jpg"
          alt="Logo it-akademy"
          width={400}
          height={400}
        />
        <span>Site non officiel</span>
      </section>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <i class="fas fa-duotone fa-house"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/learning">
              <i class="fas fa-duotone fa-graduation-cap"></i> Learning
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <i class="fa fa-duotone fa-user-graduate"></i> About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
