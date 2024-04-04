// FruitDetails.js
import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';

function FruitDetails() {
  const { fruit } = useParams();
const navigate = useNavigate();
  // Map each fruit to its respective image URL
  const fruitImages = {
    mango: 'https://images.unsplash.com/photo-1555950394-48d29d13bc9a',
    apple: 'https://images.unsplash.com/photo-1597195723728-8a042918bcff',
    orange: 'https://images.unsplash.com/photo-1556905055-8f358a7e6d76',
    grapes: 'https://images.unsplash.com/photo-1560343094-27437ebf7e1c',
    banana: 'https://images.unsplash.com/photo-1565347291826-15a85db5a37a',
  };
const goBack = () =>{
    navigate(-1);
}
  return (
    <div>
      <h2>{fruit}</h2>
      <img src={fruitImages[fruit]} alt={fruit} style={{ maxWidth: '100%' }} />
      <br/>
      <button style={{marginTop:"40px"}} onClick={goBack}>Go Back</button>
    </div>
  );
}

export default FruitDetails;
