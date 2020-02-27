import React, {Component} from 'react'
import movies from "../data/movies.json"
import ListItem from './ListItem'

export default class List extends Component{
    constructor(){
        super();
            this.state={
                movies: movies
            };
    }
    render(){
        // console.log(this.state.movie)
        const moviesMap=this.state.movies.map(movie =>  {return <ListItem key={movie.id} movie={movie}/>
            });
        return(
            <div className="List">
                {moviesMap}
            </div>
        )
    }
}