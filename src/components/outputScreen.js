import React from 'react'; 
import OutputScreenRow from './outputScreenRow.js'; 
  
// Functional Component. 
// Use to hold two Screen Rows. 
const OutputScreen = (props) => { 
  return ( 
    <div className="screen"> 
      <OutputScreenRow value={props.question}/> 
      <OutputScreenRow value={props.answer}/> 
    </div> 
  ) 
} 
  
// Export Output Screen. 
export default OutputScreen; 