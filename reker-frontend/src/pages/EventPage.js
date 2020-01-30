import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import EventForm from '../containers/auth/EventForm';


const EventPage = () => {
  return (
    <AuthTemplate>
      <EventForm/>
    </AuthTemplate>
  );
};

export default EventPage;