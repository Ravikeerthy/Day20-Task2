// Using async function to fetch api
async function isroapi(){
    let gettingInput = await fetch("https://isro.vercel.app/api/centres"); 
    let res = await gettingInput.json();
    console.log(res);   
    
     for (const key in res) {  // Iterate with for in loop
        console.log(res[key]);
        
        var list = res[key];
        
        list.forEach(element => { // Using the FOREACH method calls a each element
            // console.log(element.State);
            // console.log(element.Place);
            // console.log(element.name);

            var option = document.createElement("option"); // Using DOM add all the state name to display
            option.textContent = element.State;
            option.value = element.State;
            document.getElementById("inputItem").appendChild(option);

        });
        
    }   
}
isroapi() // async function call

function searchSpaceCenters(){ // Onclick trigger function
    let getItem = document.getElementById("inputItem").value; // Getting the value from the user
    let newArray = [];
    fetch("https://isro.vercel.app/api/centres").then((resolve)=> resolve.json()) 

    .then((data)=>{

        for (const key in data) {
            console.log(data[key]);

            // let dis = data[getItem].result
            
            var result = data[key];
            
            result.forEach((element) => {
              
                if(element.State === getItem){ // Check with IF condition and display the data with template literals

                    let message = `${getItem}
                    Name : ${element.name}
                    State : ${element.State}
                    Place : ${element.Place}`;
                    newArray.push(message);
                }                 
               
    
            });   
            
         }
         alert(newArray.join('')); // Display the data in alert box
        
        })
        .catch((err)=>{
            alert("Error")
        })

        
    }






       



           
        
       

 




 
    


