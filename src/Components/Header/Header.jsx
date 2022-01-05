import './Header.css'


function Header (){
    return(
        <header className='header container'>
            <h1 className='header-title'>Yuxin</h1>
            <ul className='header-link'>
                <li className='header-items'>
                    <a href="#" className='header-href'>Inicio</a>
                </li>
                <li>
                    <a href="#" className='header-href'>Acerca de mi </a>
                </li>
                <li>
                    <a href="#" className='header-href'>Proyectos</a>
                </li>
            </ul>
            <button className='header-button' type="submit">Contáctame</button>

           
        </header>
    )
}

export {Header}