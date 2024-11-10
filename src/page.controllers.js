"use client"
// import React, { useState, useEffect } from "react";
import { 
    doc, 
    setDoc, 
    addDoc, 
    getDoc, 
    collection, 
    querySnapshot, 
    query, 
    onSnapshot, 
    deleteDoc, 
} from "firebase/firestore"; 
import {db} from "./firebaseConfig"

// adds location of bathroom to database (specific fields of each document TBD)
export const uploadLocation = async (newLocation) => {
    // Validate input fields
    if (
        !newLocation.name ||
        !newLocation.address ||
        !newLocation.geolocation?.latitude ||
        !newLocation.geolocation?.longitude ||
        !newLocation.open ||
        !newLocation.closed
      ) {
        console.error("Invalid newLocation object. Missing required fields.");
        return;
      }
    try {
      const locRef = await addDoc(collection(db, "bathrooms"), {
        name: newLocation.name,
        address: newLocation.address,
        geolocation: {
            latitude: newLocation.geolocation.latitude,
            longitude: newLocation.geolocation.longitude,
        },
        description: newLocation.description,
        open_time: newLocation.open,
        closed_time: newLocation.closed
      });
      console.log("Document written with ID: ", locRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
};

// adds reviews to database
export const uploadReview = async (newReview) => {
    try {
        const revRef = await addDoc(collection(db, "reviews"), {
          account: newReview.account,
          bathroom: newReview.bathroom,
          rating: newReview.rating,
          description: newReview.description
        });                                                             
        console.log("Document written with ID: ", locRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
    }
};

// deletes any type of document
export const deleteDoc = async (collectionName, docId) => {
    try {
      await deleteDoc(doc(db, collectionName, docId));
      console.log(`Document with ID ${docId} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
};

// edits reviews
export const updateReview = async (newReview) => {
    try {
        const revRef = await addDoc(collection(db, "reviews"), {
          account: newReview.account,
          bathroom: newReview.bathroom,
          rating: newReview.rating,
          description: newReview.description
        });                                                             
        console.log("Document written with ID: ", locRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
    }
};
