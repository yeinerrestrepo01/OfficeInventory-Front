import React from 'react'

const NavBar = () => {
  return (
    <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><h2 className="px-1 text-white">MaisonSoft Biblioteca</h2></li>
        </ul>
      </div>
    </div>
  </header>
  )
}

export default NavBar