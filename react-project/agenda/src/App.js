import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import city from './city-wallpaper-11.jpg';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return(
    <div className="main">
      <BrowserRouter>
      <div>
        <Navigation/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contactlist" component={ContactListSection}/>
      </div>       
      </BrowserRouter>      
    </div>
    )};
}

const Home=(props)=>{
  return(
    <div className="containerhome">
    <div className="welcome">
      Welcome
    </div> 
    <div className="press">Press contact list to view all your contacts</div>   
    </div>
  );
}

const Navigation=(props)=>{
  return(
    <nav>
      <ul className="navigation">
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/contactlist`}>Contact List</Link></li>
      </ul>
    </nav>
  );
}

const ContactList = (props)=>{
  return (
    <div className="contact-list">
      <h2 className="title">{props.title}</h2>
      {props.contacts.map(contact => <ContactCard key={contact.name.first} contact={contact} addToFavorites={props.addToFavorites} deleteContact={props.deleteContact}/>)}      
    </div>
    
  );
};

ContactList.propTypes={
  addToFavorites: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

ContactList.defaultProps={
  title: "Titulo"
};

class ContactCard extends Component {

  constructor(props){
    super(props);
    this.onClickFavorites=this.onClickFavorites.bind(this);
    this.onClickDelete=this.onClickDelete.bind(this);
  }

  onClickFavorites(){
    this.props.addToFavorites(this.props.contact);
  }

  onClickDelete(){
    this.props.deleteContact(this.props.contact);
  }

  render(){
    return(
      <div className="contact-card"> 
        <figure>
          <img className="author" src={this.props.contact.picture.medium} alt="Autor"/>
          <figcaption>{this.props.contact.name.first} {this.props.contact.name.last}</figcaption>
        </figure>
        <button onClick={this.onClickFavorites}>Favorito</button>
        <button onClick={this.onClickDelete}>Eliminar</button>
      </div>
    );
  }
}

class ContactListSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      all:[],
      favorites:[]
    };
  
    this.addToFavorites=this.addToFavorites.bind(this);
    this.deleteContact=this.deleteContact.bind(this);
  }
  
  addToFavorites(contact){
    if(this.state.all.indexOf(contact)===-1){
      const newFavorites=this.state.favorites.filter(c => c.email!==contact.email);
      const newAll=this.state.all.concat(contact);
      this.setState({
        all:newAll,
        favorites: newFavorites
      });
    }
    else{
      const newAll=this.state.all.filter(c => c.email!==contact.email);
      const newFavorites=this.state.favorites.concat(contact);
      this.setState({
        all:newAll,
        favorites: newFavorites
      });
    }
  }

  deleteContact(contact){
    if(this.state.all.indexOf(contact)===-1){
      const newFavorites=this.state.favorites.filter(c => c.email!==contact.email);
      this.setState({
        favorites: newFavorites
      });
    }
    else{
      const newAll=this.state.all.filter(c => c.email!==contact.email);
      this.setState({
        all:newAll
      });
    }
  }

  componentDidMount(){
    fetch("https://randomuser.me/api/?results=10")
      .then(results => results.json())
      .then(data =>{
        this.setState({
          all:data.results
        });
      })
  }
  /*componentDidUpdate(){
  
  }
  componentWillUnmount(){
  
  } */
  
    render() {
      return (
        <div className="App">
          <ContactList className="all" contacts= {this.state.all} title="All Contacts" key="1" addToFavorites={this.addToFavorites} deleteContact={this.deleteContact}/>
          <ContactList className="favorites" contacts= {this.state.favorites} title="Favorites" key="2" addToFavorites={this.addToFavorites} deleteContact={this.deleteContact}/>
        </div>
      );
    }
  }


export default App;
