// Code Keypad Component Here
import React , {component} from 'react'

export default class Keypad extends React.Component {
 constructor(){
   super()
   
   
 }
 function handleKeyUp(e){
   console.log('Entering password...')
 }
 render(){
   return (
     <div>
     <input type="password" onKeyUp={this.handleKeyUp}/>
     </div>
     )
 }
 
  
}