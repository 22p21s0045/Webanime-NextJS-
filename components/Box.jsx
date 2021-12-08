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
} from "mdb-react-ui-kit";
import CountUp from "react-countup";
import ReactFontLoader from "react-font-loader";
import { AwesomeButton } from "react-awesome-button";
import Aos from "aos";
import { useDispatch } from "react-redux";
export default function Box() {
  const dispatch = useDispatch();
  const [databases, setdatabases] = useState({});
  const [data, setdata] = useState({});
  async function fetchData() {
    try {
    const response = await axios.get('https://sheet.best/api/sheets/d866b506-a505-4a9f-881d-92c6a9dc7d1b');
       return setdatabases(response);
    }
    catch(error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
    axios("https://api.jikan.moe/v3/top/anime/1/bypopularity").then(
      (response) => setdata(response)
    );
    Aos.init();
     
       
     
    
   
  }, []);


if (databases.data == undefined) {
  return (
    <div>
      <ReactFontLoader
        style={{
          fontFamily: "Noto Sans JP",
          fontStyle: "normal",
          fontDisplay: "swap",
          fontWeight: 400,
          src:
            "https://fonts.gstatic.com/s/notosansjp/v7/NoaEzkMhXGnBxnC9ZIKYpJyhvXRa8TVwTICgirnJhmVJw.woff2",
        }}
      />
      <div className="text-center">
        <h1>Loading...</h1>
        
      </div>
    </div>
  );
}
console.log(databases.data[0]);
  return (
    <div>
      <Container style={{ paddingTop: 100 }} classname="bigboxs">
        <Row>
          <Col className="boxs" md={6} lg={4}>
            <div data-aos="fade-up">
              <MDBCard style={{ maxWidth: "18rem" }}>
                <MDBCardImage
                  src={data.data?.top[0].image_url}
                  style={{ width: "18rem", height: "18rem" }}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>1. {data.data?.top[0].title} </MDBCardTitle>
                  <MDBCardText></MDBCardText>

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
                    onPress={ dispatch({type: 'INCREMENT'})}
                  >
                    <img
                      src="https://www.img.in.th/images/571f6762bd03c76ebc96045cbe76a132.png"
                      alt="comment"
                      width="30rem"
                    />
                  </AwesomeButton>
                  <br />
                  <ReactFontLoader url="https://fonts.googleapis.com/css2?family=Pacifico&family=Praise&display=swap" />
                  <CountUp
                    start={0}
                    duration={1}
                    end={100}
                    className="counts"
                    style={{ fontFamily: "Pacifico", fontSize: 50 }}
                  />
                </MDBCardBody>
              </MDBCard>
            </div>
          </Col>

          <Col classname="boxs" md={6} lg={4}>
            <div data-aos="fade-up">
              <MDBCard style={{ maxWidth: "18rem" }}>
                <MDBCardImage
                  src={data.data?.top[1].image_url}
                  style={{ width: "18rem", height: "18rem" }}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>2. {data.data?.top[1].title} </MDBCardTitle>
                  <MDBCardText></MDBCardText>
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
                  <br />
                  <ReactFontLoader url="https://fonts.googleapis.com/css2?family=Pacifico&family=Praise&display=swap" />
                  <CountUp
                    start={0}
                    duration={1}
                    end={100}
                    className="counts"
                    style={{ fontFamily: "Pacifico", fontSize: 50 }}
                  />
                </MDBCardBody>
              </MDBCard>
            </div>
          </Col>
          <Col classname="boxs" md={6} lg={4}>
            <div data-aos="fade-up">
              <MDBCard style={{ maxWidth: "18rem" }}>
                <MDBCardImage
                  src={data.data?.top[2].image_url}
                  style={{ width: "18rem", height: "18rem" }}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>3. {data.data?.top[2].title} </MDBCardTitle>
                  <MDBCardText></MDBCardText>
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
                  <br />
                  <ReactFontLoader url="https://fonts.googleapis.com/css2?family=Pacifico&family=Praise&display=swap" />
                  <CountUp
                    start={0}
                    duration={1}
                    end={100}
                    className="counts"
                    style={{ fontFamily: "Pacifico", fontSize: 50 }}
                  />
                </MDBCardBody>
              </MDBCard>
            </div>
          </Col>
        </Row>
        <Row style={{ paddingTop: 60 }}>
          <Col classname="boxs" md={6} lg={4}>
            <div data-aos="fade-up">
              <MDBCard style={{ maxWidth: "18rem" }}>
                <MDBCardImage
                  src={data.data?.top[3].image_url}
                  style={{ width: "18rem", height: "18rem" }}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>4. {data.data?.top[3].title} </MDBCardTitle>
                  <MDBCardText></MDBCardText>
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
                  <br />
                  <ReactFontLoader url="https://fonts.googleapis.com/css2?family=Pacifico&family=Praise&display=swap" />
                  <CountUp
                    start={0}
                    duration={1}
                    end={100}
                    className="counts"
                    style={{ fontFamily: "Pacifico", fontSize: 50 }}
                  />
                </MDBCardBody>
              </MDBCard>
            </div>
          </Col>
          <Col classname="boxs" md={6} lg={4}>
            <div data-aos="fade-up">
              <MDBCard style={{ maxWidth: "18rem" }}>
                <MDBCardImage
                  src={data.data?.top[4].image_url}
                  style={{ width: "18rem", height: "18rem" }}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>5. {data.data?.top[4].title} </MDBCardTitle>
                  <MDBCardText></MDBCardText>
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
                  <br />
                  <ReactFontLoader url="https://fonts.googleapis.com/css2?family=Pacifico&family=Praise&display=swap" />
                  <CountUp
                    start={0}
                    duration={1}
                    end={100}
                    className="counts"
                    style={{ fontFamily: "Pacifico", fontSize: 50 }}
                  />
                </MDBCardBody>
              </MDBCard>
            </div>
          </Col>

          <Col classname="boxs" md={6} lg={4}>
            <div data-aos="fade-up">
              <MDBCard style={{ maxWidth: "18rem" }}>
                <MDBCardImage
                  src={data.data?.top[5].image_url}
                  style={{ width: "18rem", height: "18rem" }}
                  position="top"
                  alt="..."
                />

                <MDBCardBody>
                  <MDBCardTitle>6. {data.data?.top[5].title} </MDBCardTitle>
                  <MDBCardText></MDBCardText>
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
                  <br />
                  <ReactFontLoader url="https://fonts.googleapis.com/css2?family=Pacifico&family=Praise&display=swap" />
                  <CountUp
                    start={0}
                    duration={1}
                    end={100}
                    className="counts"
                    style={{ fontFamily: "Pacifico", fontSize: 50 }}
                  />
                </MDBCardBody>
              </MDBCard>
            </div>
          </Col>
        </Row>
        <Row style={{ paddingTop: 60 }} classname="boxs">
          <Col classname="boxs" md={6} lg={4}>
            <div data-aos="fade-up">
              <MDBCard style={{ maxWidth: "18rem" }}>
                <MDBCardImage
                  src={data.data?.top[6].image_url}
                  style={{ width: "18rem", height: "18rem" }}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>7. {data.data?.top[6].title} </MDBCardTitle>
                  <MDBCardText></MDBCardText>
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
                  <br />
                  <ReactFontLoader url="https://fonts.googleapis.com/css2?family=Pacifico&family=Praise&display=swap" />
                  <CountUp
                    start={0}
                    duration={1}
                    end={100}
                    className="counts"
                    style={{ fontFamily: "Pacifico", fontSize: 50 }}
                  />
                </MDBCardBody>
              </MDBCard>
            </div>
          </Col>
          <Col classname="boxs" md={6} lg={4}>
            <div data-aos="fade-up">
              <MDBCard style={{ maxWidth: "18rem" }}>
                <MDBCardImage
                  src={data.data?.top[7].image_url}
                  style={{ width: "18rem", height: "18rem" }}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>8. {data.data?.top[7].title} </MDBCardTitle>
                  <MDBCardText></MDBCardText>
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
                  <br />
                  <ReactFontLoader url="https://fonts.googleapis.com/css2?family=Pacifico&family=Praise&display=swap" />
                  <CountUp
                    start={0}
                    duration={1}
                    end={100}
                    className="counts"
                    style={{ fontFamily: "Pacifico", fontSize: 50 }}
                  />
                </MDBCardBody>
              </MDBCard>
            </div>
          </Col>
          <Col classname="boxs" md={6} lg={4}>
            <div data-aos="fade-up">
              <MDBCard style={{ maxWidth: "18rem" }}>
                <MDBCardImage
                  src={data.data?.top[8].image_url}
                  style={{ width: "18rem", height: "18rem" }}
                  position="top"
                  alt="..."
                />

                <MDBCardBody>
                  <MDBCardTitle>9. {data.data?.top[8].title} </MDBCardTitle>
                  <MDBCardText></MDBCardText>
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
                  <br />
                  <ReactFontLoader url="https://fonts.googleapis.com/css2?family=Pacifico&family=Praise&display=swap" />
                  <CountUp
                    start={0}
                    duration={1}
                    end={100}
                    className="counts"
                    style={{ fontFamily: "Pacifico", fontSize: 50 }}
                  />
                </MDBCardBody>
              </MDBCard>
            </div>
          </Col>
        </Row>
        <Row style={{ paddingTop: 60 }}>
          <Col classname="boxs" md={6} lg={4}>
            <div data-aos="fade-up">
              <MDBCard style={{ maxWidth: "18rem" }}>
                <MDBCardImage
                  src={data.data?.top[9].image_url}
                  style={{ width: "18rem", height: "18rem" }}
                  position="top"
                  alt="..."
                />

                <MDBCardBody>
                  <MDBCardTitle>10. {data.data?.top[9].title} </MDBCardTitle>
                  <MDBCardText></MDBCardText>
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
                  <br />
                  <ReactFontLoader url="https://fonts.googleapis.com/css2?family=Pacifico&family=Praise&display=swap" />
                  <CountUp
                    start={0}
                    duration={1}
                    end={100}
                    className="counts"
                    style={{ fontFamily: "Pacifico", fontSize: 50 }}
                  />
                </MDBCardBody>
              </MDBCard>
            </div>
          </Col>
          <Col classname="boxs" md={6} lg={4}>
            <div data-aos="fade-up">
              <MDBCard style={{ maxWidth: "18rem" }}>
                <MDBCardImage
                  src={data.data?.top[10].image_url}
                  style={{ width: "18rem", height: "18rem" }}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>11. {data.data?.top[10].title} </MDBCardTitle>
                  <MDBCardText></MDBCardText>
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
                  <br />
                  <ReactFontLoader url="https://fonts.googleapis.com/css2?family=Pacifico&family=Praise&display=swap" />
                  <CountUp
                    start={0}
                    duration={1}
                    end={100}
                    className="counts"
                    style={{ fontFamily: "Pacifico", fontSize: 50 }}
                  />
                </MDBCardBody>
              </MDBCard>
            </div>
          </Col>
          <Col classname="boxs" md={6} lg={4}>
            <div data-aos="fade-up">
              <MDBCard style={{ maxWidth: "18rem" }}>
                <MDBCardImage
                  src={data.data?.top[11].image_url}
                  style={{ width: "18rem", height: "18rem" }}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>12. {data.data?.top[11].title} </MDBCardTitle>
                  <MDBCardText></MDBCardText>
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
                  <br />
                  <ReactFontLoader url="https://fonts.googleapis.com/css2?family=Pacifico&family=Praise&display=swap" />
                  <CountUp
                    start={0}
                    duration={1}
                    end={100}
                    className="counts"
                    style={{ fontFamily: "Pacifico", fontSize: 50 }}
                  />
                </MDBCardBody>
              </MDBCard>
            </div>
          </Col>
        </Row>
        <Row style={{ paddingTop: 60 }}>
          <Col classname="boxs" md={6} lg={4}>
            <div data-aos="fade-up">
              <MDBCard style={{ maxWidth: "18rem" }}>
                <MDBCardImage
                  src={data.data?.top[12].image_url}
                  style={{ width: "18rem", height: "18rem" }}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>13. {data.data?.top[12].title} </MDBCardTitle>
                  <MDBCardText></MDBCardText>
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
                  <br />
                  <ReactFontLoader url="https://fonts.googleapis.com/css2?family=Pacifico&family=Praise&display=swap" />
                  <CountUp
                    start={0}
                    duration={1}
                    end={100}
                    className="counts"
                    style={{ fontFamily: "Pacifico", fontSize: 50 }}
                  />
                </MDBCardBody>
              </MDBCard>
            </div>
          </Col>
          <Col classname="boxs" md={6} lg={4}>
            <div data-aos="fade-up">
              <MDBCard style={{ maxWidth: "18rem" }}>
                <MDBCardImage
                  src={data.data?.top[13].image_url}
                  style={{ width: "18rem", height: "18rem" }}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>14. {data.data?.top[13].title} </MDBCardTitle>
                  <MDBCardText></MDBCardText>
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
                  <br />
                  <ReactFontLoader url="https://fonts.googleapis.com/css2?family=Pacifico&family=Praise&display=swap" />
                  <CountUp
                    start={0}
                    duration={1}
                    end={100}
                    className="counts"
                    style={{ fontFamily: "Pacifico", fontSize: 50 }}
                  />
                </MDBCardBody>
              </MDBCard>
            </div>
          </Col>
          <Col classname="boxs" md={6} lg={4}>
            <div data-aos="fade-up">
              <MDBCard style={{ maxWidth: "18rem" }}>
                <MDBCardImage
                  src={data.data?.top[14].image_url}
                  style={{ width: "18rem", height: "18rem" }}
                  position="top"
                  alt="..."
                />

                <MDBCardBody>
                  <MDBCardTitle>15. {data.data?.top[14].title} </MDBCardTitle>
                  <MDBCardText></MDBCardText>
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
                  <br />
                  <ReactFontLoader url="https://fonts.googleapis.com/css2?family=Pacifico&family=Praise&display=swap" />
                  <CountUp
                    start={0}
                    duration={1}
                    end={100}
                    className="counts"
                    style={{ fontFamily: "Pacifico", fontSize: 50 }}
                  />
                </MDBCardBody>
              </MDBCard>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
