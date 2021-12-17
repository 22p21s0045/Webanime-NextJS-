import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import Image from "next/image";
import rank1 from "../components/img/rank1.png";
export default function Rank() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios("https://api.jikan.moe/v3/top/anime/1/bypopularity").then(
      (response) => setdata(response)
    );
  }, []);

  //.then(response => console.log(response.top[0].title))\/

  console.log(data.data?.top[0].title);
  return (
    <div>
      <Container style={{ paddingLeft: 300, paddingTop: 15 }}>
        <Row>
          <Col
            style={{
              backgroundColor: "#FEF1E6",
              width: "30rem",
              height: "3rem",
            }}
            md={3}
            sm={4}
          >
            <h1 style={{ textAlign: "center" }} className="textrank">
              <Image
                src="https://www.img.in.th/images/6632c37720bbb26d6c310cced88b70a6.gif"
                alt="Picture of the author"
                width={40}
                height={40}
                style={{ paddingRight: 100 }}
                layout="intrinsic"
                sizes="50vw"
              />

              {data.data?.top[0].title}
            </h1>
          </Col>

          <Col
            style={{
              backgroundColor: "#F9D5A7",
              width: "30rem",
              height: "3rem",
            }}
            md={3}
            sm={4}
          >
            <h1 style={{ textAlign: "center" }} className="textrank">
            <Image
                src="https://www.img.in.th/images/90cdd553685174c2da1695421fcc6aea.gif"
                alt="Picture of the author"
                width={40}
                height={40}
                style={{ paddingRight: 100 }}
                layout="intrinsic"
                sizes="50vw"
              />
              {data.data?.top[1].title}{" "}
            </h1>
          </Col>

          <Col
            style={{
              backgroundColor: "#90AACB",
              width: "30rem",
              height: "3rem",
            }}
            md={3}
            sm={4}
          >
            <h1 style={{ textAlign: "center" }} className="textrank">
            <Image
                src="https://www.img.in.th/images/19dc72301ee3b6186cf6f96fe6c4b140.gif"
                alt="Picture of the author"
                width={40}
                height={40}
                style={{ paddingRight: 100 }}
                layout="intrinsic"
                sizes="50vw"
              />
              {data.data?.top[2].title}
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
