import React, { Component } from 'react';
import {
  Spinner,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button,
  Snackbar
} from 'react-mdl';
import './Cards.css';

class Cards extends Component {
  state = {
    users: [],
    IS_LOADED: false,
    IS_OFFLINE: false,
    IS_ONLINE: false
  };

  componentDidMount() {
    window.addEventListener('online', this._showOnlineSnackbar);
    window.addEventListener('offline', this._showOfflineSnackbar);

    fetch('/users.json', {
      method: 'get',
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => {
        // In this case, we check the content-type of the response
        if (response.headers.get('content-type').match(/application\/json/)) {
          return response.json();
        }
        return response;
      })
      .then(data => {
        this.setState({
          users: data.data,
          IS_LOADED: true
        });
        localStorage.setItem('poppular-users', JSON.stringify(data.data));
      })
      .catch(err => {
        this.setState(() => {
          return {
            posts: JSON.parse(localStorage.getItem('poppular-users')),
            isLoaded: true
          };
        });
      });
  }

  _showOfflineSnackbar = () => {
    this.setState({
      IS_OFFLINE: true,
      IS_ONLINE: false
    });
  };

  _showOnlineSnackbar = () => {
    this.setState({
      IS_OFFLINE: false,
      IS_ONLINE: true
    });
  };

  _hideOfflineSnackbar = () => {
    this.setState({
      IS_OFFLINE: false
    });
  };

  _hideOnlineSnackbar = () => {
    this.setState({
      IS_ONLINE: false
    });
  };

  render() {
    return (
      <div id="poppular-user-container">
        {!this.state.IS_LOADED && <Spinner />}

        {this.state.users.map(user => (
          <Card
            className="custom-card"
            key={user.id}
            shadow={0}
            style={{ width: '300px', height: '400px', margin: '20px' }}
          >
            <CardText>
              <div className="point-detail">
                <div className="number">
                  {user.attributes.friendships_count}
                </div>
                <div className="label">friends</div>
              </div>
              <div className="point-detail">
                <div className="number">{user.attributes.points_count}</div>
                <div className="label">travel swag</div>
              </div>
            </CardText>
            <CardTitle
              expand
              style={{
                position: 'relative',
                background: 'url(' + user.attributes.avatar + ') center / cover'
              }}
            >
              <div className="ribbon">{user.attributes.first_name}</div>
            </CardTitle>
            <CardActions border>
              <Button colored>Add Friend</Button>
            </CardActions>
          </Card>
        ))}

        <Snackbar
          active={this.state.IS_OFFLINE}
          onTimeout={this._hideOfflineSnackbar}
          action="Close"
        >
          You{"'"}re now *OFFLINE*
        </Snackbar>

        <Snackbar
          active={this.state.IS_ONLINE}
          onTimeout={this._hideOnlineSnackbar}
          action="Close"
        >
          You{"'"}re now *ONLINE*
        </Snackbar>
      </div>
    );
  }
}

export default Cards;
