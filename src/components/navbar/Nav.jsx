import react from 'react'

export default function Nav() {

  const [open, setOpen] = react.useState(false);

  const handleClick = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="container navbar__container">
          <div className="navbar-left">
            <a className="logo" href="">
              <img src="./public/icons/group.png" alt="" />
            </a>
          </div>
          <div className="navbar-left">
            <ul className="links-container">
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <a onClick={handleClick} className="navbar__burger-menu" href="#">
            <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 18L20 18"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4 12L20 12"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4 6L20 6"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
            </svg>
          </a>
        </div>
        <div className={open ? "navbar__mobile-menu" : "hidden"}>
        <ul className="navbar__mobile-links">
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
            </ul>
        </div>
      </nav>
    </>
  );
}
