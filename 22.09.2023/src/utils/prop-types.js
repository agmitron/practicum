import PropTypes from 'prop-types';

export const userPropTypes = PropTypes.shape({
  about: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  cohort: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
})

export const cardPropTypes = PropTypes.shape({
  createdAt: PropTypes.string.isRequired,
  likes: PropTypes.arrayOf(userPropTypes).isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  owner: userPropTypes,
  _id: PropTypes.string.isRequired
})
