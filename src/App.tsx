import React from 'react';
import logo from './logo.svg';
import './App.css';
import {IGarage} from "./state";
import axios from "axios";

interface IProps {
    garage: IGarage
}

interface IState {
    todolists:Array<ITodolist>
}

interface ITodolist {
    id: string,
    title:string

}

class App extends React.Component<IProps,IState> {
    state:IState = {
        todolists: []
    };


    componentDidMount(): void {
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', {withCredentials: true})
            .then(res => {
                this.setState({
                    todolists: res.data
                })
            })
    }


    render() {
        return (
            <div className="App">
                <h1> garage </h1>
                {this.props.garage.getAllCars().map(cars => {
                    return <div>
                        {cars.model} - {cars.year}

                    </div>
                })}
                {this.state.todolists.map(todo=> <p> {todo.title} </p>)}
            </div>
        );
    }
}

export default App;
