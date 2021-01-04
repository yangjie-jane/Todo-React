import React, { useState }  from 'react'
import './TodoForm.css'

export default function TodoForm(props){
    const [text,setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (text.length === 0) {
            return;
        }
        const newItem = {
            text: text,
            id: Date.now()
        };

        props.handler(newItem);

        setText('');
    }

    return (
        <div class="todo-form">
            <p> What needs to be done? </p>
            <form onSubmit={handleSubmit} class="form">
                <input
                    required type="text"
                    // id="new-todo"
                    onChange={handleChange}
                    value={text}
                />
                <button class="formButton">
                    Add #{props.itemsLength + 1}
                </button>
            </form>
        </div>);
}