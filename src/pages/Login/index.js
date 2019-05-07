import React, { Component } from 'react';

import api from '~/services/api';

import { ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from '~/store/actions/login';

import {
  Button, ButtonText, Error, Container, Input,
} from './styles';

class Login extends Component {
  state = { username: '' };

  handleSubmit = async () => {
    const { username } = this.state;
    const { loginRequest } = this.props;

    loginRequest(username);

    // This code was implemented in saga
    // const { loginSuccess, loginFailure, navigation } = this.props;
    //
    // try {
    //   await api.get(`/users/${username}`);
    //   loginSuccess(username);
    //   navigation.navigate('Repositories');
    // } catch (error) {
    //   loginFailure();
    // }
  };

  render() {
    const { username } = this.state;
    const { error, loading } = this.props; // This error comes from mapStateToProps

    return (
      <Container>
        {error && <Error>User not exists</Error>}

        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Type your username"
          value={username}
          onChangeText={text => this.setState({ username: text })}
        />
        <Button onPress={this.handleSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <ButtonText>Enter</ButtonText>
          )}
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.loginReducer.error,
  loading: state.loginReducer.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
