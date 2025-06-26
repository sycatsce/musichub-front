import axios from "axios";
const API_BASE_URL = 'http://127.0.0.1:3000';
//import { displayUserInfos, UserInfo } from './UserInfo'
// Configure axios to always send credentials (cookies)
axios.defaults.withCredentials = true;
axios.defaults.baseURL = API_BASE_URL;

import * as test from './UserInfo'


export const App = () => {
  console.log(test);
  const connect = async () => {
    console.log("Init spotify connection");
    try {
      const response = await axios.get('/spotify/init');
      const { authUrl } = response.data;

      console.log(authUrl)
      window.location.href = authUrl;
    } catch (error){
      console.error(error);
    }
  }

  const getUserInfo= async () => {
    const res = await axios.get('/spotify/me');
    
    const data : test.UserInfo = {
        name: res.data.display_name,
        country: res.data.country,
        email: res.data.email,
    }
    return data
  }


  

  return (
      <div>
        <h1>Lets connect to Spotify</h1>
        <button onClick={() => connect()}>Go</button>
        <button onClick={() => getUserInfo()}>Get connected user's infos</button>
        {test.displayUserInfos({country: 'test', email: 'test', name: 'test'})}
      </div>
  )
}

export default App
