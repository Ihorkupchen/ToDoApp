export default function(state, action) {
    switch (action.type) {
      case "add":
        return {
            isSearch: '',
            todos : [...state.todos,
                    {
                        id: Date.now(),
                        name: action.payload,
                        done: false,
                        
                    }],
            filterTodos: null 
        };
      case "status":
        return { isSearch: '' , 
                 todos: state.todos.map(todo => {
                         if (todo.id === action.payload) todo.done = !todo.done;
                         return todo; }),
                 filterTodos: null  
                };
      case "remove":
        return { isSearch: '' , 
                 todos: state.todos.filter(todo => todo.id !== action.payload),
                 filterTodos: null
                };
       

      case "filter": 
        return { isSearch: action.payload , 
                 todos: [...state.todos ],
                 filterTodos: state.todos.filter(todo => todo.name.toLowerCase().includes(action.payload.trim().toLowerCase()))
        };
      default:
        return state;
    }
  }
  