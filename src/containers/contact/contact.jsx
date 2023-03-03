import React, { useRef, useState } from 'react'
import {MdContactMail} from 'react-icons/md';
import PageHeaderContent from '../../components/pageHeader/pageHeader';
import './contact.scss';
import { Animate } from 'react-simple-animate';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userDescription, setUserDescription] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f6ul8za', 'template_mydbp1q', form.current, '2Rc76hj6JHHasY8p1')
    .then((result) => {
      console.log(result.text);
      console.log('messege sent')
    }, (error) => {
      console.log(error.text);
    });

    alert('Message sent successfully');

    setUserName('');
    setUserEmail('');
    setUserDescription('');
  }

  const handleChangeName = (e) => {
    setUserName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setUserEmail(e.target.value);
  }

  const handleChangeDescription = (e) => {
    setUserDescription(e.target.value);
  }

  return (
    <section className='contact'>
      <PageHeaderContent headerText='My Contact' icon={<MdContactMail size={40}/>} />


      <div className="contact__content">
        <div className="justForTextAlign">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: 'translateX(-200px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <h3 className="contact__content__header-text">
              Let's Talk
            </h3>
          </Animate>
        </div>

        <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: 'translateX(200px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <form 
              ref={form} 
              onSubmit={sendEmail}
              className="contact__content__form"
            >
              <div className='contact__content__form__wrapper'>
                <div>
                  <input 
                    onChange={handleChangeName}
                    value={userName}
                    name='name' 
                    required
                    className='inputName' 
                    type="text" 
                  />
                  <label className='nameLabel' htmlFor="name">Name</label>
                </div>

                <div>
                  <input
                    onChange={handleChangeEmail}
                    value={userEmail} 
                    required
                    name='email' 
                    className='inputEmail' 
                    type="email" 
                  />
                  <label className='emailLabel' htmlFor="email">Email</label>
                </div>

                <div>
                  <textarea
                    onChange={handleChangeDescription}
                    value={userDescription} 
                    required
                    rows={5} name='description'
                    className='inputDescription' 
                    type="text" 
                  />
                  <label className='descriptionLabel' htmlFor="description">Description</label>
                </div>
              </div>

              <button type='submit' value="Send">
                Submit
              </button>
            </form>
          </Animate>
      </div>
    </section>
  )
}

export default Contact;