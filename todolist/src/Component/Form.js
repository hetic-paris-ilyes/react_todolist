import { Component } from "react";

export default class Form extends Component {
    setCards = this.props.setCards;

    constructor(props){
        super(props);

        this.state={
            title: "",
            message: "",
            isDone: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form className="my-5 text-center" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control mb-3" placeholder="Titre" onChange={this.getTitle}/>
                <textarea rows="3" className="form-control mb-3" placeholder="Message" onChange={this.getMessage}/>
                <button type={"submit"} className="btn btn-primary">C'est parti</button>
            </form>
        )
    }

    getTitle = (e) => {
        this.setState({title: e.target.value});
    }

    getMessage = (e) => {
        this.setState({message: e.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        const newItem = {
            id: Math.random([1,1000]),
            titre: this.state.title,
            message: this.state.message,
            isDone: this.state.isDone
        };
        if(this.props.cards.length == 10){
            console.log("Déjà trop de taches")
        }else {
        this.setCards(prev =>[...prev, newItem]);
        }
    }
}