/* eslint-disable react/prop-types */
import { useState } from "react";

const GNavBar = ({ club, color, hcolor }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-between py-4 px-10 text-white">
      <a href="/">
        <img
          src="/images/IConclave.png"
          className="lg:h-32 h-20 -px-4 -mx-4 invert"
          alt="Iconclavebg"
        />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden mb-3 ">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <a href="#about">
                <li
                  className={`hover:text-${hcolor} border-b-2 border-transparent hover:border-b-2 hover:border-${hcolor} `}
                  onClick={() => setIsNavOpen(false)}
                >
                  ABOUT
                </li>
              </a>
              <a href="#club">
                <li
                  onClick={() => setIsNavOpen(false)}
                  className={`hover:text-${hcolor} border-b-2 border-transparent hover:border-b-2 hover:border-${hcolor} `}
                >
                  {club}
                </li>
              </a>
              <a href="#guidelines">
                <li
                  onClick={() => setIsNavOpen(false)}
                  className={`hover:text-${hcolor} border-b-2 border-transparent hover:border-b-2 hover:border-${hcolor} `}
                >
                  GUIDELINE
                </li>
              </a>
              <li
                onClick={() => setIsNavOpen(false)}
                className={`hover:text-${hcolor} border-b-2 border-transparent hover:border-b-2 hover:border-${hcolor} `}
              >
                GET IN TOUCH
              </li>
              <a href="#">
                <li
                  onClick={() => setIsNavOpen(false)}
                  className={`hover:text-${hcolor} invert font-veterantypewriter text-l border-b-2 border-transparent hover:border-b-2 hover:border-${hcolor} `}
                >
                  COGNITION
                </li>
              </a>
            </ul>
          </div>
        </section>
        <div className="DESKTOP-MENU hidden lg:flex justify-between ">
          <nav className="flex justify-between h-16 items-center">
            {/* <ul>     </ul> */}
            <a href="/">
              <img src="" className="h-24 invert justify-between" alt="" />
            </a>
            <ul className={`p-20 flex gap-24 text-${color} font-miso text-3xl`}>
              <a href="#about">
                <li
                  className={`hover:text-${hcolor} border-b-2 border-transparent hover:border-b-2 hover:border-${hcolor} `}
                >
                  ABOUT
                </li>
              </a>
              <a href="#club">
                <li
                  className={`hover:text-${hcolor} border-b-2 border-transparent hover:border-b-2 hover:border-${hcolor} `}
                >
                  {club}
                </li>
              </a>
              <a href="#guidelines">
                <li
                  className={`hover:text-${hcolor} border-b-2 border-transparent hover:border-b-2 hover:border-${hcolor} `}
                >
                  GUIDELINE
                </li>
              </a>
              <li
                className={`hover:text-${hcolor} border-b-2 border-transparent hover:border-b-2 hover:border-${hcolor} `}
              >
                GET IN TOUCH
              </li>
            </ul>
            <ul>
              <a href="#">
                <li
                  className={`hover:text-${hcolor} invert font-veterantypewriter text-2xl border-b-2 border-transparent hover:border-b-2 hover:border-${hcolor} `}
                >
                  COGNITION
                </li>
              </a>
            </ul>
          </nav>
        </div>
      </nav>
      <style>{`
  .hideMenuNav {
    display: none;
  }
  .showMenuNav {
    display: block;
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: black;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`}</style>
    </div>
  );
};

export default GNavBar;
