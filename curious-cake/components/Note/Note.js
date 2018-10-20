import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';

const touchNote = name => {
  Alert.alert('you pressed the note ', name);
}

const Note = props => {
  //color, width, name, sound
  const {color, width, name}=props;

  return(
  <TouchableOpacity style={[styles.noteContainer, {width, backgroundColor: color}]} onPress={() => touchNote(name)} >
    <Text style={styles.note}>{name}</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  noteContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 60,
    borderRadius: 10,
    marginBottom: 7
  },
  note:{
    fontSize: 20,
    color: 'white'
  }
});

export default Note;