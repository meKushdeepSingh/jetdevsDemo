import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsyncItem = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log('Error', e);
  }
};

export const getAsyncItem = async (key: string) => {
  let data = null;
  try {
    const res: any = await AsyncStorage.getItem(key);
    data = JSON.parse(res);
  } catch (e) {
    console.log('Error', e);
  }
  console.log('getAsyncItem', key, data);
  return data;
};

export const removeAsyncItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log('Error', e);
  }
  console.log(' removeAsyncItem Done.', key);
};
