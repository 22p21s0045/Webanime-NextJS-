import Head from 'next/head'
import Navbars from '../components/Navbars'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rank from '../components/Rank'
import Box from '../components/Box'
import MyApp from './_app';

export default function Home() {
  return (
    <div>
      <Navbars/>
  
      <Rank/>
      <Box/>
    </div>


      
  )
}
