import React from 'react';


const Todo = props => {

    let classNames = "item";
    if (props.item.completed) {
        classNames += " completed";
    }

    function updateCompletedHere() {
        props.toggleComplete(props.item.id);
    }

    return (
        <div className={classNames} onClick={updateCompletedHere}>
            <p>{props.item.name}</p>
        </div>

    );
}

export default Todo;