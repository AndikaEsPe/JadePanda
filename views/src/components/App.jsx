import React, { useEffect, useState } from "react"
import MenuElement from "./MenuElement";

const App = ()=>{
    const [data, setData] = useState(null);
    useEffect(()=>{
        fetch('/api').then(
            response=>response.json()
        ).then(
            result=>setData(result)
        )
    }, []);
    return (
        <div>
            {!data? "Loading..." : data.map((menu)=>{
                return <MenuElement 
                    name={menu.DishName}
                    desc={menu.Description}
                    price={menu.Price}
                    image={menu.ImageURL} 
                />
            })}
        </div>
    )
}

export default App;