import React from 'react'
import { Row, Col } from 'react-bootstrap';

const ContactItem = ({item}) => {
  return (
    <div>
        <Row>
            <Col lg={2}>
                <img width={100} src="https://mblogthumb-phinf.pstatic.net/MjAyMzA5MTdfMzUg/MDAxNjk0OTA2MzgxOTA4.RaknG_cVIu2ZZDzeYxz2fH4t_nXKVABNzNYkLiaOfXQg.EBdeACB4F1oEYjgaHnwih_MSMypucI-MZNzVETkM8DEg.PNG.299-_/KakaoTalk_Photo_2023-09-17-07-49-43_002.png?type=w800&jopt=2" />
            </Col>
            <Col lg={10}>
                <div>{item.name}</div>
                <div>{item.phoneNumber}</div>
            </Col>
        </Row>
    </div>
  )
}

export default ContactItem