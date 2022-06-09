import React from 'react';
import { useState, useEffect } from 'react';
import { send } from 'emailjs-com';
import {API} from '../../utils/API'

const savedEvent = localStorage.getItem('eventId');


function Email() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    location: '',
    details: '',
    title: ''
  });



  const savedEvent = localStorage.getItem('eventId');
  useEffect(() => {
    if (savedEvent) {
  API.getOneEvent(savedEvent).then(eventData => {
    const eventTitle = eventData.title;
    const eventDetails = eventData.details;
    const eventLocation = eventData.location;
    setToSend({...toSend, title: eventTitle, details: eventDetails, location: eventLocation})
  })
}
})
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_hl1bptd',
          'template_3wk1lvc',
          toSend,
          'Hizkf7pMD7CoCl5_L'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    return (
        <>
            <div className="Email">
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='from_name'
                        placeholder='from'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='to_name'
                        placeholder='to'
                        value={toSend.to_name}
                        onChange={handleChange}
                    />
                    <div
                        type='text'
                        name='details'
                        value={toSend.details}
                        onChange={handleChange}
                    />
                    <div
                        type='text'
                        name='location'
                        value={toSend.location}
                        onChange={handleChange}
                    />
                    <div
                        type='text'
                        name='title'
                        value={toSend.title}
                        onChange={handleChange}
                    />
                    <button type='submit'>Invite</button>
                </form>
            </div>
        </>
    );
}

export default Email;