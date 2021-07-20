import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(value.id, jsonValue);
        console.log('Added data');
    } catch (e) {
        console.log(e);
    }
}

export const getAllKeys = async () => {
    let keys = [];
    try {
        keys = await AsyncStorage.getAllKeys();
        console.log('Fetched keys');
    } catch (e) {
        console.log(e);
    }
    return keys;
}

export const getMultiple = async (keys) => {
    let values;
    try {
        values = await AsyncStorage.multiGet(keys);
        console.log('Fetched data');
        return values;
    } catch (e) {
        console.log(e);
    }
}

export const removeValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log('Deleted data');
    } catch (e) {
        console.log(e);
    }
}

export const clearAll = async () => {
    try {
        await AsyncStorage.clear();
        console.log('Deleted all data')
    } catch (e) {
        console.log(e);
    }
}