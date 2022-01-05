import "./footer.css"

function Footer () {
  return(
    <footer className='footer container'>
      <div className="foote__div">
        <h1 className='footer-title'>Yuxin</h1>
        <ul className='footer-link'>
          <li className='footer-items'>
            <p className='footer-text'>Inicio</p>
            <a href="#" className='footer-href'>Acerca de mi</a>
            <a href="#" className='footer-href'>Proyectos</a>
          </li>
          <li className='footer-items'>
            <p className='footer-text'>Contáctame</p>
            <a href="#" className='footer-href'>Correo</a>
            <a href="#" className='footer-href'>LinkedIn</a>
          </li>
          <li className='footer-items'>
           <p className='footer-text'>Social</p>
          </li>
        </ul>
        <span className="footer__span">© 2021 Yuxin</span>
      </div>
    </footer>
  )
}

export {Footer}