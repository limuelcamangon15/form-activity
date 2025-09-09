import { useEffect, useState } from 'react'
import './message-form.css'
import MessageEnvelope from '../MessageEnvelope/MessageEnvelope';

export default function MessageForm() {

    const [to, setTo] = useState();
    const [from, setFrom] = useState();
    const [message, setMessage] = useState();
    const [toTouched, setToTouched] = useState(false);
    const [fromTouched, setFromTouched] = useState(false);
    const [messageTouched, setMessageTouched] = useState(false);
    const [show, setShow] = useState(false);

    function verifyTo(e) {
        const errorMessageTo = document.querySelector("#txtErrorTo");
        const trimmedTo = e.target.value.trim();
        const size = trimmedTo.length;

        setTo("");
        setShow(false);

        if (size <= 0) {
            errorMessageTo.innerHTML = "To cannot be empty"
        }
        else if (size < 2) {
            errorMessageTo.innerHTML = "Minimum of atleast 2 characters"
        }
        else {
            errorMessageTo.innerHTML = "";
            setTo(trimmedTo);
        }
    }

    function verifyFrom(e) {
        const errorMessageFrom = document.querySelector("#txtErrorFrom");
        const trimmedFrom = e.target.value.trim();
        const size = trimmedFrom.length;

        setFrom("");
        setShow(false);

        if (size <= 0) {
            errorMessageFrom.innerHTML = "From cannot be empty"
        }
        else if (size < 2) {
            errorMessageFrom.innerHTML = "Minimum of atleast 2 characters"
        }
        else {
            errorMessageFrom.innerHTML = "";
            setFrom(trimmedFrom);
        }
    }

    function verifyMessage(e) {
        const errorMessage = document.querySelector("#txtErrorMessage");
        const trimmedMessage = e.target.value.trim();
        const size = trimmedMessage.length;

        setMessage("");
        setShow(false);

        if (size <= 0) {
            errorMessage.innerHTML = "Message cannot be empty"
        }
        else if (size < 10) {
            errorMessage.innerHTML = "Minimum of atleast 10 characters"
        }
        else if (size > 100) {
            errorMessage.innerHTML = "Maximum of 100 characters"
        }
        else {
            errorMessage.innerHTML = "";
            setMessage(trimmedMessage);
        }
    }

    function validateToFocus() {
        if (!to) setToTouched(true)
    }

    function validateFromFocus() {
        if (!from) setFromTouched(true)
    }

    function validateMessageFocus() {
        if (!message) setMessageTouched(true)
    }

    useEffect(() => {
        const errorMessageTo = document.querySelector("#txtErrorTo");
        const errorMessageFrom = document.querySelector("#txtErrorFrom");
        const errorMessage = document.querySelector("#txtErrorMessage");

        if (toTouched) {
            errorMessageTo.innerHTML = "To cannot be empty";
        }

        if (fromTouched) {
            errorMessageFrom.innerHTML = "From cannot be empty";
        }

        if (messageTouched) {
            errorMessage.innerHTML = "Message cannot be empty";
        }


    }, [toTouched, fromTouched, messageTouched]);

    return (
        <>
            <div className="message-form">
                <h3>Message a friend!</h3>
                <h5>Let them know they are loved!</h5>
                <div className="input-group">
                    <input type="text" id='txtTo' placeholder='To' onBlur={() => validateToFocus()} onInput={(e) => verifyTo(e)} />
                    <p className='error-message' id='txtErrorTo'></p>
                </div>

                <div className="input-group">
                    <input type="text" id='txtFrom' placeholder='From' onBlur={() => validateFromFocus()} onInput={(e) => verifyFrom(e)} />
                    <p className='error-message' id='txtErrorFrom'></p>
                </div>

                <div className="input-group">
                    <textarea type="text" id='txtMessage' placeholder='Message' onBlur={() => validateMessageFocus()} onInput={(e) => verifyMessage(e)} />
                    <p className='error-message' id='txtErrorMessage'></p>
                </div>

                {to && from && message ? <button className='btn-send' onClick={() => setShow(true)}>Send</button> : <button className='btn'>Send</button>}

            </div>

            <MessageEnvelope to={to} from={from} message={message} show={show} />
        </>
    )
}