import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand';
import type { StoreState } from '../app/@types/types';
import { db } from '../lib/fireBase';

export const store = create<StoreState>()(set =>({
  currentUser: null,
  isLoading: false,
  getUser: async (uid) =>{
    if(!uid) return set({currentUser: null, isLoading: false})

    const docRef = doc(db, 'users', uid)
    const docSnap = await getDoc(docRef)

    try {
      if(docSnap.exists()){
        set({currentUser:docSnap})
      } else{
        set({currentUser: null, isLoading: false})
      }
    } catch (error) {
      console.log(error);
      return set({currentUser: null, isLoading: false})
    }
  },
}))