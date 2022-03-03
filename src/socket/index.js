import {io} from 'socket.io-client';
 const socketInit=()=>{
const options = {
    'force new connecton':true,
    reconnectonAttempt:'Infinity',
    timeout:10000,
    transports:['websocket']
};
return io('https://meethousebackend.herokuapp.com/',options);


}
export default socketInit;