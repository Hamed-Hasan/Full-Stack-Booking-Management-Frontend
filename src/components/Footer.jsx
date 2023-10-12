import Link from "next/link";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Rental
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <Link href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; (123) -456-789
                </Link>
              </li>

              <li>
                <Link
                  href="mailto: 
                carrental@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; calebjephuneh@gmail.com
                </Link>
              </li>

              <li>
                <Link
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://jephunneh.com/"
                >
                  Design by cjephuneh
                </Link>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <Link href="#home">New York</Link>
              </li>
              <li>
                <Link href="#home">Careers</Link>
              </li>
              <li>
                <Link href="#home">Mobile</Link>
              </li>
              <li>
                <Link href="#home">Blog</Link>
              </li>
              <li>
                <Link href="#home">How we work</Link>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
