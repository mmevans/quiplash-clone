import io from 'socket.io-client';


const ENDPOINT = '192.168.7.104:3000'
const socket = io(ENDPOINT);


export default socket