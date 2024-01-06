const Notification = ({ message }) => {

    if (message === null) {
        return null
    }

    const color = message.startsWith("Information") ? 'red' : 'green'

    const notificationStyle = {
        color: color,
        fontSize: 21,
        borderRadius: 10,
        border: '2px solid black',
        backgroundColor: 'lightgray'
    }
    
    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification