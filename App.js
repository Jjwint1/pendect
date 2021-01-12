import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Articles from './components/Articles';



const loadFonts = () => {
  return Font.loadAsync({
    "Optima-Bold": require('./assets/fonts/Optima-Bold.ttf'),
    "Optima": require('./assets/fonts/Optima.ttf')
  });
};



export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [data, setData] = useState([]);


  useEffect(()=> {
    fetch('http://192.168.0.12:5000/stories')
    .then((response) => response.json())
    .then((response) => setData(response))
    .catch((err) => console.error(err))
    .finally(() => setLoading(false))
  }, []);

  console.log(data);


  if(!fontLoaded) {
    return (
      <AppLoading 
        startAsync={loadFonts}
        onError={console.warn}
        onFinish={() => setFontLoaded(true)}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pendect</Text>
      <StatusBar style="auto" />
      {isLoading? <ActivityIndicator /> : (
        <Articles articles={data} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(255, 253, 249)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    paddingTop: 60,
  },

  title: {
    textTransform: 'uppercase',
    fontFamily: 'Optima-Bold',
    fontSize: 35,
    paddingBottom: 20,
    letterSpacing: 5,
  },

});
