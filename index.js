var quotes=[`
<p class="fw-medium fs-4">"The best revenge is massive success."</p>
<p class="fw-medium fs-4">--Frank Sinatra</p>`,
`       <p class="fw-medium fs-4">“Be yourself; everyone else is already taken.”</p>
        <p class="fw-medium fs-4">― Oscar Wilde</p>`, 
        `<p class="fw-medium fs-4">“So many books, so little time.”</p>
        <p class="fw-medium fs-4">― Frank Zappa</p>`];

function randomQuote(){
     var container="";
     var arrayIndex = Math.floor(Math.random() * quotes.length);
    
        container=quotes[arrayIndex];
              
     
        
     document.getElementById('text-quote').innerHTML=container;


    

    
}



       