import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
const [inputValue,SetInputValue]=useState('');


const onInputChange=({target})=>{
  //console.log(target.value);
  SetInputValue(target.value)

}
const onSubmmit=(event)=>{
  event.preventDefault();
  //console.log(inputValue);
  if (inputValue.trim().length<=1)return;
//setCategories(categories=>[inputValue,...categories])
onNewCategory(inputValue.trim());
SetInputValue('')
}
  return (
  
    <form onSubmit={onSubmmit}>
    <input 
    type="text" 
    placeholder="Buscar gifs"
    value={inputValue}
    onChange={onInputChange}
    />
    </form>
  )
}

