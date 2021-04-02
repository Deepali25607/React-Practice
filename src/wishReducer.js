
const nameReducer=(state=[],action) =>{
    console.log(action);
    if(action.type ==='CHANGE_NAME'){
        return{
            ...state,
            wish:action.payload
        }
    }
    return state;
}
export default nameReducer;