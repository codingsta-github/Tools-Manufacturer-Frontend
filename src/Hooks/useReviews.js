import React, { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('https://mercedez-warehouse.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return [reviews]
    
};

export default useReviews;