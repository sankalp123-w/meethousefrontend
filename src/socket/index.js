import {io} from 'socket.io-client';
 const socketInit=()=>{
const options = {
    'force new connecton':true,
    reconnectonAttempt:'Infinity',
    timeout:10000,
    transports:['websocket']
};
return io('http://localhost:5500',options);


}
export default socketInit;