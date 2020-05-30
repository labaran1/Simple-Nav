import React from "react";
import { Link } from "@reach/router";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          Get Started
          <Link to="/getstarted" className="Link">
            {" "}
          </Link>
        </li>
        <li>
          Product
          <ul>
            <li className="me">
              <Link to="/webdev" className="Link">
                {" "}
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/mobiledev" className="Link">
                {" "}
                Mobile Development
              </Link>
            </li>
            <li>
              <Link to="/datascience" className="Link">
                {" "}
                Data Science
              </Link>
            </li>
          </ul>
        </li>
        <li>
          Pricing
          <Link to="/pricing" className="Link">
            {" "}
          </Link>
        </li>
        <li className="integration">
          Integration
          <ul>
            <li>
              Trello <i class="fab fa-trello"></i>
            </li>
            <li>
              Youtube <i class="fab fa-youtube"></i>
            </li>
            <li>
              Twitter <i class="fab fa-twitter"></i>
            </li>
            <li>
              Facebook <i class="fab fa-facebook"></i>
            </li>
            <li>
              Youtube <i class="fab fa-youtube"></i>
            </li>
            <li>
              LinkedIn <i class="fab fa-linkedin"></i>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
