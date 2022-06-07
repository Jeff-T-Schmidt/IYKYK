import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';

function Email() {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
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
                    {/* <input
                        type='text'
                        name='message'
                        placeholder='message'
                        value={toSend.message}
                        onChange={handleChange}
                    /> */}
                    <input
                        type='text'
                        name='reply_to'
                        placeholder='Recipient email address'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                    <button type='submit'>Invite</button>
                </form>
            </div>
        </>
    );
}

export default Email;