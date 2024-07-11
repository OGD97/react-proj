import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.reactproject.aora',
    projectId: '668d2839003339e6ccc9',
    databaseId: '668d2a0a001bd660fe56',
    userCollectionId: '668d2a42001264fd573b',
    videoCollectionId: '668d2a65001bf5159ffe',
    storageId: '668d2c2d0023eee3d7e0',



}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.



    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client);

export const createUser = async (email, password, username) => {

    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        
        if(!newAccount) throw Error;

        const avatarURL = avatars.getInitials(username)

        await signIn(email, password);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                password,
                avatar: avatarURL
            }
        )
        return newUser;
    } 
    catch (error) {
        console.log(error);
        throw new Error(error);
    }

//     // TEST Register User
// account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
// .then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });
}

export async function signIn(email, password){
    try {
        const session = await account.createEmailPasswordSession(email, password)
        
        return session;

    } catch (error) {
        throw new Error(error);
    }
}