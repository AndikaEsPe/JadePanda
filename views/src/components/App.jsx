import React, { useEffect, useState } from "react"
import MenuElement from "./MenuElement";

const fetchAPI = (path, func)=>{
    fetch(path).then(
        response=>response.json()
    ).then(
        result=>func(result)
    )
}

const App = ()=>{
    // Create State
    const [menu, setMenu] = useState(null);
    const [branches, setBranches] = useState(null);
    // Fetch data from API
    fetchAPI('/api/menu', setMenu);
    fetchAPI('/api/branch', setBranches);

    return (
        <div>
            {!menu? "Loading Menu..." : menu.map((menuItem)=>{
                return <MenuElement 
                    name={menuItem.DishName}
                    desc={menuItem.Description}
                    price={menuItem.Price}
                    image={menuItem.ImageURL} 
                />
            })}
            <br />
            {!branches?"Loading Branches...":branches.map((branch)=>{
                return (
                    <div>
                        <img src={branch.ImageURL} alt={branch.Address} />
                    </div>
                )
            })}
        </div>
    )
}

export default App;