
import { Context } from "../components/Context";
import { useContext, React } from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';




const Contact = () => {
    const { theme } = useContext(Context);
    const {
            reset,
            register,
            handleSubmit,
            formState: { errors }
        } = useForm();

        const onSubmit = async (data) => {
            const { name, email, message } = data;
            try {
                const templateParams = {
                name,
                email,
                message
              };
              await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
              );
              reset();
              
            } catch (e) {
              console.log(e);
            }
          };    return (
        <>
            <Helmet>
                <title>Contact page</title>
            </Helmet>
            <Header />
            <div className={`contact-container container ${theme}`}>
                <div>
                    <div className="contact-info-container">
                        <div className="contact-info">
                            <h3>Call Me</h3>
                            <span>+201142453766</span>
                        </div>
                        <div className="contact-info">
                            <h3>Email Me</h3>
                            <span>hani.darklt@gmail.com</span>
                        </div>
                        <div className="contact-info">
                            <h3>Location </h3>
                            <span>Egypt - Cairo</span>
                                            </div>
                    </div>
                </div>
                <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate> 
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        {...register('name', {
                            required: { value: true, message: 'Please enter your name' },
                            maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                            }
                        })}
                    />
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                    <input
                        type="email"
                        name="email"
                        {...register('email', {
                            required: true,
                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })}
                        placeholder="Email"
                    />
                    {errors.email && (
                    <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                    <textarea
                        name="textArea"
                        {...register('message', {
                            required: true
                        })}
                        placeholder="Write me your queries"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
