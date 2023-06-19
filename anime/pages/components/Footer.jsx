import Link from "next/link";
// import {  } from "react-icons/fa";
import {
  FaGithub,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLowVision,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col">
              <h4>Anime</h4>
              <ul>
                <li>
                  <Link href="/">1.Anime</Link>
                </li>
                <li>
                  <Link href="/">2.Anime</Link>
                </li>
                <li>
                  <Link href="/">3.Anime</Link>
                </li>
                <li>
                  <Link href="/">4.Anime</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Anime</h4>
              <ul>
                <li>
                  <Link href="/">1.Anime</Link>
                </li>
                <li>
                  <Link href="/">2.Anime</Link>
                </li>
                <li>
                  <Link href="/">3.Anime</Link>
                </li>
                <li>
                  <Link href="/">4.Anime</Link>
                </li>
                <li>
                  <Link href="/">5.Anime</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Anime</h4>
              <ul>
                <li>
                  <Link href="/">1.Anime</Link>
                </li>
                <li>
                  <Link href="/">2.Anime</Link>
                </li>
                <li>
                  <Link href="/">3.Anime</Link>
                </li>
                <li>
                  <Link href="/">4.Anime</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Social Media</h4>
              <div className="social-links">
             
              <Link href="https:www.facebook.com" target="_blank">
              <FaFacebookSquare className="social-icon" />
            </Link>
            <Link href="https:www.instagram.com" target="_blank">
              <FaInstagram className="social-icon" />
            </Link>
            <Link href="https:www.twitter.com" target="_blank">
              <FaTwitter className="social-icon" />
            </Link>
            <Link href="https:www.github.com" target="_blank">
              <FaGithub className="social-icon" />
            </Link>
                
              </div>
            </div>
          </div>
        </div>
    <div className="footer-bottom">All Right &copy; 2023</div> 

        {/* <div className="footer-left">
          <FaLowVision className="footer-logo" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sit
            ab nobis. Dignissimos corrupti aliquam pariatur quia consequatur.
          </p>
          <div className="socials">
            <Link href="https:www.facebook.com" target="_blank">
              <FaFacebookSquare className="social-icon" />
            </Link>
            <Link href="https:www.instagram.com" target="_blank">
              <FaInstagram className="social-icon" />
            </Link>
            <Link href="https:www.twitter.com" target="_blank">
              <FaTwitter className="social-icon" />
            </Link>
            <Link href="https:www.github.com" target="_blank">
              <FaGithub className="social-icon" />
            </Link>
          </div>
        </div>
        <ul className="footer-right">
            <li>
                <h2>Anime</h2>

                <ul className="box">
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
            </li>
            <li className="features">
                <h2>Anime2</h2>

                <ul className="box">
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
            </li>
            <li>
                <h2>Anime3</h2>

                <ul className="box">
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
            </li>
        </ul>
        <div className="footer-bottom">All Right &copy; 2023</div> */}
      </footer>
    </>
  );
}
