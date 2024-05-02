import { useEffect, useState } from "react";
import { products } from "../../../ProductsMock.js";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

  const { id } = useParams()

  const [item, setItem] = useState({})

  useEffect(()=>{

    let itemEncontrado = products.find( (product)=> product.id === +id )
    const getProduct = new Promise( (resolve, reject)=>{
        resolve(itemEncontrado)
    })

    getProduct.then((res)=> setItem(res))

  }, [id])

  const onAdd = (cantidad) => {


    let objetoCompleto = {...item, quantity: cantidad }
    console.log(objetoCompleto)
  }
    
  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;
