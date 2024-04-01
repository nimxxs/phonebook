import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();

    const addContact = (event) => {
        event.preventDefault(); // 리프레쉬 막음
        dispatch({type: "ADD_CONTACT", payload: {name, phoneNumber}})
    }

  return (
    <div>
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="forName">
        <Form.Label>이름</Form.Label>
        {/* onChange? type을 친 값을 저장하는 것 */}
        <Form.Control type="text" placeholder="이름을 입력해 주세요." onChange={(event) => setName(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력해 주세요." onChange={(event) => setPhoneNumber(event.target.value)}/>
      </Form.Group>
      {/* type이 submit이면 onClick을 사용 못함. onSubmit을 사용해야함
          onSubmit은 Form에서 발생해야함.*/}
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
    </div>
  )
}

export default ContactForm