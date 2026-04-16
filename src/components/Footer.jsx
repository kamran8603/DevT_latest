// import React from 'react'

// function Footer() {
//   return (
//     <div>
//         <footer className="footer bg-base-200 sm:footer-horizontal  text-neutral-content items-center p-4 fixed bottom-0">
//   <aside className="grid-flow-col items-center">
//     <svg
//       width="36"
//       height="36"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//       fillRule="evenodd"
//       clipRule="evenodd"
//       className="fill-current">
//       <path
//         d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
//     </svg>
//     <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
//   </aside>
//   <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
//     <a>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         className="fill-current">
//         <path
//           d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//       </svg>
//     </a>
//     <a>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         className="fill-current">
//         <path
//           d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//       </svg>
//     </a>
//     <a>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         className="fill-current">
//         <path
//           d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//       </svg>
//     </a>
//   </nav>
// </footer>
//     </div>
//   )
// }

// export default Footer

import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          
          {/* Left Section - Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <div className="flex items-center space-x-2">
              {/* Animated Heart Icon */}
              <div className="relative">
                <svg 
                  className="w-8 h-8 text-red-500 animate-pulse" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <div className="absolute inset-0 animate-ping opacity-75">
                  <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                CodeSwipe
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              Made with ❤️ for developers
            </p>
            <p className="text-gray-500 text-xs">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-300 mb-2">Product</h3>
              <ul className="space-y-1">
                <li><Link to="/feautures" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">Features</Link></li>
                <li><Link to="/howItWorks" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">How it Works</Link></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">Pricing</Link></li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-300 mb-2">Company</h3>
              <ul className="space-y-1">
                <li><Link to="/aboutUs" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">About Us</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">Contact</Link></li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-300 mb-2">Legal</h3>
              <ul className="space-y-1">
                <li><Link to="/privacy" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link to="/termsServices" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">Terms of Service</Link></li>
                <li><Link to="/cookiePrivacy" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex flex-col items-center space-y-3">
            <h3 className="text-sm font-semibold text-gray-300">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Twitter */}
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                  </path>
                </svg>
              </a>
              
              {/* YouTube */}
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-400 hover:text-red-600 transition-colors"
                >
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z">
                  </path>
                </svg>
              </a>
              
              {/* Facebook */}
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
                  </path>
                </svg>
              </a>
              
              {/* GitHub */}
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-400 hover:text-white transition-colors"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
                  </path>
                </svg>
              </a>
            </div>
            
            {/* Newsletter */}
            <div className="mt-2 text-center">
              <p className="text-gray-500 text-xs mb-1">Subscribe to our newsletter</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 text-white text-xs px-3 py-1 rounded-l-md focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-r-md hover:from-red-600 hover:to-pink-600 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
            <p className="text-gray-500 text-xs">
              🚀 Connecting developers worldwide | Find your perfect coding partner
            </p>
            <div className="flex space-x-4 text-gray-500 text-xs">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer