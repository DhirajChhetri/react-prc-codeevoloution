import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello'
class App extends Component{
 render(){
  return (
    <div className='App'>
      <Greet></Greet>
      <Hello></Hello>
    </div>
  )
 }
}

export default App;
