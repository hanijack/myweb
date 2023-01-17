import { Context } from "../components/Context";
import { useContext ,useState} from 'react';

const Contact = () => {
    const { form, setForm } = useState({
        email: " ",
        password: " ",
        textArea: " ",
    });
    function toggleForm(e) {
        let { name, value } = e.target;
        setForm((prev) => ({
        ...prev,
        [name]: value,
        }));
    }
    function submitForm(e) {
        e.preventDefault();
    }
    const { theme } =useContext(Context);
    return (
        <div className={`contact-container ${theme}`}>
            <form action="https://formsubmit.co/hani.darklt@gmail.com" method="Post">
                <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={(e) => toggleForm(e)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={(e) => toggleForm(e)}
                    required
                />
                <input
                    type="text"
                    name="textArea"
                    value={form.textArea}
                    onChange={(e) => toggleForm(e)}
                />
                <button onClick={(e) =>{submitForm(e)}}>Submit</button>
            </form>
        </div>
    );
};

export default Contact;





