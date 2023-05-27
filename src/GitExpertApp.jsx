import { useState } from "react"
import { AddCategory,GifGrid } from "./components";


export const GitExpertApp = () => {

const [categories, setCategories] = useState(['One Punch']) ;
console.log(categories);

const onAddCategory=(newCategory)=>{
  //validacion de los nombres 
  if(categories.includes(newCategory))return;
//console.log(newCategory);
//categories.push(newCategory)
  setCategories([newCategory,...categories])//hacemos una copia de lo q ya teniam,os  ...categories

  //setCategories(cat=>[...cat,'valor'])//esto tiene una forma de desestructurar creamois un callback

}

  return (
     <>
     {/* titulo */}
     <h1>GifExpertApp</h1>

     {/* input */}
    <AddCategory 
    // setCategories={setCategories}
    onNewCategory={(value)=>onAddCategory(value)}
    />
     {/* listado de gif */}
     {/* <button onClick={onAddCategory}>Agregar</button> */}
      {
      categories.map(category=>(
        <GifGrid key={category}
        category={category}/>
           )     )
}
      {/* //barrer cada uno de los elementos */}
     </>
  )
}
