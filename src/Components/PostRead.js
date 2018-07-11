import React from 'react';
import { NavLink,Route} from 'react-router-dom';


class PostRead extends React.Component{
      render(){
        
        return(<div>
            <NavLink to='/'>Back to Posts</NavLink>
            {Object.keys(this.props.singlePost).map((key) => {
                {console.log(this.props.singlePost[key].id)}
            return (<div className="post-read" key={this.props.singlePost[key].id}>               
                <p className="post-heading"><label>title:</label> {this.props.singlePost[key].title}</p>
                <p className="post-heading"><label>Category:</label>{this.props.singlePost[key].category}</p>
                <p className="post-text">{this.props.singlePost[key].detail}</p>
                <button id={this.props.singlePost[key].id} onClick={this.props.delete}><NavLink id={this.props.singlePost[key].id} className='unstyle-link' to='/'>Delete</NavLink></button>
            </div>)       
    })}
                                        
        </div>)  
    }
}

export default PostRead;