import './Banner.css';
// https://img.freepik.com/foto-gratis/vista-frontal-carrito-compras-cyber-monday-bolsas-espacio-copia_23-2148657638.jpg?w=826&t=st=1696536776~exp=1696537376~hmac=2c3f9a9f4c7f2ca44c96ea7f6d910827e3bae8a19f90b4930d6abe9f1511c642
export const Banner = () => {
  return (
    <section className="banner">
      <img
        src="https://proxy.olhardigital.com.br/wp-content/uploads/2022/09/shutterstock_1933411847-768x432.jpg"
        alt="Imagen del Banner"
        className="banner__img"
      />
      <div className="banner__info">
        <h1>you will love our products</h1>
        <button className="banner__info-btn"> shop now!!</button>
      </div>
    </section>
  );
};
