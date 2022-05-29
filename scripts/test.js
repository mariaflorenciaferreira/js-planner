const getMiddle = str => {
    let totalLength=str.length
    
    if (totalLength % 2 == 0){
      let middle=totalLength/2
      
     console.log(str[middle])    
    }

    if (totalLength % 2 != 0){
        let middle=totalLength/2
        let middlePlusOne=middle+1
        
       console.log(str[middle],str[middlePlusOne])  
    }
    
 
   
 };

    getMiddle(palabra);