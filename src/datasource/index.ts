import admin from 'firebase-admin'
import get from '@utils/variables'

export default class FirebaseSingleton {

    private static instance: FirebaseSingleton;
    private app: admin.app.App

    constructor(){
         this.app = admin.initializeApp({
             databaseURL: get('FB_DATABASE_URL')
         })   
    }

    public static getInstance(): FirebaseSingleton {
        if(!FirebaseSingleton.instance){
            FirebaseSingleton.instance = new FirebaseSingleton()
        }
        return FirebaseSingleton.instance
    }
    
    public async get(ref: string){
        const snapshot = await this.app.database().ref(ref).once('value')
        return snapshot.val()
    }

}


