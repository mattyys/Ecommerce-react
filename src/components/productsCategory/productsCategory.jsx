import "./productsCategory.css";
import "../../assets/constantes";
import { Constantes } from "../../assets/constantes";
import { Link } from "react-router-dom";

export const ProductCategory = () => {
  const { categories } = Constantes;

  return (
    <section className="category-container">
      <Link to={`/products/${categories.mens}`}>
        <article className="category-container__card-container">
          <img
            src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
            alt="Logo categoria"
            className="category-container__card-container__image"
          />
          <div className="category-container__card-container__info">
            <h3>{categories.mens}</h3>
          </div>
        </article>
      </Link>

      <Link to={`/products/${categories.womans}`}>
      <article className="category-container__card-container">
        <img
          src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
          alt="Logo categoria"
          className="category-container__card-container__image"
        />
        <div className="category-container__card-container__info">
          <h3>{categories.womans}</h3>
        </div>
      </article>
      </Link>

      <Link to={`/products/${categories.jewelery}`}>
      <article className="category-container__card-container">
        <img
          src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
          alt="Logo categoria"
          className="category-container__card-container__image"
        />
        <div className="category-container__card-container__info">
          <h3>{categories.jewelery}</h3>
        </div>
      </article>
      </Link>

      <Link to={`/products/${categories.electronic}`}>
      <article className="category-container__card-container">
        <img
          src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
          alt="Logo categoria"
          className="category-container__card-container__image"
        />
        <div className="category-container__card-container__info">
          <h3>{categories.electronic}</h3>
        </div>
      </article>
      </Link>
    </section>
  );
};
