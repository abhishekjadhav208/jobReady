import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#83A0FC] text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">JobPortal</h2>
          <p className="text-sm text-white">
            Find your dream job and explore top companies.
            We connect talented people with great opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/companies" className="hover:text-white">Companies</Link></li>
            <li><Link to="/career" className="hover:text-white">Career Resources</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white">Help Center</a></li>
            <li><a className="hover:text-white">Privacy Policy</a></li>
            <li><a className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm">Email: support@jobportal.com</p>
          <p className="text-sm">Phone: +91 80101 34665</p>
          <p className="text-sm">Ahilyadevi Nagar, India</p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-white">
        © 2026 JobPortal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;