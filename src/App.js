import { useState } from 'react';
import './App.css';
import Popup from './Popup';
var board=Array(9).fill(0);

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [Winner, setWinner]=useState("");
  const togglePopup = () => {
    console.log("aeeeeeeeeeeee")
    setShowPopup(!showPopup);}
  const [turn,setTurn] =useState(0)
  
  const handleClick = (e,num) =>{
    
    const clickedDiv = e.target;
    if (clickedDiv.classList.contains('box')) {
      const divs = Array.from(document.querySelectorAll('.box'));
      const index = divs.indexOf(clickedDiv);
      console.log(index)
      
    
    if(!e.target.innerText){
    if(turn%2===0){e.target.innerText="x";board[index]=1}
    else {e.target.innerText="o";board[index]=-1}
    setTurn(turn+1)}
  }
  for(let i=0;i<9;i+=3)if(Math.abs(board[i]+board[i+1]+board[i+2])===3)
  {
    if(board[i]+board[i+1]+board[i+2]>0){setWinner('X WON');togglePopup()}
    else {setWinner('O WON');togglePopup()}
  }
  for(let i=0;i<3;i++)if(Math.abs(board[i]+board[i+3]+board[i+6])===3)
  {
    if(board[i]+board[i+3]+board[i+6]>0){setWinner('X WON');togglePopup()}
    else {setWinner('O WON');togglePopup()}
  }
  if(Math.abs(board[0]+board[4]+board[8])===3)
  {
    if(board[0]+board[4]+board[8]){setWinner('X WON');togglePopup()}
    else {setWinner('O WON');togglePopup()}
  }
  if(Math.abs(board[2]+board[4]+board[6])===3)
  {
    if(board[2]+board[4]+board[6]){setWinner('X WON');togglePopup()}
    else {setWinner('X WON');togglePopup()}
  }
  

}
  return (
    <div>
    <div className='Main'>
      <div className='box' onClick={handleClick}></div>
      <div className='box' onClick={handleClick}></div>
      <div className='box' onClick={handleClick}></div>
      <div className='box' onClick={handleClick}></div>
      <div className='box' onClick={handleClick}></div>
      <div className='box' onClick={handleClick}></div>
      <div className='box' onClick={handleClick}></div>
      <div className='box' onClick={handleClick}></div>
      <div className='box' onClick={handleClick}></div>
    </div>
    
    <Popup
        handleClose={togglePopup}
        show={showPopup}
      >
        {Winner}
      </Popup>
    </div>
  );
}

export default App;
