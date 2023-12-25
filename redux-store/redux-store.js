//Action creators--->a person who is performing some action
//Action (which is also an object) consits of a type and payload (which is a plain JS object)
//Action 1
const newBooking=(name,amount)=>{
    return {
        type:"NEW_BOOKING",
        payload:{
            name:name,
            amount:amount
        }
    }
}
//Action 2
const cancelBooking=(name,refundAmount)=>{
    return {
        type:"CANCEL_BOOKING",
        payload:{
            name:name,
            refundAmount:refundAmount
        }
    }
}
//Reducers are the function that will handle those actions and create a new state. OR simply the one who accepts the action

const reservationHistory=(oldReservationList=[],action)=>{
    if(action.type==="NEW_BOOKING"){
        return [...oldReservationList,action.payload]
    }
    else if(action.type==="CANCEL_BOOKING"){
        return oldReservationList.filter((record)=>{
            return record.name!==action.payload.name
        })
    }
    else{
        return oldReservationList;
    }
}

const cancellationHistory=(oldcancellationList=[],action)=>{
    if(action.type==="CANCEL_BOOKING"){
        return [...oldcancellationList,action.payload]
        }
    
    else{
        return oldcancellationList;
    }
}

const accounting=(totalMoney=100,action)=>{
    if(action.type==="NEW_BOOKING"){
        return totalMoney+action.payload.amount
    }
    else if(action.type==="CANCEL_BOOKING"){
        return totalMoney-action.payload.refundAmount
    }
    else{
        return totalMoney;
    }
}

//Redux Store
console.log(Redux);
const {createStore,combineReducers}=Redux;
const railwayCentralStore=combineReducers({
    accounting:accounting,
    reservationHistory:reservationHistory,
    cancellationHistory:cancellationHistory
})

const store=createStore(railwayCentralStore);
//dispatch actions
const action=newBooking("Pragya",1000)
store.dispatch(newBooking("Pallavi",800));
store.dispatch(newBooking("Shivangi",600));
store.dispatch(newBooking("Nancy",100));
store.dispatch(cancelBooking("Pragya",850))
//access the data
console.log(store.getState())