import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'

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
    <div>
      Hello, this is my Home
    </div>
  );
}

const Navigation=(props)=>{
  return(
    <nav>
      <ul>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/contactlist`}>Contact List</Link></li>
      </ul>
    </nav>
  );
}

const ContactList = (props)=>{
  return (
    <div>
      <h2>{props.title}</h2>
      {props.contacts.map(contact => <ContactCard key={contact.name.first} contact={contact} addToFavorites={props.addToFavorites}/>)}      
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
  }

  onClickFavorites(){
    this.props.addToFavorites(this.props.contact);
  }

  render(){
    return(
      <div className="contact-card"> 
        <figure>
          <img src={this.props.contact.picture.medium} alt="Autor"/>
          <figcaption>{this.props.contact.name.first}</figcaption>
        </figure>
        <button onClick={this.onClickFavorites}>Favorito</button>
        <button>Eliminar</button>
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
  }
  
  addToFavorites(contact){
    console.log("Añadir a favoritos", contact);
    const newAll=this.state.all.filter(c => c.email!==contact.email);
    const newFavorites=this.state.favorites.concat(contact);
    this.setState({
      all:newAll,
      favorites: newFavorites
    });
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
          <ContactList contacts= {this.state.all} title="Todos" key="1" addToFavorites={this.addToFavorites}/>
          <ContactList contacts= {this.state.favorites} title="Favoritos" key="2" addToFavorites={this.addToFavorites}/>
        </div>
      );
    }
  }


export default App;
