import React, {Component, useState} from 'react';

import './todo-list-item.css';
// function Name() {
//     const [state, setState] = useState({
//         name: true
//     })
//     console.log(state.name)
//     function handlerClick() {
//         setState((state) => {
//             return {
//                 name: !state.name
//             }
//         })
//     }
//     return (
//         <ul>
//             <li onClick={handlerClick}>
//                 Name
//             </li>
//         </ul>
//     )
// }

export default class TodoListItem extends Component {
    render() {
        const {label, onDeleted, onToggleImportant, onToggleDone, important, done} = this.props
        let classNames = 'todo-list-item'
        if(done){
            classNames += ' done'
        } if(important){
            classNames += ' important'
        }
        return(
            <span className={classNames}>
      <span
          className="todo-list-item-label"
          onClick={onToggleDone}
      >
        {label}
      </span>
      <button type="button"
              onClick={onToggleImportant}
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              onClick={onDeleted}
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
        )
    }
}

