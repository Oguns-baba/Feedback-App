import React from 'react'
import Feedbackitem from './Feedbackitem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function Feedbacklist() {
  const {feedback} =  useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
       return <p>No Feedback Yet</p> 
    }
  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <Feedbackitem key = {item.id} item ={item} />
        ))}
      
    </div>
  )
}



export default Feedbacklist
