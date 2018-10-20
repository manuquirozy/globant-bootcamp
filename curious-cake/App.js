import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Note from './components/Note/Note';
import {Constants, Audio} from 'expo';

const handlePlaySoundAsync = async (note) => {
await Audio.setIsEnabledAsync(true);
let sound = new Audio.Sound();
await sound.loadAsync({
uri: `https://raw.githubusercontent.com/NestorPlasencia/sound/master/${note}.mp3`,
});
await sound.playAsync();
};

const notes = [
  {
    name: "C",
    color: "purple"
  },
    {
    name: "D",
    color: "red"
  },
    {
    name: "E",
    color: "orange"
  },
    {
    name: "F",
    color: "yellow"
  },
    {
    name: "G",
    color: "green"
  },
    {
    name: "A",
    color: "blue"
  },
    {
    name: "B",
    color: "lightblue"
  },
    {
    name: "C",
    color: "purple"
  }
];

let width=330;

const App = () => {
  return(
  <View style={styles.container}>
    {notes.map(note => {
      width = width - 30;
      return(
        <Note name={note.name} color={note.color} width={width}/>
      )
    })}
  </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;