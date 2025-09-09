import './message-envelope.css'

export default function MessageEnvelope({ to, from, message, show }) {
    return (
        <>
            <div className="wrapper">
                <div className={`lid one ${show ? 'open-one' : ''}`}></div>
                <div className={`lid two ${show ? 'open-two' : ''}`}></div>
                <div className="envelope"></div>
                <div className={`letter ${show ? 'show-letter' : ''}`}>
                    <h3 id='to'>To: {to}</h3>
                    <h3 id='from'>From: {from}</h3>
                    <p>{message}</p>
                </div>
            </div>
        </>
    )
}