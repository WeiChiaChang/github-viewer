import React from 'react';
import { connect } from 'react-redux';
import { getUserDetails } from '../actions/index';

class UserProfile extends React.Component {
  constructor() {
    super();
    this.handleUserDetail = this.handleUserDetail.bind(this);
  }

  componentDidMount() {
    this.props.getUserDetails('WeiChiaChang');
  }

  handleUserDetail(event) {
    event.preventDefault();
    if (this.username !== null) {
      this.props.getUserDetails(this.username.value);
      this.username.value = '';
    }
  }

  render() {
    const { user } = this.props;
      return (
        <div>
          { user ? <div>
            <input
              type="text"
              ref={(ref) => this.username = ref}
            />
            <button onClick={this.handleUserDetail}>Search</button>
            <div>
              <h1> User Profile </h1>
              <img alt="" src={user.avatar_url}/>
              <p><a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a></p>
            </div>
          </div> : '...loading'}
        </div>
      )
    }
}

const mapStateToProps = (state) => ({
  user: state
}); // Map the store's state to component's props

const mapDispatchToProps = (dispatch) => ({ 
  getUserDetails: (username) => dispatch(getUserDetails(username)) 
})  // wrap action creator with dispatch method
const App = connect(mapStateToProps, mapDispatchToProps)(UserProfile);

export default App;