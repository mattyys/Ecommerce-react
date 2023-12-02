import "./AboutUs.css";
import { TfiLinkedin } from "react-icons/tfi";
import { MdAlternateEmail } from "react-icons/md";

export const AboutUs = () => {
  return (
    <main className="container">

        <h2>Quiénes somos?</h2>
      <section className="container__info card ">
            <img
              className="card-img-top" 
              src="https://miro.medium.com/v2/resize:fit:1024/1*vxjAHkrXbGG6gOiPZgjeZA.jpeg" />
       
        <div className="card-body">

          <h4 className="card-title">Hola!</h4>
          <p className="card-text">
            Me llamo Matías Alves, soy estudiante de la carrera FullStack web
            Developer en IBEC. Este es un proyecto de ecommerce en el cual se
            utilizan las siguientes tecnologias: ReactJs, JavaScript, CSS,
            BootStrap y se da integracion con FireStore para el
            almacenamiento y Hosting en Vercel.
          </p>
        </div>
        
      </section>

      <section className="container__gratitude card my-3 p-2">
        <h4 className="card-title">Agradecimientos</h4>
        <p className="card-text">
          Agradezco el apoyo de profesores y compañeros de clase que con el
          aporte de todos y la guia en especial al profesor Josue Oroya que nos
          animo a realizar este tipo de proyecto. Para mi es el comienzo
          en el desarrollo web.
        </p>
      </section>

      <section className="container__mission card my-3 p-2">
        <h4 className="card-title">Mision</h4>
        <p className="card-text">
          Este proyecto se va a ir actualizando y mejorando los estilos y
          funcionalidades, lo principal de este proyecto es que sea escalable y
          se pueda precibir los cambios que se vayan realizando.
        </p>
      </section>

      <section className="card-contact card " >
        <div className="card-body">

          <h4 className="card-title" >Contacto</h4>
            <div className="input-group mb-3">
              <div className="input-group-text">
                <TfiLinkedin />
              </div>
              <a
                className="form-control" 
                href="https://www.linkedin.com/in/mat%C3%ADas-alves-0461aa255/"
              >LinkedIn</a>
            </div>

            <div className="input-group mb-3">
              <div className="input-group-text">
                  <MdAlternateEmail />
              </div>
              <a
                className="form-control" 
                href="mailto:matyalves@gmail.com"
              >Email</a>
            </div>
          </div>
      </section>

    </main>
  );
};
