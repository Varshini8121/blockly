import { v4 } from "uuid";
import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { message } from "antd";
export const DBCollectionName = "BlocklyStore";
export const saveToFirebase = async (name: string, data: string) => {
  try {
    const docRef = await addDoc(collection(db, DBCollectionName), {
      data,
    });
    console.log("Document written with ID: ", docRef.id);
    message.success("Saved successfully !");
  } catch (error) {
    message.error("Save failed !");
  }
};

export const readData = async () => {
  try {
    let data;
    await getDocs(collection(db, DBCollectionName)).then((querySnapshot) => {
      data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    });
    return data;
  } catch (error) {
    message.error("Error reading data !");
  }
};

export const updateData = async (docId: string, newData: string) => {
  await updateDoc(doc(db, DBCollectionName, docId), { data: newData })
    .then(() => {
      message.success("Document updated successfully !!");
    })
    .catch((error) => {
      message.error("Error updating document !!");
    });
};
