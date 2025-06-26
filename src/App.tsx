import axios from "axios";

const API_BASE_URL = 'http://127.0.0.1:3000';

// Configure axios to always send credentials (cookies)
axios.defaults.withCredentials = true;
axios.defaults.baseURL = API_BASE_URL;

export const App = () => {

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

  const getConnectedUsersInfo = async () => {
      const res = await axios.get('/spotify/me');
      const data = res.data;
      console.log(data);
  }

  return (
      <div>
        <h1>Lets connect to Spotify</h1>
        <button onClick={() => connect()}>Go</button>
        <button onClick={() => getConnectedUsersInfo()}>Get connected user's infos</button>
      </div>
  )
}

export default App
