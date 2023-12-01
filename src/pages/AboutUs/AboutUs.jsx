import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <main className="container">

      <section className="container__info">
        <h2>About Us</h2>
        <h4>Hola!</h4>
        <img src="../../assets/images/matias.png" alt="imagen contacto" />
        <p>
          Me llamo Matías Alves, soy estudiante de la carrera FullStack web
          Developer en IBEC. Este es un proyecto de ecommerce en el cual se
          utilizan las siguientes tecnologias: ReactJs, JavaScript, CSS,
          BootStrap y se da integracion con FireStore y Firebase, para el
          almacenamiento y Hosting.
        </p>
      </section>

      <section className="container__gratitude">
        <h4>Agradecimientos</h4>
        <p>
          Agradezco el apollo de profesores y compañeros de clase que con el
          aporte de todos y la guia en especial al profesor Josue Oroya que nos
          animo a realizar este como primer proyecto el cual es el comienzo para
          mi en el desarrollo web.
        </p>
      </section>

      <section className="container__mission">
        <p>
          <h4>Mision</h4>
          Este proyecto se va a ir actualizando y mejorando los estilos y
          funcionalidades, lo principal de este proyecto es que sea escalable y
          se pueda precibir los cambios que se vayan realizando.
        </p>
      </section>

      <section className="container__contact">
        <h4>Contacto</h4>
        <a href="http://">LinkedIn</a>
        <a href="mailto:matyalves@gmail.com">email</a>
      </section>

    </main>
  );
};
