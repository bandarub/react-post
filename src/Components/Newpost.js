import React from 'react';
import PostRead from './PostRead';
import { NavLink} from 'react-router-dom';



const Newpost = (props)=>{
    return (<div>
        <h4>New Post</h4>
        <div>
            <label>Title:</label> <input  value= {props.detailsPost.title} onChange={props.post} type='text' name='title'/>
            <label>Category:</label> <input value= {props.detailsPost.category} onChange={props.post}  type='text' name='category'/><br/>
            <textarea className='text-area'value= {props.detailsPost.detail} onChange={props.post} name='detail'/>
        </div>
        <div className="buttons">
            {props.detailsPost.title==='' || props.detailsPost.category===''
            ?<button onClick={props.save}>Save</button>
            :<button onClick={props.save}><NavLink className='unstyle-link' to='/'>Save</NavLink></button>}
            <button onClick={props.cancel}><NavLink className='unstyle-link' to='/'>Cancel</NavLink></button>
        </div>
     

    </div>)
}

export default Newpost;