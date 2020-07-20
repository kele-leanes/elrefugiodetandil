import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import ModalAlert from './../ModalAlert'
import './index.css'
import { CSSTransition } from 'react-transition-group'

class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            response: null,
            textMsg: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.sendForm = this.sendForm.bind(this)
        this.handleModal = this.handleModal.bind(this)
    }


    handleChange(evt) {
        const value = evt.target.value;
        this.setState({
          ...this.state,
          [evt.target.name]: value
        });
    }

    handleModal() {
        this.setState(
            {
                name: '',
                email: '',
                phone: '',
                message: '',
                response: null,
                textMsg: ''
            }
        )
    }
    
    sendForm() {
        let that = this
        const templateParams = {
            from_name: this.state.name + " (" + this.state.email + ")",
            to_name: 'El Refugio',
            phone: this.state.phone,
            feedback: this.state.message
            };
            emailjs.send('gmail', 'template_DEIjGRy2', templateParams, 'user_qAcGcXY4LXgJFp9Rz8i9i')
            .then(function(response) {
                if(response.status === 200){
                    that.setState({
                        response: true,
                        textMsg: 'El mensaje fue enviado con éxito, en breve nos pondremos en contacto.'
                    });
                    console.log('SUCCESS!', response.status, response.text);
                }
            }, function(error) {
                console.log('FAILED...', error);
                that.setState({
                    response: true,
                    textMsg: 'Algo salió mal. El mensaje no pudo ser enviado.'
                });
            });
    }

    render(){
        return(
            <div className='main-container'>
                <CSSTransition
                    in={this.state.response}
                    timeout={350}
                    classNames="modal-display"
                    unmountOnExit
                >
                    <ModalAlert 
                        textMsg={this.state.textMsg} 
                        handler={this.handleModal}
                    />
                </CSSTransition>
                <div className='form'>
                    <label>
                    Nombre
                        <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                    </label>
                    <label>
                    E-mail
                        <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                    </label>
                    <label>
                    telefono
                        <input
                        type="tel"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        />
                    </label>
                    <label>
                    mensaje
                        <textarea
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        ></textarea>
                    </label>
                    <button className='btn-primary' onClick={this.sendForm}>Enviar</button>
                </div>
            </div>
        )
    }
}

export default Contact