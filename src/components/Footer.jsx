import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-dark fixed-bottom text-center py-3 mt-auto" style={{backgroundColor:" #e3f2fd"}}>
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} My Store. All rights reserved.</p>
        <p className="mb-0">
          <Link to="/privacy" className="text-decoration-none text-dark-50 mx-2">
            Privacy Policy
          </Link>
          |
          <Link to="/terms" className="text-decoration-none text-dark-50 mx-2">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
