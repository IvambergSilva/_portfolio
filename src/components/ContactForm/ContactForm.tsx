import Button from '../Button/Button'
import { BiLogoTelegram } from 'react-icons/bi'
import './ContactForm.scss'
import { ChangeEvent, useState } from 'react'
import image from '../../assets/images/image-contactMe.png'

export default function ContactForm() {
    
    const [form, setForm] = useState({
        name: '', email: '', phoneNumber: '', subject: '', message: ''
    })

    const [phoneNumber, setPhoneNumber] = useState<string>('')


    const handleFormatPhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
        const digit = event.target.value
        console.log(digit);
    }

    function handleSubmit() {
        
    }

    return (
        <div className='container'>
            <img src={image} alt="Imagem de um boneco usando um computador" />
            <form className='form-container'>
            <h2>Entre em contato <span>comigo!</span></h2>
            <p>Preencha os campos abaixo que em breve entrarei em contato.</p>
            <section>
                <div>
                    <label className='form-label'>Seu nome*:</label>
                    <input type='text' placeholder='Digite aqui' className='form-input' required></input>
                </div>

                <div>
                    <label className='form-label'>E-mail*:</label>
                    <input type='email' placeholder='email@exemplo.com.br' className='form-input' required></input>
                </div>

                <div>
                    <label className='form-label'>Telefone:</label>
                    <input type='text' placeholder='(_ _) _ _ _ _ _ - _ _ _ _' className='form-input' value={phoneNumber} onChange={handleFormatPhoneNumber} maxLength={11}></input>
                </div>

                <div>
                    <label className='form-label'>Assunto*:</label>
                    <input type='text' placeholder='Digite aqui' className='form-input' required></input>
                </div>

                <div>
                    <label className='form-label'>Mensagem*:</label>
                    <textarea placeholder='Escreva aqui sua mensagem' className='form-textarea' required></textarea>
                </div>

                <div onClick={() => handleSubmit()} className='form-button'>
                    <Button
                        title='button'
                        icon={<BiLogoTelegram />}
                    />
                </div>
            </section>
        </form>
        </div>
    )
}
