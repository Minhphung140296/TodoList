import React from 'react';
import "./App.css";
import ReactDOM from 'react-dom';
import ListItem from './Components/ListItem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import firebase from './firebaseconfig';

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

    _retrieveData = async () => {
        let Data = [];
        let query = await firebase.db.collection('test').get();
        query.forEach(Item => {
            Data.push({
                text: Item.data().text,
                id: Item.data().id
            });
        });
        this.setState({ Data, isLoading: false }, () => console.log(this.state.Data));
        console.log(' dữ liệu từ firebase:');
        console.log(this.state.Data);
    };


    // // them du lieu vo firebase
    // saveDataToDB = async (text, id, test) => {
    //     let docRef = await firebase.db.collection('test').add({ text, id });
    //     test[test.length - 1].id = docRef.id;
    // };


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

    deleteItems(key) {
        const filteredItems = this.state.items.filter((item) =>
            item.key !== key);
        this.setState({
            items: filteredItems
        })
    }
    setUpdate(text, key) {
        const items = this.state.items;
        items.map((item) => {
            if (item.key === key) {
                item.text = text;
            }
        })
        this.setState({
            items: items
        })
    }

    writePost = (testID, id, text) => {
        firebase.database().ref('test/' + testID).set({
            id: id,
            text: text
        })
    }
    // update 
//     var updates = {};
// updates['posts/' + 'key-của-record-1'] = 'new value';
// updates['posts/' + 'key-của-record-2'] = 'new value';
// ...
// //ở đây bạn có thể update nhiều giá trị
// firebase.database().ref().update(updates);
// writeUserData = () => {
//     firebase.db.collection('test').add({
//         id: '5',
//         text: 'phụng'
//     });
// }
//   removeToCollection = () => {
//     firebase.database().ref(`users/${userUid}/collection/`).remove(item)

//    }
//Delete data

//Sửa Data

// chương trình bắt đầu sẽ load chỗ này đầu tiên
componentDidMount() {
    firebase.init();
    this._retrieveData();
    console.log(this.state.Data);
    // thêm dư lieu
    this.writeUserData()
    console.log("Xoá dữ liệu");

    this.writePost()
}

render() {
    return (
        <div className="App" to={process.env.PUBLIC_URL}>
            <header>
                <form id="todo-list" onSubmit={this.addItem}>
                    <input type="text" placeholder="Enter test"
                        value={this.state.currentItem.text}
                        onChange={this.handleInput}
                    />
                    <button type="Submit">Add</button>
                </form>
                <ListItem items={this.state.items}
                    deleteItems={this.deleteItems}
                    setUpdate={this.setUpdate}
                />
            </header>
        </div>
    )
}
}
export default TodoList;
