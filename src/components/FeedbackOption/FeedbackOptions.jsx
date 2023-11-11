import { List } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map(item => {
        return (
          <List key={item} type="button" onClick={() => onLeaveFeedback(item)}>
            {item}
          </List>
        );
      })}
    </ul>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
