import {createStore} from 'redux';
import counter from '../Store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(counter,composeWithDevTools());
export default store;


