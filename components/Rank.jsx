import React from 'react'
import { useState,useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import axios from 'axios';
import '../components/style.css'
import rank1 from '../components/img/rank1.png'
export default function Rank() {
    const [data, setdata] = useState([])
    useEffect(()=>{
        axios('https://api.jikan.moe/v3/top/anime/1/bypopularity')
        .then(response =>setdata(response))
    
    
      },[])

    
    
    
    //.then(response => console.log(response.top[0].title))\/
    
    console.log(data.data?.top[0].title)
    return (
        <div>
            <Container style={{ paddingLeft: 300, paddingTop: 15 }}>

                <Row >
                    <Col style={{ backgroundColor: '#FEF1E6', width: '30rem', height: '3rem' }} md={3} sm ={4}>
                    
                        
                        <h1 style={{textAlign: 'center' }} className="textrank"> <img src={rank1} width="50" height="50" />{data.data?.top[0].title}</h1>
                       

                        
                       

                    </Col>





                </Row>
                <Row  >
                    <Col style={{ backgroundColor: '#F9D5A7', width: '30rem', height: '3rem' }} md={3} sm ={4}>
                        <h1 style={{textAlign: 'center'}}className="textrank"> {data.data?.top[1].title} </h1>

                    </Col>



                </Row>
                <Row>
                    <Col style={{ backgroundColor: '#90AACB', width: '30rem', height: '3rem' }} md={3} sm ={4}>
                        <h1 style={{textAlign: 'center'}} className="textrank">{data.data?.top[2].title}</h1>

                    </Col>


                </Row>




            </Container>
        </div>
    )
}
