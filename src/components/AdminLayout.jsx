import React, { useState } from "react";
import { signOut } from '@aws-amplify/auth';

// import "tailwindcss/tailwind.css"; // Make sure you have TailwindCSS set up in your React project

export default function AdminLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 font-family-karla flex">
      {/* Sidebar */}
      <aside className="relative bg-black h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
          <a href="/index" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">
            Admin
          </a>
          <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
            <i className="fas fa-plus mr-3"></i> Send Report
          </button>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
          <a href="/index" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-tachometer-alt mr-3"></i>
            Dashboard
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
        {/* Desktop Header */}
        <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
          <div className="w-1/2"></div>
          <div className="relative w-1/2 flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
            >
              <img src="data:image/jpeg;base64,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" alt="Profile" />
            </button>
            {isOpen && (
              <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                <button onClick={signOut} className="block px-4 py-2 account-link hover:text-grey">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Mobile Header & Nav */}
        <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
          <div className="flex items-center justify-between">
            <a href="/index" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">
              Admin
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl focus:outline-none">
              <i className={!isOpen ? "fas fa-bars" : "fas fa-times"}></i>
            </button>
          </div>

          {/* Dropdown Nav */}
          {isOpen && (
            <nav className="flex flex-col pt-4">
              <a href="/index" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                <i className="fas fa-tachometer-alt mr-3"></i>
                Dashboard
              </a>
            </nav>
          )}
        </header>

        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            {/* <h1 className="w-full text-3xl text-black pb-6">Forms</h1> */}

            <div className="flex flex-wrap">

              {/* Checkout Form */}
              <div className="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
                {/* <p className="text-xl pb-6 flex items-center">
                  <i className="fas fa-list mr-3"></i> Add Music
                </p> */}
                <div className="leading-loose">
                  <form className="p-10 bg-white rounded shadow-xl">
                    <p className="text-lg text-gray-800 font-medium pb-4">Add Song</p>
                    <div>
                      <label className="block text-sm text-gray-600" htmlFor="cus_name">
                        Album Name
                      </label>
                      <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                        id="cus_name"
                        name="cus_name"
                        type="text"
                        required
                        placeholder="Your Name"
                        aria-label="Name"
                      />
                    </div>
                    <div className="mt-2">
                      <label className="block text-sm text-gray-600" htmlFor="cus_email">
                        Album Year
                      </label>
                      <input
                        className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                        id="cus_email"
                        name="cus_email"
                        type="text"
                        required
                        placeholder="Your Email"
                        aria-label="Email"
                      />
                    </div>
                    <div className="mt-2">
                      <label className="block text-sm text-gray-600" htmlFor="cus_address">
                        Artist
                      </label>
                      <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        id="cus_address"
                        name="cus_address"
                        type="text"
                        required
                        placeholder="Street"
                        aria-label="Address"
                      />
                    </div>
                    <div className="mt-2">
                      <label className="block text-sm text-gray-600" htmlFor="cus_city">
                        Genre
                      </label>
                      <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        id="cus_city"
                        name="cus_city"
                        type="text"
                        required
                        placeholder="City"
                        aria-label="City"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600" htmlFor="cus_card">
                        Song
                      </label>
                      <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        id="cus_card"
                        name="cus_card"
                        type="file"
                        required
                        placeholder="Card Number MM/YY CVC"
                        aria-label="Card"
                      />
                    </div>
                    <div className="mt-6">
                      <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>

          <footer className="w-full bg-white text-right p-4">

          </footer>
        </div>
      </div>
    </div>
  );
}
