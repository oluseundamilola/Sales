var price;
var change;



function selectedShoe(price){
    price = 200;
    

    if (change){
        let continuePurchase = confirm(`You have ${change} Naira change from you last purchase\n Would you like to purchase this shoe?`);
        if(continuePurchase){
            if(change >= price){
                change = change - price;
            }
            else if(change < price){
                alert("Not enough cash")
            }
    
        }else{
            alert(`Your change is ${change} thank you for shopping with us`)
            change = 0;
        }
        }
       
    else if(!change){
        var cashPaid = prompt("Please enter the cash amount you wish to pay");
        if (cashPaid < price){
            alert("Not enough cash")
            return;
        }
        else if (price < 500 && cashPaid !=200 && cashPaid != 500 && cashPaid!= 1000){
            alert("Please pay 500 Naria note")
        }
        else if (price > 500 && cashPaid!= 1000){
            alert("Please pay 1000 Naria note")
        }

        else if(cashPaid >= price){
            change = cashPaid - price;   
        }
        else{
            alert("An error happened");
        }

        localStorage.setItem('value1', `${change}`);
        
        
    }

    myFunction(change);
}




function selectedWatch(){
    price = 100;
    
    if (change){
        let continuePurchase = confirm(`You have ${change} Naira change from you last purchase\n Would you like to purchase this watch?`);
        if(continuePurchase){
            if(change >= price){
                change = change - price;
            }
            else if(change < price){
                alert("Not enough cash")
            }
    
        }else{
            alert(`Your change is ${change} thank you for shopping with us`)
            change = 0;
        }
        }

    else if(!change){
        var cashPaid = prompt("Please enter the cash amount you wish to pay");
        if (cashPaid < price){
            alert("Not enough cash")
            return;
        }
        else if (price < 500 && cashPaid != 100 && cashPaid != 500 && cashPaid!= 1000){
            alert("Please pay 500 Naria note")
        }
        else if (price > 500 && cashPaid!= 1000){
            alert("Please pay 1000 Naria note")
        }

        else if(cashPaid >= price){
            change = cashPaid - price;   
        }
        else{
            alert("An error happened");
        }

        localStorage.setItem('value1', `${change}`);
        
    }

    myFunction(change);
}




function selectedBag(){
    price = 400;
    
    if (change){
        let continuePurchase = confirm(`You have ${change} Naira change from you last purchase\n Would you like to purchase bag?`);
        if(continuePurchase){
            if(change >= price){
                change = change - price;
            }
            else if(change < price){
                alert("Not enough cash")
            }
    
        }else{
            alert(`Your change is ${change} thank you for shopping with us`)
            change = 0;
        }
        }


    else if(!change){
        var cashPaid = prompt("Please enter the cash amount you wish to pay");
        if (cashPaid < price){
            alert("Not enough cash")
            return;
        }
        else if (price < 500 && cashPaid != 500 && cashPaid!= 1000){
            alert("Please pay 500 Naria note")
        }
        else if (price > 500 && cashPaid!= 1000){
            alert("Please pay 1000 Naria note")
        }

        else if(cashPaid >= price){
            change = cashPaid - price;   
        }
        else{
            alert("An error happened");
        }

        localStorage.setItem('value1', `${change}`);
        
    }
    myFunction(change);
}


function selectedHat(price){
    price = 240;

    if (change){
        let continuePurchase = confirm(`You have ${change} Naira change from you last purchase\n Would you like to continue you purchase?`);
        if(continuePurchase){
            if(change >= price){
                change = change - price;
            }
            else if(change < price){
                alert("Not enough cash")
            }
    
        }else{
            alert(`Your change is ${change} thank you for shopping with us`)
            change = 0;
        }
        }

    else if(!change){
        var cashPaid = prompt("Please enter the cash amount you wish to pay")
        if (cashPaid < price){
            alert("Not enough cash")
            return;
        }
        else if (price < 500 && cashPaid != 500 && cashPaid!= 1000){
            alert("Please pay 500 Naria note")
        }
        else if (price > 500 && cashPaid!= 1000){
            alert("Please pay 1000 Naria note")
        }
    
        else if(cashPaid >= price){
            change = cashPaid - price;   
        }
        else{
            alert("An error happened");
        }
    
        localStorage.setItem('value1', `${change}`);

    }

    myFunction(change);

  

}

function AddToChange(){

    if (change > 500){
        alert("You don't need to add more change for now")
    }else{
        addToChange = parseInt(prompt('Enter the first number '))
        change = change + addToChange;
        console.log(change);
        localStorage.setItem('value1', `${change}`);
    }

    myFunction(change);

   
    }


    
    

    

   

    

 



























/*

function mainFunction(selectedItemPrice){
    let change = 0;
    let newSelectedItem;
    const btn = document.querySelector('watch');
    
    
    

    
        cashPaid = prompt("Please enter the cash amount you wish to pay")
        if (cashPaid < selectedItemPrice){
            alert("Not enough cash")
            return;
        }
        else if (selectedItemPrice < 500 && cashPaid != 500 && cashPaid!= 1000){
            alert("Please pay 500 Naria note")
        }
        else if (selectedItemPrice > 500 && cashPaid!= 1000){
            alert("Please pay 1000 Naria note")
        }

        else if(cashPaid >= selectedItemPrice){
            change = cashPaid - selectedItemPrice;   
        }
        else{
            alert("An error happened");
        }

        
        
        
        
       

    

     if(change > 0){
        let confirmedAction = confirm(`You have ${change} change, would you like you pick something else?`)
        if(confirmedAction){
            if (change > selectedItemPrice){

            }
            
        }
        else{
            alert(`Here is your ${change}Naria change have a good day!` );
        }
    }



    


    //else if(change > 0 && selectedItemPrice > 0){
        //change = change - selectedItemPrice;
        //console.log(change);
    //}

    
     




    //console.log(selectedItemPrice);
    
}
*/