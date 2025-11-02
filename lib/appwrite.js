// lib/appwrite.js
import { Account, Avatars, Client, Databases } from 'react-native-appwrite';

const client = new Client()
  .setEndpoint('https://sfo.cloud.appwrite.io/v1')
  .setProject('690434ca0030617f25a2')
  .setPlatform('dev.rpati99.shelfie');

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Export the instances
export { account, avatars, client, databases };
