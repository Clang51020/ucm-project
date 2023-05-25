import React, { useState, createContext } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../Firebase/firebase-config';

export const context = createContext();

export const TestContext = (props) => {
  const [usersList, setUsersList] = useState([]);

  async function getData() {
    const response = await getDocs(collection(db, 'Users'));
    const docList = response.docs.map((doc) => {
      console.log(doc.id, " => ", doc.data());
      return { id: doc.id, data: doc.data() };
    });
    setUsersList(docList);
    return docList;
  }

  const exportValues = { usersList, setUsersList, getData };

  return (
    <context.Provider value={exportValues}>
      {props.children}
    </context.Provider>
  );
};