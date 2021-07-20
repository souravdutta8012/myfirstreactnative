import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export const storeData = async (value) => {
    try {
        await AsyncStorage.setItem(uuid.v4(), value);
    } catch (e) {
        console.log(e);
    }
}

export const getAllKeys = async () => {
    let keys = [];
    try {
        keys = await AsyncStorage.getAllKeys();
    } catch (e) {
        console.log(e);
    }
    return keys;
}

export const getMultiple = async (keys) => {
    let values;
    try {
        values = await AsyncStorage.multiGet(keys);
        return values;
    } catch (e) {
        console.log(e);
    }
}

export const removeValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log('Deleted');
    } catch (e) {
        console.log(e);
    }
}