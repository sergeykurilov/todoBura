import React, {Component} from 'react';
import './app.css'
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form'

export default class App extends Component{
    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ]
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    addItem = (text) => {
        this.setState( ({todoData}) =>  {
            const newArr = [...todoData, this.createTodoItem(text)]
            return {
                todoData: newArr
            }
        })
    }

    toggleProperty(arr, id, propName) {
        this.setState(({todoData}) => {
            //1. update object
            const idx = arr.findIndex(el => el.id === id);
            const oldItem = arr[idx]
            const newItem = {...oldItem, [propName]: !oldItem[propName]}
            //2.construct new array
            const newArr = [
                ...arr.slice(idx + 1),
                newItem,
                ...arr.slice(0,idx)
            ]
                return {
                todoData: newArr
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    deleteItem = (id) => {
        this.setState( ({todoData}) =>  {
            const idx = todoData.findIndex(el => el.id === id);
            const newArr = [
                ...todoData.slice(idx + 1),
                ...todoData.slice(0,idx)
            ]
           return {
               todoData: newArr
           }
        })
    }

    render() {
        const {todoData} = this.state
        const doneCount = todoData
            .filter(el => el.done).length
        const todoCount = todoData.length - doneCount
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    onDeleted={this.deleteItem}
                    todos={todoData}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onAddItem={this.addItem}/>
            </div>
        );
    }
};