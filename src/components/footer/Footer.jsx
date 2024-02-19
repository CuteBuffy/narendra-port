export default function Footer() {
  return (
    <>
      <footer>
        <div className="container footer__container">
          <div className="footer_wrapper">
            <div className="footer__left">
              <img src="./public/icons/Group.png" alt="" />
              <div className="footer__left-text">
                <p>Narendra Ram</p>
                <p>Freelance Full Stack Designer</p>
              </div>
            </div>
            <div className="footer__right">
              <p>Designed using Figma</p>
              <p>
                Hosted on{" "}
                <a
                  className="footer__github-link"
                  href="https://pages.github.com/"
                >
                  GitHub Pages
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
