//se importa la libreria de firebase
import { initializeApp } from "firebase/app";
import{ getFirestore} from 'firebase/firestore/lite';
import { insertAllData } from "../Utils/firestore";
import { listProducts } from "../assets/data2";

// Se declara la configuracion de firebase en un objeto
const firebaseConfig = {
  apiKey: "AIzaSyBdau0l18BCByPHbZ_uNYX9uWpSwv0qw_o",
  authDomain: "ecommerce-tienda-c23dd.firebaseapp.com",
  projectId: "ecommerce-tienda-c23dd",
  storageBucket: "ecommerce-tienda-c23dd.appspot.com",
  messagingSenderId: "1208805380",
  appId: "1:1208805380:web:69eb19fe2aa03423ca6d51"
};

// Initialize Firebase con la configuracion
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//exporto la constante app
export default db;


//este bloque se corre solo para agregar la data a la base de datos
const force = false;
if(force) {

  setTimeout(() =>{
    insertAllData(listProducts,"products");//se ejecuta la funcion despues de 4 segundos de cargada la pagina
  },4000);
};
