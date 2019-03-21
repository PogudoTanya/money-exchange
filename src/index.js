// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency>=10000){
    objec={ error: "You are rich, my friend! We don't have so much coins for exchange",};
    return objec;
}


    var H=0;var Q=0;
    var D =0;var N = 0;var P = 0;




while(currency>=50){
     currency = currency-50;
    H++;
    }

   while (50>currency  && currency>=25){
         currency = currency-25;
        Q++;
    }

    while(25>currency && currency>=10){
         currency = currency-10;
        D++;
    }
    while(10>currency && currency>=5){
         currency = currency-5;   
        N++;
    }
  
    while(5>currency && currency>=1){
         currency = currency-1;
        P++;
    }
    
    myobj = {
        H: H,
        Q: Q,
        D: D,
        N: N,
        P: P,
      };

    if(H==0 )
      delete myobj.H;
      if(Q==0 )
      delete myobj.Q;
      if(D==0 )
      delete myobj.D; 
      if(N==0 )
      delete myobj.N; 
      if(P==0 )
      delete myobj.P; 
   

  return myobj;
  
}
