import axios from 'axios'
import baseUrl from '../Api/Apl'

const instance = axios.create({
   baseURL: baseUrl,
 });
 
 
 export default instance;
 