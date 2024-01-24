import api from './api'

export const ACTION_TYPES = {
    CREATE : 'CREATE',
    UPDATE:'UPDATE',
    DELETE:'DELETE',
    FETCH_ALL:'FETCH_ALL'
}

const formatData = data => ({
    ...data,
    age: parseInt(data.age?data.age:0)
})

//type defines type of actions and payload will have the data from asp.net core api
export const fetchall = () => dispatch =>{
    api.dCandidate().fetchall()
    .then(
        response=> {
            console.log(response)
            dispatch({                    
                    type : ACTION_TYPES.FETCH_ALL,
                    payload : response.data
                })
            })
        .catch(err =>  console.log(err))    
    
}

export const create = (data, onSuccess) => dispatch => {
    data = formatData(data)
    api.dCandidate().create(data)
    .then(res=>{
         dispatch({
             type : ACTION_TYPES.CREATE,
             payload : res.data
         })
         onSuccess()
    })
    .catch(err =>  console.log(err))    
}

export const update = (id, data, onSuccess) => dispatch => {
    data = formatData(data)
    api.dCandidate().update(id, data)
    .then(res=>{
         dispatch({
             type : ACTION_TYPES.UPDATE,
             payload : {id, ...data}
         })
         onSuccess()
    })
    .catch(err =>  console.log(err))    
}

export const Delete = (id, onSuccess) => dispatch => {
    
    api.dCandidate().delete(id)
    .then(res=>{
         dispatch({
             type : ACTION_TYPES.DELETE,
             payload : id
         })
         onSuccess()
    })
    .catch(err =>  console.log(err))    
}
 
 