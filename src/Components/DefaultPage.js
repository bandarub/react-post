import React from 'react';
import { NavLink,Route } from 'react-router-dom';


class DefaultPage extends React.Component{ 
   
    render(){
        return(<div>
            <NavLink to="/newpost">AddPost</NavLink>
            <div className='postSummery'>
            
                {this.props.detailsPost.map((smallPost) =><div className='small-post' id={smallPost.id} key={smallPost.id} onClick={this.props.displayPost}>
                    <label id={smallPost.id}><NavLink to={`/posts/${smallPost.id}`} id={smallPost.id} className='unstyle-link'>{smallPost.title}</NavLink></label>
                    <label id={smallPost.id}><NavLink to={`/posts/${smallPost.id}`} id={smallPost.id} className='unstyle-link'>{smallPost.category}</NavLink></label>
                </div>)}
            </div>                   
        
        </div>
        )
    }
}
export default DefaultPage;