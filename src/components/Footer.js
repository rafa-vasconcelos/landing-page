const Footer = () => {
  return (
    <footer id="contato">
      <div className="d-flex justify-content-center">
        <h2>Entre em contato!</h2>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/rafa-vasconcelos"
        >
          <i class="fa-brands fa-github"></i>{" "}
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/rafael-lima-vasconcelos/"
        >
          <i class="fa-brands fa-linkedin"></i>{" "}
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="mailto:rafaelvasconcelos13@gmail.com"
        >
          <i class="fa-regular fa-envelope"></i>{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
