import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const History = ({navigation: {navigate, goBack}, route}) => {
  const [history, setHistory] = useState([]);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@History:Key');
      console.log('json', jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  useEffect(() => {
    setHistory(getData().history);
  }, []);

  useEffect(() => {
    console.log('his', history);
  }, [history]);

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalHeading}>Discount History</Text>
        <Text style={styles.firstIndexHistoryText}>
          Original Price | Discount% | Final Price
        </Text>
        <FlatList
          data={history}
          renderItem={({item}) => {
            return <Text style={styles.listTextItem}>{item}</Text>;
          }}
          keyExtractor={(index) => {
            return index;
          }}
        />

        <TouchableOpacity
          style={{...styles.closeHistory, backgroundColor: '#2196F3'}}
          onPress={goBack}>
          <Text style={styles.textStyle}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#c4c9c4',
    borderRadius: 10,
    paddingTop: 35,
    paddingBottom: 35,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    shadowColor: '#c4c9c4',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeHistory: {
    backgroundColor: '#C1B0B0',
    borderRadius: 5,
    width: 100,
    height: 30,
    elevation: 2,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  firstIndexHistoryText: {
    fontSize: 18,
  },
  header: {
    backgroundColor: '#4A9DC5',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 8.0,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
  headerText: {
    fontSize: 24,
    color: 'white',
  },
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textFields: {
    height: 50,
    width: 280,
    borderColor: 'purple',
    borderWidth: 1,
    paddingLeft: 10,
    fontSize: 18,
    borderRadius: 10,
    color: '#757c75',
  },
  calcBtn: {
    height: 50,
    width: 200,
    backgroundColor: '#4A9DC5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 2,
  },
  calcBtnText: {
    fontSize: 24,
    color: 'white',
  },
  resultText: {
    fontSize: 20,
  },
  finalPriceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  saveBtn: {
    height: 35,
    width: 150,
    backgroundColor: '#403cb8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 2,
  },
  saveBtnText: {
    fontSize: 18,
    color: 'white',
  },
  historyBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  historyBtnText: {
    fontSize: 18,
    color: '#566573',
  },
  listTextItem: {
    fontSize: 18,
  },
});

export default History;
