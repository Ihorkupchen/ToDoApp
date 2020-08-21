import {ADD_TODO, CHANGE_STATUS_TODO, FILTER_TODOS, REMOVE_TODO} from "./types";

export function createTodo(str) {
    return {
        type: ADD_TODO,
        payload: str
    }
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

export function changeStatus (id) {
    return {
        type:CHANGE_STATUS_TODO,
        payload: id
    }
}

export function filterTodos (str) {
    return {
        type:FILTER_TODOS,
        payload: str
    }
}