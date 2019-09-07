import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = ({
  profilePhoto: {
    position: 'relative',
  },
  avatar: {
    margin: 0,
    width: 60,
    height: 60,
  },
});

class UserPhoto extends React.Component {
  render() {
    const { user, classes } = this.props;

    return (
      <div className={classes.profilePhoto}>
        <Avatar
          src={user.photo}
          className={`avatar ${classes.avatar}`}
        />
      </div>
    );
  }
}

UserPhoto.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserPhoto);
