import React from 'react'
import { Pagination } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
export default function PageNav() {
    return (
        <div>
            <Container md={4} xs={3} style={{ paddingTop: 300 }}>
                <Row>
                    <Pagination >
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item href = '/page1' style={{color: '#CEE5D0'}} >{1}</Pagination.Item>
                        
                        <Pagination.Item href = '/page2' style={{backgroundColor: '#CEE5D0'}}>{2}</Pagination.Item>
                        
                        <Pagination.Item href = '/page3'>{3}</Pagination.Item>
                        
                        <Pagination.Item href = '/page4'>{4}</Pagination.Item>
                        

                       
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Row>
            </Container>
        </div>
    )
}
