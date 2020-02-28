import React, {Component} from 'react'

 export default class Form extends Component{
    constructor(){
        super();
            this.state={
                title: '',
                year: '',
                posterImg: ''
            };
        this.handleAdd=this.handleAdd.bind(this)
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleAdd(e){
        e.preventDefault()
        this.props.addMovie(this.state.title, this.state.year, this.state.posterImg)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleAdd} className="Form">
                    <input name="title" placeholder="Title" onChange={event=>this.handleChange(event)}/>
                    <input name="year" placeholder="Year" onChange={event=>this.handleChange(event)}/>
                    <input name="posterImg" placeholder="Poster URL" onChange={event=>this.handleChange(event)}/>
                    <button type="submit">Add Movie</button>
                </form>
            </div>
        )
    }
 }