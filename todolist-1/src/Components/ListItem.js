import React from 'react';
import "./ListItem.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export default function ListItem(props) {
    const items = props.items || [];
    const ListItems = items.map((item)=>{
        return <div className="list" key="item.key">
            <p>{item.text}</p>
            <span>
                <FontAwesomeIcon className="faicons" icon="trash"/>
            </span>
        </div>
    });        
    return (
        <div>
            {ListItems}
        </div>
    );
}
