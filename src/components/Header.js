import PropTypes from 'prop-types';
import Button from './Button';

// destructured prop, so no need to use prop.title
const Header = ({ title, onAdd, showAdd }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button
				color={showAdd ? 'red' : 'green'}
				text={showAdd ? 'Close' : 'Add'}
				onClick={onAdd}
			/>
		</header>
	);
};

// default prop named here, so it does not have to be added to Header component in App()
Header.defaultProps = {
	title: 'Task Tracker',
};

// propTypes used to set type (integer, string, etc.)
Header.propTypes = {
	title: PropTypes.string.isRequired,
};

// CSS styling in JS- use variable for in line prop styling
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// };

export default Header;
