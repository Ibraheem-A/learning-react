const Button = ({color, text}) => {
    return (
    <button style={{backgroundColour:color}} className='btn'>{text}</button>
    )
}


Button.defaultProps = {
    color: 'black',
    text: 'button',
}

export default Button;