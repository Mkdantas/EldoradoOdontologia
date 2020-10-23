import React, { useState, FormEvent, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Button, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

function Schedule() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setPacientID("");
    setPacientName("");
    setPacientTime("");
    setEditing(false);
  };

  const handleShow = () => setShow(true);

  const [pacientID, setPacientID] = useState("");
  const [pacientName, setPacientName] = useState("");
  const [pacientTime, setPacientTime] = useState("");
  const [event, setEvent] = useState([]);
  const [eventUpdated, setEventUpdated] = useState(false);
  const [editedDate, setEditedDate] = useState({
    view: {
      calendar: {
        addEvent(e: object) {
          return true;
        },
        remove() {
          return true;
        },
      },
    },
    event: {
      addEvent(e: object) {
        return true;
      },
      remove() {
        return true;
      },
      setStart(e: any, b: object) {
        return true;
      },
    },
  });
  const [editing, setEditing] = useState(false);

  let pacientIDTemporary = "";
  let pacientNameTemporary = "";
  var pacientTimeTemporary = pacientTime;

  const handleEvents = (e: any) => {
    setEvent(e);
  };

  //will only addEvent after states are updated
  useEffect(() => {
    if (editing === true) {
      editedDate.event.setStart(pacientTime, { maintainDuration: true });
      setEditing(false);
    } else {
      editedDate.view.calendar.addEvent({
        title: `${pacientID} - ${pacientName}`,
        start: pacientTime,
        //id:
      });
    }
    setPacientID("");
    setPacientName("");
    // eslint-disable-next-line
    setPacientTime("");
  }, [eventUpdated]);

  const createEvent = (e: FormEvent) => {
    e.preventDefault();
    setPacientID(pacientIDTemporary ? pacientIDTemporary : pacientID);
    setPacientName(pacientNameTemporary ? pacientNameTemporary : pacientName);
    setPacientTime(pacientTimeTemporary ? pacientTimeTemporary : pacientTime);
    setEventUpdated(!eventUpdated);
    setShow(false);
  };

  const ModalContent = () => {
    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Marcar uma consulta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={createEvent}>
            <Form.Group>
              <Form.Label>Código do Paciente</Form.Label>
              <Form.Control
                size="lg"
                className="pacientID"
                type="text"
                defaultValue={pacientID}
                onChange={(e) => (pacientIDTemporary = e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nome do Paciente</Form.Label>
              <Form.Control
                size="lg"
                className="pacientName"
                type="text"
                defaultValue={pacientName}
                onChange={(e) => (pacientNameTemporary = e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Data</Form.Label>
              <Form.Control
                size="lg"
                type="datetime-local"
                className="pacientTime"
                defaultValue={pacientTime}
                onChange={(e) => (pacientTimeTemporary = e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" size="lg" type="submit">
              {editing ? "Atualizar" : "Adicionar"}
            </Button>{" "}
            {editing ? (
              <Button
                variant="danger"
                size="lg"
                onClick={(e) => {
                  editedDate.event.remove();
                  handleClose();
                  console.log(event);
                }}
              >
                Apagar
              </Button>
            ) : null}
          </Form>
        </Modal.Body>
      </Modal>
    );
  };

  const openModal = (e: any) => {
    var date = e.dateStr.split("-");
    date.pop();
    setPacientTime(date.join("-"));
    handleShow();
    setEditedDate(e);
  };

  const openModalEdit = (e: any) => {
    var currentEventTitle = e.event.title.split("-");
    var currentEventTime = e.event.startStr.split("-");
    currentEventTime.pop();
    setPacientTime(currentEventTime.join("-"));
    setPacientID(currentEventTitle[0]);
    setPacientName(currentEventTitle[1]);
    handleShow();
    setEditedDate(e);
    setEditing(true);
  };
  
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
          openModalEdit(e);
        }}
        displayEventTime={false}
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
              handleShow();
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
        eventsSet={handleEvents}
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
