import {Fragment} from "react"
import './App.css';
import {Header} from "./Components/Header/Header"
import {Main} from "./Components/Main/Main"
import {Footer} from "./Components/footer/footer";
import CircleBg from "./assets/img/banner.png"
import ImagesHeader from "./assets/img/personal.png"
import ImageIcon from "./assets/img/mobile.png"
import ImagesPhone from "./assets/img/user.png"
import ImagesTemplate from "./assets/img/template.png"
import ImagesDog from "./assets/img/dog.png"
import ImagesTemplateTemplate from "./assets/img/phone.png"
import ImagesMoves from "./assets/img/movies.png"

function App() {

  // const userName = ""
  const userText = "Este es mi portafolio y CV hecho en Figma, acá puedes ver mi estilo de prototipado a la hora de diseñar interfaces. Espero te guste!"
  const buttonSumit = "Ver proyectos"
  const buttonClick = "Descargar CV"

  return (
    <Fragment>
      <Header/>
        <img className="header__img" src={CircleBg} style={{width: "1500px"}} />
        <div className="container">
          <h1 className="haeder__title ">Soy <span className="header__title_span">Yusting Mora</span> Diseñador UI/UX</h1>
          <p className="header__text">{userText}</p>
          <button className="header__button">{buttonSumit}</button>
          <button className="header__click">{buttonClick}</button>
        </div>
      
      <Main/>
        <div className="header__header-div container">
          <img className="header__header-img" src={ImagesHeader} style={{width: "326px"}}/>
          <div className="main__div">
            <h3 className="main__title">Acerca de mi</h3>
            <p className="main__text">Hola! mi nombre es Yusting (Yuxin para los amigos) y tengo una gran afinidad hacía el trabajo colaborativo, me gusta crear diseños que inspiren e involucren a las personas. Como diseñador UI, considero que un buen producto no solo brinda una solución sino que permite crear una experiencia emocional en las personas que lo usan. En mi proceso creativo utilizo herramientas como Figma, Adobe XD, Photoshop e Illustrator que me ayudan en el flujo de trabajo para la producción de interfaces de usuario.</p>
            <button className="header__click">Mas acerca de mi</button>
          </div>
        </div>
        <div className="main__div-div">
          <h2 className="main__title-title">Mas acerca de mi</h2>
        </div>

        <div className="main__section_div container">
          <div className="main__section">
            <img className="main__section-img" src={ImageIcon}/>
            <h4 className="main__section-title">Responsive design</h4>
            <p className="main__section-text">Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca de como implementarlos de manera efectiva en cualquier proyecto.</p>
          </div>
          <div className="main__section">
            <img className="main__section-img" src={ImagesTemplate}/>
            <h4 className="main__section-title">Sistema de diseño</h4>
            <p className="main__section-text">Tengo manejo de sistemas de diseño, lo cual permite agilidad en el proceso de diseño acortando los tiempos en la creación de las interfaces dentro del proyecto.</p>
          </div>
          <div className="main__section">
            <img className="main__section-img" src={ImagesPhone}/>
            <h4 className="main__section-title">Cooworking</h4>
            <p className="main__section-text">Trato de ser un activo valioso en el equipo que esté trabajando, aportando mis conocimientos y material que optimice el flujo de trabajo en el desarrollo del proyecto.</p>
          </div>
        </div>
        
        <div className="container">
          <button className="main__button">Ver más de mis skills</button>
          <>
          <h3 className="main__title-title">Algunos de mis proyectos</h3>
          </>
        </div>

        <div className="main__container container">
          <div className="main__container-div">
            <img src={ImagesDog}/>
          </div>
          <div className="main__container-div">
            <img src={ImagesTemplateTemplate}/> 
          </div>
          <div className="main__container-div">
            <img src={ImagesMoves}/>  
          </div>
        </div>

        <div className="container">
          <button className="main__button">Ver más en Behance</button>
        </div>

        <Footer/>
        <footer className="container">
          <div className="footer__div">
            
          </div>
        </footer>
    
    </Fragment>
  );
}

export default App;
