import React,{ useEffect, useState }  from 'react';
import { StyleSheet, FlatList, Text, View , Button, ActivityIndicator} from 'react-native';

export default function CountryList({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then((response) => response.json())
      .then((json) => setData(json.Countries))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Stats Country Wise</Text>
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
           <Text style={styles.countrytitle}>{item.Country} {item.CountryCode} </Text>
           <Text> New Confirmed = {item.NewConfirmed} Total Confirmed = {item.TotalConfirmed} </Text>
           <Text> New Deaths = {item.NewDeaths} Total Deaths = {item.TotalDeaths} </Text>
           <Text> New Recovered = {item.NewRecovered} Total Recoverd = {item.TotalRecovered} </Text>
           <Text> Last Update = {item.Date}</Text>
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
