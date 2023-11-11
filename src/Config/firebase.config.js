//se importa la libreria de firebase
import { initializeApp } from "firebase/app";

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

//exporto la constante app
export default app;