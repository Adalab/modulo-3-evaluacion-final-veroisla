import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Footer.scss';

function Footer(params) {
  return (
    <>
      <footer className="footer">
        {' '}
        <p className="footer__coded">
          Coded and designed by <em>Vero Isla </em>
        </p>
        <p>
          You can find me on:{' '}
          <a
            href="https://github.com/veroisla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="footer__icon fab fa-github"></i>
          </a>{' '}
          <a
            href="https://www.linkedin.com/in/veronica-isla-garc%C3%ADa-de-leaniz-585b52171/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <i className="fab fa-linkedin-in footer__icon"></i>
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
