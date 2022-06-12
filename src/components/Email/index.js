import React from 'react';
import { useState, useEffect } from 'react';
import { send } from 'emailjs-com';
import API from '../../utils/API'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Email({ setEventId, eventId, token }) {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    location: '',
    details: '',
    title: '',
    reply_to: ''
  });

  useEffect(() => {

    API.getOneEvent(eventId).then(eventData => {
      const eventTitle = eventData.title;
      const eventDetails = eventData.details;
      const eventLocation = eventData.location;
      setToSend({ ...toSend, title: eventTitle, details: eventDetails, location: eventLocation })

    }).catch(err => {
      console.log(err)
    })

  }, [eventId])

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
        //put api post request here
        const atData = {
          event_id: eventId,
          invited_email: toSend.reply_to
        }
        API.createAttendee(atData, token).then(res => {
          if (res) {
            alert(`${atData.invited_email} has been invited to your event`)
          }
        })
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
      <Card
        sx={{
          margin: 4,
          borderRadius: 5,
          backgroundColor: 'rgba(255,255,255, 0.8)',
        }}
        className="Email"
      >
        <form onSubmit={onSubmit}>
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              margin: 4
            }}
          >

            <TextField
              id="standard-textarea"
              type='text'
              name='from_name'
              placeholder='From'
              label='From'
              variant="standard"
              value={toSend.from_name}
              onChange={handleChange}
            />
            <TextField
              id="standard-textarea"
              variant="standard"
              type='text'
              name='to_name'
              placeholder='To'
              label='To'
              value={toSend.to_name}
              onChange={handleChange}
            />
            <TextField
              id="standard-textarea"
              variant="standard"
              type='text'
              name='reply_to'
              placeholder='Recipient Email'
              label='Recipient Email'
              value={toSend.reply_to}
              onChange={handleChange}
            />
            <input hidden={true}
              type='text'
              name='details'
              value={toSend.details}
              onChange={handleChange}
            />
            <input hidden={true}
              type='text'
              name='location'
              value={toSend.location}
              onChange={handleChange}
            />
            <input hidden={true}
              type='text'
              name='title'
              value={toSend.title}
              onChange={handleChange}
            />
            <Button type='submit' variant="contained">Invite</Button>
          </Box>
        </form>
      </Card>
    </>
  );
}


export default Email;