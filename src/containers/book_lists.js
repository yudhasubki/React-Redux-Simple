import React,{Component} from 'react';
//Berguna untuk koneksi antara react dan redux
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book)=>{
            return(
                <li 
                    key={book.title} 
                    className="list-group-item">
                    {book.title}
                    <button onClick={() => { this.props.selectBook(book)}} >Pilih Buku</button>

                </li>
            );
        });
    }
    
    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

//berfungsi untuk mengambil data dari reducer
function mapStateToProps(state){
    return{
        books:state.books
    };
}

//View -> Action Creator -> Reducer -> View
function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);