import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-6 py-12 md:py-16 lg:py-20">
        {/* Top Section */}
        <div className="footer">
          {/* Logo + Socials */}
          <div className="logo">
            <h3>Business Logo</h3>
            <div className="flex space-x-6 mt-28px">
              <a href="#" className="text-blk-forest-light">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-blk-forest-light">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-blk-forest-light">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-blk-forest-light">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div className="Services">
            <p className="text-blk-forest mb-24">Our Services</p>
            <ul className="space-y-3 text-base text-gray-800">
              <li>
                <a href="#" className="text-blk-forest-light">
                  Plumbing
                </a>
              </li>
              <li>
                <a href="#" className="text-blk-forest-light">
                  Drainage
                </a>
              </li>
              <li>
                <a href="#" className="text-blk-forest-light">
                  Bathrooms
                </a>
              </li>
              <li>
                <a href="#" className="text-blk-forest-light">
                  Commercial
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="Useful-links">
            <p className="text-blk-forest mb-24">Useful Links</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-base text-gray-800">
              <li>
                <a href="#" className="text-blk-forest-light">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-blk-forest-light">
                  Customer
                </a>
              </li>
              <li>
                <a href="#" className="text-blk-forest-light">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" className="text-blk-forest-light">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="text-blk-forest-light">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-blk-forest-light">
                  Rates
                </a>
              </li>
              <li className="col-span-2">
                <a href="#" className="text-blk-forest-light">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="Contact-info">
            <p className="text-blk-forest mb-24">Contact Info</p>
            <ul className="space-y-4 text-base">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blk-forest" />
                <span className="text-blk-forest">
                  1 Sail Street, London, SE11 6NQ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blk-forest" />
                <span className="text-blk-forest">
                  enquiries@PlumbingPros.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-blk-forest" />
                <span className="text-blk-forest">020 4527 6474</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm md:text-base text-gray-500 pt-80">
          <p>© Plumbing Pros. All Rights Reserved</p>
          <p>Website by IH Adventure And Creative</p>
        </div>
      </div>
    </footer>
  );
}
