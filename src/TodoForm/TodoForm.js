import React from 'react'
import './TodoForm.css'

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };

        this.props.handler(newItem);

        this.setState(() => ({
            text: ''
        }));
    }
    render() {
        return (
            <div class="todo-form">
                <p> What needs to be done? </p>
                <form onSubmit={this.handleSubmit} class="form">
                    <input
                        required type="text"
                        // id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button class="formButton">
                        Add #{this.props.length + 1}
                    </button>
                </form>
            </div>)
    }
}