import React, { Component } from 'react';
import DefaultPage from './DefaultPage';
import Newpost from './Newpost';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    IndexRoute,
    
  } from 'react-router-dom';

const Path = (props)=>{
    return(<div>        
         <Router>            
            <div>            
            <Route exact  path ="/" render={()=>(<DefaultPage/>)}/>   
            <Route exact  path ="/posts/newpost" render={()=>(<Newpost  save={props.save} 
                                                                        title={props.title}
                                                                        category={props.category}
                                                                        detail={props.detail}
                                                                        detailsPost={props.detailsPost}
                                                                        post={props.post}/>)}/>                   
            </div>  
        </Router> 
    </div>)
}
export default Path;