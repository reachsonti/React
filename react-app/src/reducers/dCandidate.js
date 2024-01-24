import { ACTION_TYPES } from "../actions/dCandidate";
const initialState={
    list:[]
}

//this below code defines reducer for fetchall option.
//action parameter will have type : ACTION_TYPES.FETCH_ALL from actions -> dCandidate.js
//state parameter we need to tell what information we need to store in redux
export const dCandidate  =(state=initialState,action) =>{
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            //data from this return is updated to redux to store
            return {
                ...state,//this will replace all the existing data in state with new data
                list: [...action.payload]
            }
        case ACTION_TYPES.CREATE:
            //data from this return is updated to redux to store
            return {
                ...state,//this will replace all the existing data in state with new data
                list: [...state.list, action.payload]
            }
        
        case ACTION_TYPES.UPDATE:
            //data from this return is updated to redux to store
            return {
                ...state,//this will replace all the existing data in state with new data
                list: state.list.map(x=>x.id == action.payload.id ? action.payload : x)
            }

        case ACTION_TYPES.DELETE:
                //data from this return is updated to redux to store
                return {
                    ...state,//this will replace all the existing data in state with new data
                    list: state.list.filter(x => x.id != action.payload)
                }
    
        default:
            return state;
    }

}
