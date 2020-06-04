import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Welcome to Covid Tracker</Text>
    <Text style={styles.text}>Stay Home! Stay Safe</Text>
    <Button
          style={styles.button}
          title="World Stats"
          onPress={() => navigation.navigate('World')}
    />
    <Text></Text>
    <Button
          title="Stats Country Wise"
          onPress={() => navigation.navigate('Country')}
    />
    <Text></Text>
    <Button
          title="Indian Stats State Wise"
          onPress={() => navigation.navigate('India')}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  heading:{
    padding:20,
    textAlignVertical:'top',
    fontSize: 25,
    fontWeight: "bold",
    marginBottom:40
  },
  button:{
    alignContent:'center',
    marginTop:20,
    marginBottom:20
  },
  text:{
    padding:20
  }

});
