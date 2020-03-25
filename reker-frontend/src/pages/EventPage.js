import React from 'react';
import AuthTemplate from '../components/Auth/AuthTemplate';
import EventForm from '../containers/Auth/EventForm';


const EventPage = () => {
  return (
    <AuthTemplate>
      <EventForm/>
    </AuthTemplate>
  );
};

export default EventPage;