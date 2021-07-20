import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import uuid from 'react-native-uuid';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { storeData, getAllKeys, getMultiple, removeValue } from './util/async-storage'
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    handleFetchTask();
  }, [])

  const handleFetchTask = async () => {
    let init = [];
    let keys = await getAllKeys();
    let values = await getMultiple(keys);
    values.forEach(value => {
      init.push(JSON.parse(value[1]));
    });
    setTaskItems(init);
  }

  const handleAddTask = () => {
    if (task) {
      Keyboard.dismiss();
      const d = new Date();
      let jsonData = {
        id: uuid.v4(),
        taskName: task,
        time: `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`,
      }
      storeData(jsonData);
      setTask(null);
      handleFetchTask();
    }
  }

  const completeTask = (id) => {
    removeValue(id);
    handleFetchTask();
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
          Today's tasks
        </Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <Task key={index} text={item} parentCompleteTask={(id) => completeTask(id)} />
              )
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'}
          value={task}
          onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text>
              <View>
                <FontAwesomeIcon icon={faPlus} size={20} color="blue" />
              </View>
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: 'blue',
    borderWidth: 0.5,
    width: 300,
    // shadow style
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 5,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 0.5,
    // shadow style
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 5,
  },
});
