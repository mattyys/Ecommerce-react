import db from "../Config/firebase.config";//se importa firestore(configuracion)


import { addDoc, collection, doc, getDocs } from 'firebase/firestore/lite'; //se importan las funciones


//CREATE DOCUMENT - se pasa el documento a crear y el nombre de la coleccion
//es asincrona
export const createDocument = async (docObj, nameCollection) => {
    try{
        const colRef = collection(db, nameCollection);//se crea referencia a la coleccion
        const docRef = await addDoc(colRef,docObj);//se agrega nuevo documento a la coleccion
        return docRef.id;
    }catch(error){
        console.error(error);
    }

};

//READ ARRAY COLLECTION
export const getItems = async (nameCollection) => {
    try {
        const colRef = collection(db, nameCollection);//referencia de cooleccion
        const docRef = await getDocs(query(colRef));//se obtienen todos los elementos
        return getArrayCollections(docRef);//se devuelve todos los elementos en un array con el id de firestore
    }catch(error){
        console.error(error);
    };

};



/*-------------------funciones de soporte-----------------------*/
//funcion para agregar todo los productos a firestore
export const insertAllData = async(arrayItems, nameCollection) => {
    console.log("Inicializando la carga de documentos");

    try{
        arrayItems.forEach(async (item) => {
            console.log("Agregando documento");
            console.table(item);
            await createDocument(item, nameCollection);//se ejecuta funcion createDocument para cada item.
            
        });
    }catch(error){
    console.error(error);
    };
};

const getArrayCollection = ( collection ) => {
    return collection.docs.map((doc) => {//para cada documento se agrega la propiedad id para posteriomente integrar al objeto
        return { ...doc.data(), id: doc.id };//retorna un objeto con el id mas toda la info del documento
    })
};
