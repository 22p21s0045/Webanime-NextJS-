import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { AwesomeButton } from "react-awesome-button";

export default function Box() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios("https://api.jikan.moe/v3/top/anime/1/bypopularity").then(
      (response) => setdata(response)
    );
  }, []);
  console.log(data.data?.top[0].image_url);

  return (
    <div>
      <Container style={{ paddingTop: 100 }} classname="bigboxs">
        <Row>
          <Col classname="boxs" md={6} lg={4}>
            <MDBCard style={{ maxWidth: "18rem" }}>
              <MDBCardImage
                src={data.data?.top[0].image_url}
                style={{ width: "18rem", height: "18rem" }}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>1. {data.data?.top[0].title} </MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>

                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                >
                  <img
                    src="https://www.img.in.th/images/cf9793aaac2dcb9d12d5cefdf7452b1f.png"
                    alt="love"
                    width="30rem"
                  />
                </AwesomeButton>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                  className="awecomments"
                  style={{ paddingLeft: 5 }}
                >
                  <img
                    src="https://www.img.in.th/images/571f6762bd03c76ebc96045cbe76a132.png"
                    alt="comment"
                    width="30rem"
                  />
                </AwesomeButton>
              </MDBCardBody>
            </MDBCard>
          </Col>

          <Col classname="boxs" md={6} lg={4}>
            <MDBCard style={{ maxWidth: "18rem" }}>
              <MDBCardImage
                src={data.data?.top[1].image_url}
                style={{ width: "18rem", height: "18rem" }}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>2. {data.data?.top[1].title} </MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                >
                  <img
                    src="https://www.img.in.th/images/cf9793aaac2dcb9d12d5cefdf7452b1f.png"
                    alt="love"
                    width="30rem"
                  />
                </AwesomeButton>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                  className="awecomments"
                  style={{ paddingLeft: 5 }}
                >
                  <img
                    src="https://www.img.in.th/images/571f6762bd03c76ebc96045cbe76a132.png"
                    alt="comment"
                    width="30rem"
                  />
                </AwesomeButton>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col classname="boxs" md={6} lg={4}>
            <MDBCard style={{ maxWidth: "18rem" }}>
              <MDBCardImage
                src={data.data?.top[2].image_url}
                style={{ width: "18rem", height: "18rem" }}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>3. {data.data?.top[2].title} </MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                >
                  <img
                    src="https://www.img.in.th/images/cf9793aaac2dcb9d12d5cefdf7452b1f.png"
                    alt="love"
                    width="30rem"
                  />
                </AwesomeButton>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                  className="awecomments"
                  style={{ paddingLeft: 5 }}
                >
                  <img
                    src="https://www.img.in.th/images/571f6762bd03c76ebc96045cbe76a132.png"
                    alt="comment"
                    width="30rem"
                  />
                </AwesomeButton>
              </MDBCardBody>
            </MDBCard>
          </Col>
        </Row>
        <Row style={{ paddingTop: 60 }}>
          <Col classname="boxs" md={6} lg={4}>
            <MDBCard style={{ maxWidth: "18rem" }}>
              <MDBCardImage
                src={data.data?.top[3].image_url}
                style={{ width: "18rem", height: "18rem" }}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>4. {data.data?.top[3].title} </MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                >
                  <img
                    src="https://www.img.in.th/images/cf9793aaac2dcb9d12d5cefdf7452b1f.png"
                    alt="love"
                    width="30rem"
                  />
                </AwesomeButton>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                  className="awecomments"
                  style={{ paddingLeft: 5 }}
                >
                  <img
                    src="https://www.img.in.th/images/571f6762bd03c76ebc96045cbe76a132.png"
                    alt="comment"
                    width="30rem"
                  />
                </AwesomeButton>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col classname="boxs" md={6} lg={4}>
            <MDBCard style={{ maxWidth: "18rem" }}>
              <MDBCardImage
                src={data.data?.top[4].image_url}
                style={{ width: "18rem", height: "18rem" }}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>5. {data.data?.top[4].title} </MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                >
                  <img
                    src="https://www.img.in.th/images/cf9793aaac2dcb9d12d5cefdf7452b1f.png"
                    alt="love"
                    width="30rem"
                  />
                </AwesomeButton>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                  className="awecomments"
                  style={{ paddingLeft: 5 }}
                >
                  <img
                    src="https://www.img.in.th/images/571f6762bd03c76ebc96045cbe76a132.png"
                    alt="comment"
                    width="30rem"
                  />
                </AwesomeButton>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col classname="boxs" md={6} lg={4}>
            <MDBCard style={{ maxWidth: "18rem" }}>
              <MDBCardImage
                src={data.data?.top[5].image_url}
                style={{ width: "18rem", height: "18rem" }}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>6. {data.data?.top[5].title} </MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                >
                  <img
                    src="https://www.img.in.th/images/cf9793aaac2dcb9d12d5cefdf7452b1f.png"
                    alt="love"
                    width="30rem"
                  />
                </AwesomeButton>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                  className="awecomments"
                  style={{ paddingLeft: 5 }}
                >
                  <img
                    src="https://www.img.in.th/images/571f6762bd03c76ebc96045cbe76a132.png"
                    alt="comment"
                    width="30rem"
                  />
                </AwesomeButton>
              </MDBCardBody>
            </MDBCard>
          </Col>
        </Row>
        <Row style={{ paddingTop: 60 }} classname="boxs">
          <Col classname="boxs" md={6} lg={4}>
            <MDBCard style={{ maxWidth: "18rem" }}>
              <MDBCardImage
                src={data.data?.top[6].image_url}
                style={{ width: "18rem", height: "18rem" }}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>7. {data.data?.top[6].title} </MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                >
                  <img
                    src="https://www.img.in.th/images/cf9793aaac2dcb9d12d5cefdf7452b1f.png"
                    alt="love"
                    width="30rem"
                  />
                </AwesomeButton>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                  className="awecomments"
                  style={{ paddingLeft: 5 }}
                >
                  <img
                    src="https://www.img.in.th/images/571f6762bd03c76ebc96045cbe76a132.png"
                    alt="comment"
                    width="30rem"
                  />
                </AwesomeButton>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col classname="boxs" md={6} lg={4}>
            <MDBCard style={{ maxWidth: "18rem" }}>
              <MDBCardImage
                src={data.data?.top[7].image_url}
                style={{ width: "18rem", height: "18rem" }}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>8. {data.data?.top[7].title} </MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                >
                  <img
                    src="https://www.img.in.th/images/cf9793aaac2dcb9d12d5cefdf7452b1f.png"
                    alt="love"
                    width="30rem"
                  />
                </AwesomeButton>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                  className="awecomments"
                  style={{ paddingLeft: 5 }}
                >
                  <img
                    src="https://www.img.in.th/images/571f6762bd03c76ebc96045cbe76a132.png"
                    alt="comment"
                    width="30rem"
                  />
                </AwesomeButton>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col classname="boxs" md={6} lg={4}>
            <MDBCard style={{ maxWidth: "18rem" }}>
              <MDBCardImage
                src={data.data?.top[8].image_url}
                style={{ width: "18rem", height: "18rem" }}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>9. {data.data?.top[8].title} </MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                >
                  <img
                    src="https://www.img.in.th/images/cf9793aaac2dcb9d12d5cefdf7452b1f.png"
                    alt="love"
                    width="30rem"
                  />
                </AwesomeButton>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                  className="awecomments"
                  style={{ paddingLeft: 5 }}
                >
                  <img
                    src="https://www.img.in.th/images/571f6762bd03c76ebc96045cbe76a132.png"
                    alt="comment"
                    width="30rem"
                  />
                </AwesomeButton>
              </MDBCardBody>
            </MDBCard>
          </Col>
        </Row>
        <Row style={{ paddingTop: 60 }}>
          <Col classname="boxs" md={6} lg={4}>
            <MDBCard style={{ maxWidth: "18rem" }}>
              <MDBCardImage
                src={data.data?.top[9].image_url}
                style={{ width: "18rem", height: "18rem" }}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>10. {data.data?.top[9].title} </MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                >
                  <img
                    src="https://www.img.in.th/images/cf9793aaac2dcb9d12d5cefdf7452b1f.png"
                    alt="love"
                    width="30rem"
                  />
                </AwesomeButton>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                  className="awecomments"
                  style={{ paddingLeft: 5 }}
                >
                  <img
                    src="https://www.img.in.th/images/571f6762bd03c76ebc96045cbe76a132.png"
                    alt="comment"
                    width="30rem"
                  />
                </AwesomeButton>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col classname="boxs" md={6} lg={4}>
            <MDBCard style={{ maxWidth: "18rem" }}>
              <MDBCardImage
                src={data.data?.top[10].image_url}
                style={{ width: "18rem", height: "18rem" }}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>11. {data.data?.top[10].title} </MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                >
                  <img
                    src="https://www.img.in.th/images/cf9793aaac2dcb9d12d5cefdf7452b1f.png"
                    alt="love"
                    width="30rem"
                  />
                </AwesomeButton>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                  className="awecomments"
                  style={{ paddingLeft: 5 }}
                >
                  <img
                    src="https://www.img.in.th/images/571f6762bd03c76ebc96045cbe76a132.png"
                    alt="comment"
                    width="30rem"
                  />
                </AwesomeButton>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col classname="boxs" md={6} lg={4}>
            <MDBCard style={{ maxWidth: "18rem" }}>
              <MDBCardImage
                src={data.data?.top[11].image_url}
                style={{ width: "18rem", height: "18rem" }}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>12. {data.data?.top[11].title} </MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                >
                  <img
                    src="https://www.img.in.th/images/cf9793aaac2dcb9d12d5cefdf7452b1f.png"
                    alt="love"
                    width="30rem"
                  />
                </AwesomeButton>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                  className="awecomments"
                  style={{ paddingLeft: 5 }}
                >
                  <img
                    src="https://www.img.in.th/images/571f6762bd03c76ebc96045cbe76a132.png"
                    alt="comment"
                    width="30rem"
                  />
                </AwesomeButton>
              </MDBCardBody>
            </MDBCard>
          </Col>
        </Row>
        <Row style={{ paddingTop: 60 }}>
          <Col classname="boxs" md={6} lg={4}>
            <MDBCard style={{ maxWidth: "18rem" }}>
              <MDBCardImage
                src={data.data?.top[12].image_url}
                style={{ width: "18rem", height: "18rem" }}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>13. {data.data?.top[12].title} </MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                >
                  <img
                    src="https://www.img.in.th/images/cf9793aaac2dcb9d12d5cefdf7452b1f.png"
                    alt="love"
                    width="30rem"
                  />
                </AwesomeButton>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                  className="awecomments"
                  style={{ paddingLeft: 5 }}
                >
                  <img
                    src="https://www.img.in.th/images/571f6762bd03c76ebc96045cbe76a132.png"
                    alt="comment"
                    width="30rem"
                  />
                </AwesomeButton>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col classname="boxs" md={6} lg={4}>
            <MDBCard style={{ maxWidth: "18rem" }}>
              <MDBCardImage
                src={data.data?.top[13].image_url}
                style={{ width: "18rem", height: "18rem" }}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>14. {data.data?.top[13].title} </MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                >
                  <img
                    src="https://www.img.in.th/images/cf9793aaac2dcb9d12d5cefdf7452b1f.png"
                    alt="love"
                    width="30rem"
                  />
                </AwesomeButton>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                  className="awecomments"
                  style={{ paddingLeft: 5 }}
                >
                  <img
                    src="https://www.img.in.th/images/571f6762bd03c76ebc96045cbe76a132.png"
                    alt="comment"
                    width="30rem"
                  />
                </AwesomeButton>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col classname="boxs" md={6} lg={4}>
            <MDBCard style={{ maxWidth: "18rem" }}>
              <MDBCardImage
                src={data.data?.top[14].image_url}
                style={{ width: "18rem", height: "18rem" }}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>15. {data.data?.top[14].title} </MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                >
                  <img
                    src="https://www.img.in.th/images/cf9793aaac2dcb9d12d5cefdf7452b1f.png"
                    alt="love"
                    width="30rem"
                  />
                </AwesomeButton>
                <AwesomeButton
                  size="icon"
                  href="https://img.icons8.com/color/48/000000/youtube-play.png"
                  type="primary"
                  className="awecomments"
                  style={{ paddingLeft: 5 }}
                >
                  <img
                    src="https://www.img.in.th/images/571f6762bd03c76ebc96045cbe76a132.png"
                    alt="comment"
                    width="30rem"
                  />
                </AwesomeButton>
              </MDBCardBody>
            </MDBCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
