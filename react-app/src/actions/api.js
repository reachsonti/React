//Inorder to make http access we use the package Axios
import axios from "axios";

const baseUrl = 'http://localhost:60671/api/'

export default{
    dCandidate(url=baseUrl + 'DCandidate/'){
        return{
            fetchall : () => axios.get(url),
            fetchById:id=>axios.get(url + id),
            create: newRecord => axios.post(url,newRecord),
            update : (id,updateRecord) => axios.put(url+id,updateRecord),
            delete : id => axios.delete(url+id)

        }
    }
}