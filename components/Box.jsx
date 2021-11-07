import React from 'react'
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap"
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../components/style.css'
export default function Box() {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios('https://api.jikan.moe/v3/top/anime/1/bypopularity')
            .then(response => setdata(response))


    }, [])
    console.log(data.data?.top[0].image_url)

    return (
        <div>
            <Container style={{ paddingTop: 100}} classname ='bigboxs'>
                <Row >
                    <Col classname ='boxs' md={6} lg ={4}>
                        <Card style={{ width: '18rem', height: '18rem' }}>

                            <Card.Img variant="top" src={data.data?.top[0].image_url} style={{ width: '18rem', height: '18rem' }} />
                            <Card.Body style={{ backgroundColor: '#FAEEE0' }}>
                                <Card.Title>1.{data.data?.top[0].title}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col style={{ paddingRight: 50 }} classname ='boxs'  md={6} lg ={4} >    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[1].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body style={{ backgroundColor: '#FAEEE0' }}>
                            <Card.Title>2.{data.data?.top[1].title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col style={{  paddingLeft: 0 }}classname ='boxs'  md={6} lg ={4}>    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[2].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body style={{ backgroundColor: '#FAEEE0' }}>
                            <Card.Title>3.{data.data?.top[2].title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>


                </Row>
                <Row style={{ paddingTop: 250 }}>
                    <Col classname ='boxs'  md={6} lg ={4}>     <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[3].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body style={{ backgroundColor: '#FAEEE0' }}>
                            <Card.Title>4.{data.data?.top[3].title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col  classname ='boxs'  md={6} lg ={4}>    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[4].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body style={{ backgroundColor: '#FAEEE0' }}>
                            <Card.Title>5.{data.data?.top[4].title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col classname ='boxs'  md={6} lg ={4}>    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[5].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body style={{ backgroundColor: '#FAEEE0' }}>
                            <Card.Title>6.{data.data?.top[5].title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>










                </Row>
                <Row style={{ paddingTop: 250 }} classname ='boxs'>
                    <Col >     <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[6].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body style={{ backgroundColor: '#FAEEE0' }}>
                            <Card.Title>7.{data.data?.top[6].title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col classname ='boxs'>    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[7].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body style={{ backgroundColor: '#FAEEE0' }}>
                            <Card.Title>8.{data.data?.top[7].title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col classname ='boxs'>    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[8].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body style={{ backgroundColor: '#FAEEE0' }}>
                            <Card.Title>9.{data.data?.top[8].title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>










                </Row>
                <Row style={{ paddingTop: 250 }}>
                    <Col  classname ='boxs'>     <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[9].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body style={{ backgroundColor: '#FAEEE0' }}>
                            <Card.Title>10.{data.data?.top[9].title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col classname ='boxs'>    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[10].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body style={{ backgroundColor: '#FAEEE0' }}>
                            <Card.Title>11.{data.data?.top[10].title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col classname ='boxs'>    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[11].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body style={{ backgroundColor: '#FAEEE0' }}>
                            <Card.Title>12.{data.data?.top[11].title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>










                </Row>
                <Row style={{ paddingTop: 250 }}>
                    <Col >     <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[12].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body style={{ backgroundColor: '#FAEEE0' }}>
                            <Card.Title>13.{data.data?.top[12].title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col >    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[13].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body style={{ backgroundColor: '#FAEEE0' }}>
                            <Card.Title>14.{data.data?.top[13].title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col >    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[14].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body style={{ backgroundColor: '#FAEEE0' }}>
                            <Card.Title>15.{data.data?.top[14].title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>










                </Row>

            </Container>


        </div>
    )
}
