import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GitExpertApp = () => {

const [categories, setCategories] = useState(['One Punch','Dragon ball']) ;
console.log(categories);

const onAddCategory=()=>{
console.log('valorant');
     setCategories([...categories,'hola'])//hacemos una copia de lo q ya teniam,os  ...categories

  //setCategories(cat=>[...cat,'valor'])//esto tiene una forma de desestructurar creamois un callback

}

  return (
     <>
     {/* titulo */}
     <h1>GifExpertApp</h1>

     {/* input */}
    <AddCategory/>
     {/* listado de gif */}
     <button onClick={onAddCategory}>Agregar</button>
    <ol>
      {categories.map(category=>{
        return <li key={category}>{category}</li>
      })}
      {/* //barrer cada uno de los elementos */}
    </ol>
     </>
  )
}
