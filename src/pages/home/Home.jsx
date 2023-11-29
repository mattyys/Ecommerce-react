
import { ProductCategory } from "../../components/productsCategory/productsCategory";
import { Banner } from "../../layouts/banner/Banner";
import "./Home.css";


export const Home = () => {
  return (
    <main>
      <h1>Home</h1>
      <Banner /> 
      <ProductCategory />
    </main>
  );
};
