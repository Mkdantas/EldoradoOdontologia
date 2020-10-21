import React, { useState, FormEvent } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./styles.css";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Schedule() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [pacientID, setPacientID] = useState('');
  const [pacientName, setPacientName] = useState('');
  const [pacientTime, setPacientTime] = useState('');
  const [event, setEvent] = useState([
    {
      title: `default`,
      start: '2020-10-21T10:45:00',
      id: 'draggable-el'
    }
  ]);


 

  const createEvent = (e:FormEvent) =>{
    e.preventDefault();
    setEvent([...event,
    {
      title: `${pacientID} - ${pacientName}`,
      start: pacientTime,
      id: 'draggable-el'
    }]);
    console.log(event)
    handleClose();


  }

  const ModalContent = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Marcar uma consulta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={createEvent}>
            <Form.Group >
              <Form.Label>Código do Paciente</Form.Label>
              <Form.Control
               className="pacientID"
               type="text"
               onChange={async e => await setPacientID(e.target.value)}/>
            </Form.Group>
            <Form.Group >
              <Form.Label>Nome do Paciente</Form.Label>
              <Form.Control
               className="pacientName"
               type="text"
               onChange={e => setPacientName(e.target.value)}/>
            </Form.Group>
            <Form.Group >
              <Form.Label>Data</Form.Label>
              <Form.Control 
              type="datetime-local" 
              className="pacientTime" 
              defaultValue={pacientTime}
              onChange={e => setPacientTime(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  };

  function openModal(e: any) {
    var date = e.dateStr.split('-');
    date.pop();
    setPacientTime(date.join('-'));
    handleShow();
  }

  return (
    <div id="page-schedule">
      {show ? <ModalContent /> : null}
      <FullCalendar
        plugins={[interactionPlugin, timeGridPlugin]}
        initialView="timeGridDay"
        nowIndicator={true}
        slotLabelFormat={{
          hour: "numeric",
          minute: "2-digit",
        }}
        slotMinTime={"09:00:00"}
        eventClick={(e) => {
          console.log("i got clicked");
        }}
        eventMouseEnter={(e) => {
          e.el.style.background = "#4ca8ff";
        }}
        eventMouseLeave={(e) => {
          e.el.style.background = "#3788d8";
        }}
        customButtons={{
          myCustomButton: {
            text: "adicionar novo",
            click: function () {
              alert("clicked the custom button!");
            },
          },
        }}
        headerToolbar={{
          left: "myCustomButton",
          center: "title",
          right: "today prev,next",
        }}
        slotMaxTime={"19:00:00"}
        selectable={true}
        droppable={true}
        allDaySlot={false}
        editable={true}
        hiddenDays={[0]}
        dateClick={openModal}
        events={event}
        buttonText={{
          today: "Hoje",
          month: "Mês",
          week: "Semana",
          day: "Dia",
          list: "lista",
        }}
        businessHours={{
          daysOfWeek: [1, 2, 3, 4, 5, 6],
          startTime: "09:00",
          endTime: "19:00",
        }}
        defaultTimedEventDuration={"00:15"}
        locale={"pt-br"}
        slotDuration={"00:15:00"}
      />
    </div>
  );
}

export default Schedule;
