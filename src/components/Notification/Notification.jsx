import PropTypes from 'prop-types';
function Notification({ message }) {
  return <>{message}</>;
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
