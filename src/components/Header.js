import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onShowAddTask }) => {
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onShowAddTask}/>
        </header>
    )
};

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// css in js
const headingStyle = {
    color: 'red',
    backgroundColor: 'grey',
}

export default Header;