import React from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    NavLink,  Route,
  }from 'react-router-dom';

import DefaultPage from './DefaultPage';
import Newpost from './Newpost';
import PostRead from './PostRead';

const Link=(props)=>{
     
   return(
<div>
   <HashRouter>
       <div className='addpost'>       
       {/* <NavLink exact activeStyle ={{color:'orange'}} to="/" >Home</NavLink> */}
       {/* <NavLink exact activeStyle ={{color:'orange'}} to="/posts" >Posts</NavLink> */}
    
       <Route exact path="/" render={()=>(<DefaultPage      
                                                detailsPost={props.detailsPost}
                                                displayPost={props.displayPost}                                               
                                                save={props.save}   />)}/>
    
        <Route exact path ="/newpost" render={()=>(<Newpost      save={props.save} 
                                                                        post={props.post}
                                                                        detailsPost={props.detailsPost}
                                                                        cancel={props.cancel}
                                                                        post={props.post}/>)}/>
       
       <Route exact path="/posts/:postId" render={()=><PostRead detailsPost={props.detailsPost} 
                                                                displayPost={props.displayPost}
                                                                singlePost={props.singlePost}
                                                                delete={props.delete}/>}/>

       </div>
   </HashRouter>


</div>
   );
}
export default Link;

