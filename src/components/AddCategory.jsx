import { useState } from "react"


export const AddCategory = ({setCategories}) => {
const [inputValue, setInputValue] = useState('One Puch')
const onInputChange=({target})=>{//desestructuramos y ya no mandamos el event cuando solo tomamos el valor de target
    //setInput('hola')
    //console.log(target.value);
    setInputValue(target.value)
}
const onSubmit=(event)=>{
    event.preventDefault();//cuando aga enter no se recargue  la pagina 
    console.log(inputValue);
    //setCategories(...inputValue,)

}

  return (
    <form onSubmit={(event)=> onSubmit(event)}>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>

  )
}
