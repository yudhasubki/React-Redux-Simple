import {combineReducers} from 'redux';
import BooksReducer from './reducer_book';
import ActiveBook from './reducer_active';
const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook:ActiveBook
});

export default rootReducer;