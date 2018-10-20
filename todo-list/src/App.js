import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      day:[],
      week:[],
      month:[]
    };
  }

  onClickTab(tab){
    console.log("hello");
  }

  render() {
    return (
      <div className="main">
      <BrowserRouter>
      <div>
        <Navigation/>
        <Route exact path="/" component={Home} onClickTab={this.onClickTab}/>
        <Route exact path="/today" component={Today}/>
        <Route exact path="/thisweek" component={Week}/>
        <Route exact path="/thismonth" component={Month}/>
      </div>       
      </BrowserRouter>      
    </div>
    );
  }
}

const Navigation=(props)=>{
  return(
    <nav>
      <ul className="navigation">
        <li><Link style={{ textDecoration: 'none', color: "grey"}} to={`/`}>Home</Link></li>
        <li><Link style={{ textDecoration: 'none', color: "grey" }} to={`/today`}>Today</Link></li>
        <li><Link style={{ textDecoration: 'none', color: "grey" }} to={`/thisweek`}>This Week</Link></li>
        <li><Link style={{ textDecoration: 'none', color: "grey" }} to={`/thismonth`}>This Month</Link></li>
      </ul>
    </nav>
  );
}

const Home=(props)=>{
  return(
    <div className="containerhome">
    <div className="welcome">
      Welcome
    </div> 
    <div className="press">Click on a tab to start your to-do list</div>   
    </div>
  );
}

const Today = (props)=>{
  return (
    <div className="today">
      <List day="Today" />    
    </div>    
  );
};

const Week = (props)=>{
  return (
    <div className="week">
      <List day="This Week" />    
    </div>    
  );
};

const Month = (props)=>{
  return (
    <div className="month">
      <List day="This Month" />    
    </div>    
  );
};

  class Tasks extends Component {

    constructor(props){
      super(props);
      this.onClickTask=this.onClickTask.bind(this);
      this.onClickDelete=this.onClickDelete.bind(this);
    }
  
    onClickTask(){
      this.props.completeTask(this.props.task);
    }
  
    onClickDelete(){
      this.props.deleteTask(this.props.task);
    }
  
    render(){
      return(
        <div className="to-do-list"> 
          <button onClick={this.onClickTask}>Done</button>
          <button onClick={this.onClickDelete}>Delete</button>
          <div className="task">{this.props.task}</div>
        </div>
      );
    }
  }

  const TaskList = (props)=>{
    return (
      <div className="contact-list">
        <h2 className="title">{props.title}</h2>
        {props.tasks.map(task =><Tasks key={task} task={task} completeTask={props.completeTask} deleteTask={props.deleteTask}/>)}      
      </div>
      
    );
  };

  class List extends Component {
    constructor(props){
      super(props);
      this.state = {
        all:[],
        completed:[],
        value: " "
      };
    
      this.completeTask=this.completeTask.bind(this);
      this.deleteTask=this.deleteTask.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    completeTask(task){
      if(this.state.all.indexOf(task)===-1){
        const newComplete=this.state.completed.filter(c => c!==task);
        const newAll=this.state.all.concat(task);
        this.setState({
          all:newAll,
          completed: newComplete
        });
      }
      else{
        const newAll=this.state.all.filter(c => c!==task);
        const newComplete=this.state.completed.concat(task);
        this.setState({
          all:newAll,
          completed: newComplete
        });
      }
    }
  
    deleteTask(task){
      if(this.state.all.indexOf(task)===-1){
        const newComplete=this.state.completed.filter(c => c!==task);
        this.setState({
           completed: newComplete
        });
      }
      else{
        const newAll=this.state.all.filter(c => c!==task);
        this.setState({
          all:newAll
        });
      }
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const newAll=this.state.all.concat(this.state.value);
      this.setState({ 
        all: newAll,
        value: ""
      });
    }
  
    render() {
        return (
          <div className="App">
            <h1>{this.props.day}</h1>
            <TaskList className="all" tasks={this.state.all} title="All Tasks" key="1" completeTask={this.completeTask} deleteTask={this.deleteTask}/>
            <form onSubmit={this.handleSubmit}>
              <label>New Task</label>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <input type="submit" value="Submit" />
            </form>
            <TaskList className="completed" tasks= {this.state.completed} title="Completed Tasks" key="2" completeTask={this.completeTask} deleteTask={this.deleteTask}/>
          </div>
        );
      }
    }

export default App;
