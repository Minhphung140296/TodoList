import React from 'react';
import "./ListItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function ListItem(props) {
    const items = props.items || [];
    const ListItems = items.map((item) => {
        return (<div className="list" key={item.key}>
            <p>
                <input type="text" 
                    value={item.text} 
                    id={item.key}
                    onChange={
                        (e)=>{
                        props.setUpdate(e.target.value, item.key)
                    }}/>
                <span>
                    <FontAwesomeIcon className="faicons" icon="trash"
                        onClick={() => props.deleteItems(item.key)}
                    />
                </span>
            </p>
        </div>);
    });
    
    return (
        <div>
            {ListItems}
        </div>
    );
}
