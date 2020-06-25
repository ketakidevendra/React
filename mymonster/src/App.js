import React, {Component} from 'react';
import './App.css';
import { CardList } from './Components/Card-List/CardListComponent';
import {Searchbox} from './Components/SearchBox/Searchbox';
class App extends Component{
  constructor(props)
  {
    super(props)
    this.state =
    {
      monsters :[],
      searchfield:''
    }
    
  }
getStringSearch = (e) =>
 {
  this.setState({searchfield: e.target.value})
 }
 
componentDidMount()
{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(data=> data.json())
    .then(users=>
      this.setState(
       {
         monsters : users          
      } 
      )
      )
}
  render()
  {
    const {monsters,searchfield} = this.state
    const filterMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchfield.toLowerCase()))
    return (
      <div>
      <h1>Monster Rolodex</h1>
      <Searchbox placeholder = {`Type Something`} handlechange = {this.getStringSearch}/>
      <CardList monsterList = {filterMonsters}>
      </CardList>
      
      </div>
    )
  }
}
export default App;
