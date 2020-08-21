import {ADD_TODO, CHANGE_STATUS_TODO, FILTER_TODOS, REMOVE_TODO} from "./types";


export default function(state, action) {
    switch (action.type) {
      case ADD_TODO:
        return {
            ...state,
            todos: [...state.todos,
                {
                    id: Date.now(),
                    name: action.payload,
                    done: false,

                }]
        };
      case CHANGE_STATUS_TODO:
        return {
            ...state ,
            todos: state.todos.map(todo => {
                if (todo.id === action.payload) todo.done = !todo.done;
                return todo; })
        };

      case REMOVE_TODO:
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload),
        };

      case FILTER_TODOS:
        return {
            ...state,
            isSearch: action.payload ,
            filterTodos: state.todos.filter(todo => todo.name.toLowerCase().includes(action.payload.trim().toLowerCase()))
        };
      default:
        return state;
    }
  }
  