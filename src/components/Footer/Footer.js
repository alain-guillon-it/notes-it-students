// styles scss
import Styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={Styles.Footer}>
      <span>Copyright &copy; 2022-2023</span>
      <span>By Alain Guillon</span>
    </footer>
  );
}

export default Footer;
