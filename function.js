function shop ( selectedItem, cashPaid, newBalance ){
    if(cashPaid >= selectedItem){
        const change = cashPaid - selectedItem;
        if (change > 0){
            newBalance = change;
            console.log(newBalance);
        }
    }
    else if (cashPaid < selectedItem){
        console.log("Not enough cash");
    } else{
        console.log("Select an Item")
    }

    if(newBalance && selectedItem){
        if(newBalance >= selectedItem){
            newBalance = newBalance - selectedItem;
            console.log(newBalance);
        }
    }

    else if(newBalance && !selectedItem){
        console.log("Do you wish to select another Item?");
    }

    else if (!newBalance && selectedItem){
        console.log("No more cash")
    }
    
    else if(!newBalance && !selectedItem){
        console.log("bye")
    }
    

    


}