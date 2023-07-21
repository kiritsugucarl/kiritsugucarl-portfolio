import './Contact.css'

const Contact = () =>{
    return(
        <section id='contact' className='contact container section'>
            <h2 className='contact__title'>Did I Get Your Attention?</h2>
            <p className='contact__description'>
                Whether you are starting a project, business inquiries, or you just want to say hi, my inbox will always be open so feel free to reach out and I will get back to you as soon as possible.
            </p>
            <a className='contact__btn btn red-btn' href='mailto:cdbpineda02@gmail.com' target='_blank' rel="noopener noreferrer">Reach Out</a>
        </section>
    )
}

export default Contact