import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaCanadianMapleLeaf,
  FaCaretDown,
} from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!toggle);

  const active = useRouter();

  return (
    <> 
      <nav>
        <div className={toggle ? "navbar expand" : "navbar"}>
          <h1 className="nav-logo">Anime.</h1>
          <ul className="navbar-item">
            <li>
              <Link
                href="/"
                className={active.pathname == "/" ? "active" : ""}
                onClick={toggleMenu}
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <div className="dropdown">
                <span>
                  Top Anime
                  <FaCaretDown className="down" />
                </span>
                <div className="dropdown-content">
                  <div className="grid">
                    <a href="https://myanimelist.net/anime/21/One_Piece" target="_blank" onClick={toggleMenu}>
                      <FaCanadianMapleLeaf className="leaf" />
                      <span>One Piece</span>
                    </a>

                    <a href="https://myanimelist.net/anime/20/Naruto" target="_blank" onClick={toggleMenu}>
                      <FaCanadianMapleLeaf className="leaf" />
                      <span>Naruto</span>
                    </a>

                    <Link href="https://myanimelist.net/anime/269/Bleach" target="_blank" onClick={toggleMenu}>
                      <FaCanadianMapleLeaf className="leaf" />
                      <span>Bleach</span>
                    </Link>

                    <a href="https://myanimelist.net/anime/2471/Doraemon_1979" target="_blank" onClick={toggleMenu}>
                      <FaCanadianMapleLeaf className="leaf" />
                      <span>Doraemon</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/SignIn"
                className={active.pathname == "/SignIn" ? "active" : ""}
                onClick={toggleMenu}
              >
                <span>Sign In</span>
              </Link>
            </li>

            <li>
              <Link
                href="/Signup"
                className={active.pathname == "/Signup" ? "active" : ""}
                onClick={toggleMenu}
              >
                <span>Sign Up</span>
              </Link>
            </li>
          </ul>
          <div className="menu-icon" onClick={toggleMenu}>
            {toggle ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

    </>
  );
}
