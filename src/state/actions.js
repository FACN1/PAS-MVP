import axios from 'axios';
import Store from './store';

const Actions = {};

Actions.get = () => axios.get('/api')
.then((res) => {
  Store.guestHouseList = res.data;
  return res.data;
});

export default Actions;
