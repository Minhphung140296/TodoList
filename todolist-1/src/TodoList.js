import React from 'react';
import "./App.css";
import ListItem from './Components/ListItem';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
library.add(faTrash); 
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
        this.setUpdate = this.setUpdate.bind(this);

    }
    handleInput(e) {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }

        });
    }
    addItem(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if (newItem !== "") {
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem: {
                    text: '',
                    key: ''
                }
            });
        }
    }

    deleteItems(key){
        const filteredItems = this.state.items.filter((item) =>
            item.key !==key);
            this.setState({
                items: filteredItems
            })
    }
    setUpdate(text, key){
        const item = this.state.items;
        item.map((item)=>{
            if(item.key === key){
                item.text = text;
            }
        })
        this.setState({
            items:item
        })
    }
    render() {
        return (
            <div className="App">
                <header>
                    <form id="todo-list" onSubmit={this.addItem}>
                        <input type="text" placeholder="Enter test"
                            value={this.state.currentItem.text}
                            onChange={this.handleInput}
                        />
                        <button type="Submit">Add</button>
                    </form>
                    <ListItem items={this.state.items}
                            deleteItems = {this.deleteItems}
                            setUpdate={this.setUpdate}
                    />
                </header>
            </div>
        )
    }
}
export default TodoList;