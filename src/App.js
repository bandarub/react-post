import React, { Component } from 'react';
import './App.css';

import Link from './Components/links';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      title:'',
     category:'',
     detail:'',
     singlePost:{},
     posts:[{
      id: '0 ',
      title:'My day in Integrify',
      category:'work',
      detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius faucibus pellentesque. Aliquam congue ac velit vitae imperdiet. Fusce massa urna, ultrices a mauris eget, cursus tempus diam. Morbi semper finibus turpis non semper. Praesent velit tellus, vestibulum vel nisl pharetra, mollis luctus ante. '
      },
      {
      id: '11',
      title:'My Talk at ReactMeetup',
      category:'Speech',
      detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius faucibus pellentesque. Aliquam congue ac velit vitae imperdiet. Fusce massa urna, ultrices a mauris eget, cursus tempus diam. Morbi semper finibus turpis non semper. Praesent velit tellus, vestibulum vel nisl pharetra, mollis luctus ante. '
      },
      {
      id:'12' ,
      title:'Fun at the n´beach',
      category:'Recreation',
      detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius faucibus pellentesque. Aliquam congue ac velit vitae imperdiet. Fusce massa urna, ultrices a mauris eget, cursus tempus diam. Morbi semper finibus turpis non semper. Praesent velit tellus, vestibulum vel nisl pharetra, mollis luctus ante. '
      },
      {
      id:'3',
      title:'Running in the forest',
      category:'Sports',
      detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius faucibus pellentesque. Aliquam congue ac velit vitae imperdiet. Fusce massa urna, ultrices a mauris eget, cursus tempus diam. Morbi semper finibus turpis non semper. Praesent velit tellus, vestibulum vel nisl pharetra, mollis luctus ante. '
      }    ]
    }   
  }
  handlePost = (e)=>{ 
    e.preventDefault();
    this.setState({[e.target.name]:e.target.value})
  }

 handleSave = (e)=>{
    const arr1 = [...this.state.posts];
    const index = Math.random().toString() ;
    this.state.title===''||this.state.category===''
    ?alert('enter inputs')
    :arr1.push({
    id:index,
    title:this.state.title,
    category:this.state.category,
    detail:this.state.detail});
    this.setState({posts:arr1});
    this.setState({title:'',
                  category:'',
                detail:''})
  }
  handleCancel=(e)=>{
    e.preventDefault();
   this.setState({title:'',
                  category:'',
                detail:''})
  }
  handleDelete = (e)=>{     
     const leftPosts = [...this.state.posts];
     console.log(e.target.id,'from delete')
     const index = e.target.id;
    //  leftPosts.splice(index,1);
     this.setState({posts:this.state.posts.filter((item)=>{
      return item.id !== e.target.id ;
    } )})
    console.log(leftPosts);
  }
  handleClick=(e)=>{
    const element = this.state.posts.filter((item)=>{
      return item.id == e.target.id ;
    } );
    this.setState({singlePost:element});
  }
 render() { 
     
    return (
      <div className="App">
      <h1>Welcome to posts</h1>
       <Link  addPost = {this.addPost} 
              post={this.handlePost} 
              save={this.handleSave}
              cancel={this.handleCancel}
              detailsPost={this.state.posts}
              index={this.handleDisplaySinglePost}
              delete={this.handleDelete}
              displayPost={this.handleClick}
              singlePost={this.state.singlePost}
              /> 

      </div>
    );
  }
}

export default App;
