import React from 'react';
import "./App.css";
import ReactDOM from 'react-dom';
import ListItem from './Components/ListItem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import firebase from './firebaseconfig';

class TodoList_Firebase extends React.Component {
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
        let data = [];
        let query = await firebase.db.collection('test').get();
        query.forEach(item => {
            console.log("item logggggg"); 
            console.log(item); 
            data.push({
                text: item.data().text,
                key: item.data().key
            });
        });
        this.setState({ items: data, isLoading: false }, () => console.log(this.state.items));
        console.log(' dữ liệu từ firebase:');
        console.log(this.state.items);
    };

    writeUserData = (key, text) => {
        // id cho minh set up

        // firebase.db.collection('test').doc('new-city-id/').set({
        //     key: key,
        //     text: text
        // });

        // id tu sinh ra

        // firebase.db.collection('test').add({
        //     key: key,
        //     text: text 
        // });

        // Add a new document with a generated id.
        firebase.db.collection('test').add({
            key: key,
            text: text
        }).then(ref => { // ref là docid tự sinh ra, trả về lai cho mình, o thay đổi được
            console.log('Added document with ID: ', ref.id);
        });


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
            // thêm data lên firestone 
            this.writeUserData(newItem.key, newItem.text)
        }
    }

    deleteItems(key) {
        const filteredItems = this.state.items.filter((item) =>
            item.key !== key);
        this.setState({
            items: filteredItems
        })
    }

    DeletePost = () =>{
        firebase.database().ref('test/key').remove()   
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



    // chương trình bắt đầu sẽ load chỗ này đầu tiên
    componentDidMount() {
        firebase.init();
        this._retrieveData();
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
export default TodoList_Firebase;