/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

class App extends Component {
  render() {
    let nome = 'Tadeu Cesar';
    let img = 'https://sujeitoprogramador.com/steve.png';

    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text style={{color: 'red', fontSize: 25, margin: 15}}>
          Meu Primeiro app!
        </Text>

        <Image source={{uri: img}} style={{width: 300, height: 300}} />

        <Text style={{fontSize: 25}}>{nome}</Text>
      </View>
    );
  }
}

export default App;
