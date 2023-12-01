import './Banner.css';
// https://img.freepik.com/foto-gratis/vista-frontal-carrito-compras-cyber-monday-bolsas-espacio-copia_23-2148657638.jpg?w=826&t=st=1696536776~exp=1696537376~hmac=2c3f9a9f4c7f2ca44c96ea7f6d910827e3bae8a19f90b4930d6abe9f1511c642
//"https://proxy.olhardigital.com.br/wp-content/uploads/2022/09/shutterstock_1933411847-768x432.jpg"
//"https://media.istockphoto.com/id/1331353878/es/vector/concepto-de-compras-en-l%C3%ADnea-acceso-del-cliente-a-las-compras-en-l%C3%ADnea-a-trav%C3%A9s-de-la.jpg?s=612x612&w=0&k=20&c=bQB8iXl-sCh6_FgxwglStt5Bbz_Qg7TeZp8kLBFs1to="

export const Banner = () => {
  return (
    <section className="banner">
      <img
        src="https://cdn5.icemd.com/app/uploads/2019/02/pantallas-ordenador-que-es-ecommerce.png"
        alt="Imagen del Banner"
        className="banner__img"
      />
     <div className="banner__info">
        <h1>you will love our products</h1>
      </div>
    </section>
  );
};
