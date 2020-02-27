import React from 'react'
import "./App.css"
import List from "./Components/List"
import ListItem from "./Components/ListItem"


function App(){
    return(
        <div className="App">
            <h1 className="movie-list-title">
                The Most Amazing Movie List
            </h1>
            <List />
            <ListItem />
        </div>
    )
};
export default App