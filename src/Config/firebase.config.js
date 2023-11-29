//se importa la libreria de firebase
import { initializeApp } from "firebase/app";
import{ getFirestore} from 'firebase/firestore/lite';
import { insertAllData } from "../Utils/firestore";
import { listProducts } from "../assets/data2";

// Se declara la configuracion de firebase en un objeto
const firebaseConfig = {
  apiKey: "AIzaSyCWYZCNinjyX7t8pv3nDwXbjnVi8tODC8E",
  authDomain: "myfirst-ecommerce-react.firebaseapp.com",
  projectId: "myfirst-ecommerce-react",
  storageBucket: "myfirst-ecommerce-react.appspot.com",
  messagingSenderId: "336362941139",
  appId: "1:336362941139:web:0a359c38c02a90b4548226",
  measurementId: "G-744KFK24LC"
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
