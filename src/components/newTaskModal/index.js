import { Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import { createTodo } from '../../helpers/apiHelper';

const Index = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    title:"",
    description:""
  })

  const handleClose = () => {
    setShow(false);
  }

  // createTodo

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create a new todo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="close">
          <Modal.Title>New todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Index
