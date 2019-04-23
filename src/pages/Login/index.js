import React, { Component } from 'react';

import api from '~/services/api';

import {
  Button, ButtonText, Error, Container, Input,
} from './styles';

export default class Login extends Component {
  state = { username: '' };

  handleSubmit = async () => {
    const { username } = this.state;

    try {
      await api.get(`/users/${username}`);

      // TODO IT's OK. Now is necessary to set data in redux (next lesson)
    } catch (error) {
      // TODO  SET ERROR
    }
  };

  render() {
    const { username } = this.state;

    return (
      <Container>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Type your username"
          value={username}
          onChangeText={text => this.setState({ username: text })}
        />
        <Button onPress={this.handleSubmit}>
          <ButtonText>Enter</ButtonText>
        </Button>
      </Container>
    );
  }
}
