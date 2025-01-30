import AsyncStorage from '@react-native-async-storage/async-storage';
import { CACHE_EXPIRATION_HOURS } from '../api/apiConfig';

export const clearAllStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Storage successfully cleared!');
  } catch (error) {
    console.error('Error clearing storage:', error);
  }
};

export const cleanupOldCache = async () => {
  const keys = await AsyncStorage.getAllKeys();
  const oldestAllowedTimestamp =
    Date.now() - CACHE_EXPIRATION_HOURS * 60 * 60 * 1000;

  for (const key of keys) {
    const item = await AsyncStorage.getItem(key);
    if (item) {
      const { timestamp } = JSON.parse(item);
      if (timestamp < oldestAllowedTimestamp) {
        await AsyncStorage.removeItem(key);
      }
    }
  }
};
