import React,{ useEffect, useState }  from 'react';
import { StyleSheet, FlatList, Text, View , Button, ActivityIndicator} from 'react-native';

export default function StateWiseIndiaStats({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://covid-19india-api.herokuapp.com/v2.0/state_data')
      .then((response) => response.json())
      .then((json) => setData(json[1].state_data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Indian Stats State Wise</Text>
    <Button
          style={styles.button}
          title="Home"
          onPress={() => navigation.navigate('Home')}
    />
    <Text></Text>
    {isLoading ? <ActivityIndicator/> : (
       <FlatList
         data={data}
         keyExtractor={({ id }, index) => id}
         renderItem={({ item }) => (
           <>
           <Text style={styles.countrytitle}>{item.state}</Text>
           <Text>confirmed = {item.confirmed}</Text>
           <Text>active = {item.active} active rate = {item.active_rate}</Text>
           <Text>deaths = {item.deaths} death rate = {item.death_rate}</Text>
           <Text>recovered = {item.recovered} recovery rate = {item.recovered_rate}</Text>
           </>
         )}
       />
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
  },
  countrytitle:{
    fontSize:20,
    fontWeight:"bold"
  },
  button:{
    padding:20
  }
});
