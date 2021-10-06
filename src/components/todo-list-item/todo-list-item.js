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
    state = {
        done: false,
        important: false
    }
    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    }
    onMarkImportant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        })
    }
    render() {
        const {label} = this.props
        const {done, important} = this.state
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
          onClick={this.onLabelClick}
      >
        {label}
      </span>
      <button type="button"
              onClick={this.onMarkImportant}
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
        )
    }
}

