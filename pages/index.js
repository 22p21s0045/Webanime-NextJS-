import Head from 'next/head'
import Navbars from '../components/Navbars'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rank from '../components/Rank'
import Box from '../components/Box'
import MyApp from './_app';
import Particlebg from '../components/Particlebg'
import PageNav from '../components/PageNav'
import Comments from '../components/Comment';
import { Provider } from 'react-redux';
import store from '../components/Store/store';
export default function Home() {
  return (
    <div>
      <Provider store={store}>
      <Navbars/>
  
      <Rank/>
      <Box/>
      <Particlebg/>
      <PageNav/>
      <Comments/>
      </Provider>
    </div>


      
  )
}
