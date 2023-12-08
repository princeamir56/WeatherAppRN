import React from 'react'
import {View,StyleSheet} from 'react-native'
import CurrentWeather from './src/components/CurrentWeather'
import UpcommingWeather from './src/components/UpcommingWeather'
const App = () =>{
  return (
    <View style={styles.container}>
      <UpcommingWeather/>
    </View>
  )
}
const styles = StyleSheet.create(
  {
    container:{
      flex : 1
    }
  }
)
export default App