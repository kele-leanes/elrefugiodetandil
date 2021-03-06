import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import ModalAlert from './../ModalAlert'
import './index.css'
import { CSSTransition } from 'react-transition-group';
import { Helmet } from 'react-helmet'

class Contact extends Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef()
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            response: null,
            textMsg: '',
            isDisabled: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.sendForm = this.sendForm.bind(this)
        this.handleModal = this.handleModal.bind(this)
        this.scrollToMyRef = this.scrollToMyRef.bind(this)
    }

  componentDidMount() {
      this.scrollToMyRef();
  }

  scrollToMyRef() {
    window.scrollTo(0, this.myRef.current.offsetTop)
  } 
  
  validateEmail(email){
      // eslint-disable-next-line
      const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
      const result = pattern.test(email);
      if(result===true){
        this.setState({
          emailError:false,
          email:email
        })
      } else{
        this.setState({
          emailError:true
        })
      }
    }

  validatePhone(phone){
    // eslint-disable-next-line
    const pattern = /^\d{7,}$/;
    const result = pattern.test(phone);
    if(result===true){
      this.setState({
        phoneError:false,
        phone: phone
      })
    } else{
      this.setState({
        phoneError:true
      })
    }
  }  


    handleChange(evt) {
        const value = evt.target.value;
        this.setState({
          ...this.state,
          [evt.target.name]: value
        });
        if(evt.target.name==='name'){
            if(evt.target.value==='' || evt.target.value===null ){
              this.setState({
                nameError:true
              })
            } else {
              this.setState({
                nameError:false,     
                name:evt.target.value
              })
            }
          }
          if(evt.target.name==='phone'){
            this.validatePhone(evt.target.value);
          }
          if(evt.target.name==='email'){
           this.validateEmail(evt.target.value);
          }
          if(evt.target.name === 'message'){
            if(evt.target.value === '' || evt.target.value === null ){
              this.setState({
                messageError:true
              })
            } else {
              this.setState({
                messageError:false,     
                message:evt.target.value
              })
            }
          }    
         if(this.state.nameError===false && this.state.phoneError===false &&
          this.state.emailError===false && this.state.messageError===false){
            this.setState({
              isDisabled:false
            })
         }else {
            this.setState({
                isDisabled:true
              })
         }
    }

    handleModal() {
        this.setState(
            {
                name: '',
                email: '',
                phone: '',
                message: '',
                response: null,
                textMsg: '',
                isDisabled: true
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
            <div className='main-container' ref={this.myRef}>
              <Helmet>
                    <title>Contacto | El Refugio</title>
                    <meta name="description" content="Escribinos un mensaje. Seguinos en nuestras redes sociales @elrefugiodetandil" />
                </Helmet>
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
                        autoComplete = 'off'
                        onChange={this.handleChange}
                        />
                    {this.state.nameError ? <span className='error-input'>Ingrese un nombre</span> : ''}
                    </label>
                    <label>
                    E-mail
                        <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        autoComplete = 'off'
                        onChange={this.handleChange}
                        />
                    {this.state.emailError ? <span className='error-input'>ingrese un e-mail válido</span> : ''}
                    </label>
                    <label>
                    Teléfono
                        <input
                        type="tel"
                        name="phone"
                        value={this.state.phone}
                        autoComplete = 'off'
                        onChange={this.handleChange}
                        />
                    {this.state.phoneError ? <span className='error-input'>ingrese un numero telefónico</span> : ''}
                    </label>
                    <label>
                    Mensaje
                        <textarea
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        />
                        {this.state.messageError ? <span className='error-input'>Escriba un mensaje</span> : ''}
                    </label>
                    <button className='btn-primary' disabled={this.state.isDisabled} onClick={this.sendForm}>Enviar</button>
                </div>
            </div>
        )
    }
}

export default Contact