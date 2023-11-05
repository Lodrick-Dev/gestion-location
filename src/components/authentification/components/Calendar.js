import React from "react";
import "moment/locale/fr";
import moment from "moment/moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";

import styled from "styled-components";
moment.locale("fr");

const Calend = () => {
  const localizer = momentLocalizer(moment);
  const myEventsList = [
    {
      start: new Date(2022, 3, 1, 10, 0), // Exemple : 1er avril 2022
      end: new Date(2022, 3, 5, 13, 0), // Exemple : 5 avril 2022
      title: "Événement passé 2",
    },
    {
      start: new Date(2022, 3, 15, 14, 0),
      end: new Date(2022, 3, 15, 16, 0),
      title: "Événement passé 2",
    },
    {
      description: "la eptite description",
      email: "prolodrick@gmail.com",
      title: "Bateau",
      nom: "Karine",
      start: "2023-11-06",
      end: "2023-11-09",
    },
    {
      start: new Date(2023, 10, 1, 10, 0), // Date de début de l'événement
      end: new Date(2023, 10, 1, 12, 0), // Date de fin de l'événement
      title: "Réunion importante", // Titre de l'événement (peut être personnalisé)
    },
    {
      start: new Date(2023, 10, 2, 14, 0),
      end: new Date(2023, 10, 2, 16, 0),
      title: "Présentation client",
    },
    {
      start: new Date(2023, 10, 2, 14, 0),
      end: new Date(2023, 10, 2, 16, 0),
      title: "Présentation client33",
    },
    {
      start: new Date(2023, 10, 2, 14, 0),
      end: new Date(2023, 10, 2, 16, 0),
      title: "Présentation client37",
    },
    {
      start: new Date(2023, 10, 2, 14, 0),
      end: new Date(2023, 10, 2, 16, 0),
      title: "Présentation client7",
    },
    {
      start: new Date(),
      end: new Date(),
      title: "Présentation client2",
    },
    // Ajoutez d'autres événements ici...
  ];

  //les boutons de navigation
  const messages = {
    today: "Aujourd'hui",
    next: "Suivant",
    previous: "Précédent",
    month: "Mois",
    day: "Jour",
    week: "Semaine",
    showMore: (total) => `+${total} plus`,
  };

  //le background
  const backGroundCalendarStyled = () => {
    return {
      style: {
        backgroundColor: "white",
      },
    };
  };

  //evenement selected to style
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "lightblue", // Couleur de fond de l'événement
      borderColor: "blue", // Couleur de la bordure de l'événement
      color: "black", // Couleur du texte de l'événement
    };

    if (isSelected) {
      style.backgroundColor = "blue"; // Personnalisation pour l'événement sélectionné
      style.color = "white"; // Texte en blanc pour l'événement sélectionné
    }

    return { style };
  };

  //evenement selected to data
  const eventSelectedToData = (ev, e) => {
    console.log(ev);
  };

  // styled et custom events
  const MyEvent = ({ event }) => (
    <div>
      <strong>{event.title}</strong>
      <p>{event.description}</p>
    </div>
  );

  const components = {
    event: MyEvent,
  };

  return (
    <StyledCalendar className="animate__animated animate__bounceInUp animate__faster">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        dayPropGetter={backGroundCalendarStyled}
        eventPropGetter={eventStyleGetter}
        onSelectEvent={eventSelectedToData}
        components={components}
      />
    </StyledCalendar>
  );
};

export default Calend;
const StyledCalendar = styled.div`
  height: 60vh;
  /* margin: 5px auto; */
  width: 100%;
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #292929cc;
  box-shadow: -7px 8px 14px 3px rgb(0 0 0 / 32%);
  backdrop-filter: blur(5px);
  padding: 20px;
  .rbc-calendar {
    background: #150747;
    /* color: white; */
    width: 85%;
    padding: 10px;
    border-radius: 10px;
  }
  .rbc-toolbar {
    background: #150747;
    border-radius: 5px;
  }
  .rbc-btn-group > button,
  .rbc-month-header {
    color: white;
  }

  .rbc-btn-group > button.rbc-active,
  .rbc-btn-group > button:focus {
    background: #71e07a;
    color: #150747;
  }
  .rbc-time-content > .rbc-time-gutter {
    color: white;
  }
  .rbc-toolbar .rbc-toolbar-label {
    color: white;
  }
  .rbc-header {
    color: white;
  }
  .rbc-agenda-view table.rbc-agenda-table > tbody > tr {
    border-bottom: solid 2px greenyellow;
  }
`;
