import React from 'react';




const Context = React.createContext()

const ContextProvider = () => {
    const [theme , setTheme]=React.useState(false)




    function toggleTheme(){
        setTheme(prev => !prev)
    }


  return (
    <div>Context</div>
  )
}

export {ContextProvider , Context }