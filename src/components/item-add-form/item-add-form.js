import React, {Component} from 'react';
import './item-add-form.css'

class ItemAddForm extends Component {
    render() {
        return (
            <div className='item-add-form'>
                <button
                    onClick={() => this.props.onAddItem('Hello World')}
                    className='btn btn-outline btn-secondary'
                >
                    Add Item
                </button>
            </div>
        );
    }
}

export default ItemAddForm;