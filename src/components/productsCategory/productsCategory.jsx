import "./productsCategory.css";
import "../../assets/constantes";
import { Constantes } from "../../assets/constantes";
import { Link } from "react-router-dom";

//este se puede modificar para hcer el link a la categoria

export const ProductCategory = () => {
  const { categories } = Constantes;

  const {mens, womans, jewelery,electronic} = categories;

  return (
    <section className="category-container">
      <Link to={`/products/${mens}`}>
        <article className="category-container__card-container">
          <img
            src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
            alt="Logo categoria"
            className="category-container__card-container__image"
          />
          <div className="category-container__card-container__info">
            <h3>{mens}</h3>
          </div>
        </article>
      </Link>

      <Link to={`/products/${womans}`}>
      <article className="category-container__card-container">
        <img
          src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
          alt="Logo categoria"
          className="category-container__card-container__image"
        />
        <div className="category-container__card-container__info">
          <h3>{womans}</h3>
        </div>
      </article>
      </Link>

      <Link to={`/products/${jewelery}`}>
      <article className="category-container__card-container">
        <img
          src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
          alt="Logo categoria"
          className="category-container__card-container__image"
        />
        <div className="category-container__card-container__info">
          <h3>{jewelery}</h3>
        </div>
      </article>
      </Link>

      <Link to={`/products/${electronic}`}>
      <article className="category-container__card-container">
        <img
          src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
          alt="Logo categoria"
          className="category-container__card-container__image"
        />
        <div className="category-container__card-container__info">
          <h3>{electronic}</h3>
        </div>
      </article>
      </Link>
    </section>
  );
};
