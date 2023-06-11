import React, { useState } from 'react';

const EventPage = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [isTicketPurchased, setIsTicketPurchased] = useState(false);

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleEventDescriptionChange = (event) => {
    setEventDescription(event.target.value);
  };

  const handleTicketQuantityChange = (event) => {
    setTicketQuantity(parseInt(event.target.value, 10));
  };

  const handlePurchaseTicket = () => {
    // Logic for purchasing NFT tickets
    // This can involve interacting with a smart contract or backend API

    // Assuming the purchase is successful
    setIsTicketPurchased(true);
  };

  return (
    <div>
      <h1>Event Name</h1>
      <div>
        <label htmlFor="eventName">Event Name:</label>
        <input
          id="eventName"
          type="text"
          value={eventName}
          onChange={handleEventNameChange}
        />
      </div>
      <div>
        <label htmlFor="eventDescription">Event Description:</label>
        <textarea
          id="eventDescription"
          value={eventDescription}
          onChange={handleEventDescriptionChange}
        />
      </div>

      {isTicketPurchased ? (
        <div>
          <p>Ticket(s) purchased successfully!</p>
          <p>Number of tickets: {ticketQuantity}</p>
        </div>
      ) : (
        <div>
          <p>Select the number of tickets:</p>
          <input
            type="number"
            min="1"
            value={ticketQuantity}
            onChange={handleTicketQuantityChange}
          />
          <button onClick={handlePurchaseTicket}>Purchase Tickets</button>
        </div>
      )}
    </div>
  );
};

export default EventPage;
