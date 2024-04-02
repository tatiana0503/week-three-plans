import { Component } from "react";

export class Plans extends Component {
    constructor() {
        super();

        this.state = {
            userInput: "",
            toDoList: []
        }        
        }

        onChangeEvent(e) {
            this.setState({userInput: e});
        }

        addItem(plan) {
            if (plan === "") {
            alert("Plese write your plans!");
            } 
            else {
            let listArray = this.state.toDoList;
            listArray.push(plan);
            this.setState({toDo: listArray, userInput: ""})
            }
        }

        deleteItem() {
            let listArray = this.state.toDoList;
            listArray = [];
            this.setState({toDoList: listArray})
        }

        onSubmitForm(e) {
            e.preventDefault();
        }

        crossWord(e) {
            const li=e.target;
            li.classList.toggle('crossed')
        }

        render () {
            return (
                <div>
                    <form onSubmit={this.onSubmitForm}>
                    <div className="container">
                        <h1>My Plans</h1>
                    </div>
                    <div className="container">
                        <input type="text"
                        placeholder="What are my plans for today?"
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}/>
                    </div>                    
                    <div className="container">
                        <button className="add" onClick={() => this.addItem(this.state.userInput)}>ADD</button>
                    </div>
                    <ul>
                        {this.state.toDoList.map((item, index) => (<li onClick={this.crossWord} key={index}>
                            {item}
                            </li>))}
                    </ul>
                    <div className="container">
                        <button className="delete" onClick={() => this.deleteItem()}>DETELE</button>
                    </div>
                    </form>
                </div>
            )
        }
}