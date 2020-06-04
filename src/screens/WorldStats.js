import React,{ useEffect, useState }  from 'react';
import { StyleSheet, FlatList, Text, View , Button, ActivityIndicator} from 'react-native';

export default function WorldStats({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then((response) => response.json())
      .then((json) => setData(json.Global))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Welcome to World Stats</Text>
    <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
    />
    <Text></Text>
    {isLoading ? <ActivityIndicator/> : (
      <>
    <Text style={styles.texts}>NewConfirmed = {data.NewConfirmed}</Text>
    <Text style={styles.texts}>Total confirmed = {data.TotalConfirmed}</Text>
    <Text style={styles.texts}>NewDeaths = {data.NewDeaths}</Text>
    <Text style={styles.texts}>Total Deaths = {data.TotalDeaths}</Text>
    <Text style={styles.texts}>New Recovered = {data.NewRecovered}</Text>
    <Text style={styles.texts}>Total Recovered = {data.TotalRecovered}</Text>
    </>
    )}
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
    fontWeight: "bold"
  },
  texts:{
    padding:20,
    fontSize: 25,
    fontWeight: "bold"
  }
});
