// import { Account, Avatars, Client } from 'react-native-appwrite';

// // Create AppWrite client instance
// export const client = new Client()
//   .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT) // Your AppWrite endpoint
//   .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
//   .setPlatform('dev.rpati99.shelfie');// Replace with your app bundle ID

// export const account = new Account(client)
// export const avatars = new Avatars(client)

import { Account, Avatars, Client } from 'react-native-appwrite';

// Temporary hardcoded values for testing
export const client = new Client()
  .setEndpoint('https://sfo.cloud.appwrite.io/v1')
  .setProject('690434ca0030617f25a2')
  .setPlatform('dev.rpati99.shelfie');

export const account = new Account(client);
export const avatars = new Avatars(client);