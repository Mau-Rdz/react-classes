//@ts-nocheck
import { useRef } from 'react'
import { db } from '../firebase.ts'
import { doc, getDoc, getDocs, collection, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'

export interface User {
    id: number,
    name: string,
    role: string,
    address: string,
    salary: number,
}

export interface UserDoc {
    name: string,
    role: string,
    address: string,
    salary: number,
}

const users = collection(db, "users")

export const addUsers = async (user: UserDoc) => {
    const userRef = await addDoc(users, user)
    return userRef.id
}
export const getUsers = async () => {
    const userRef = await getDocs(users)
    return userRef.docs
}
export const getUser = async (id: string) => {
    const userRef = await getDoc(doc(db, "users", id))
    return userRef.data()
}
export const updateUsers = async (id: string, user: UserDoc) => {
    const userRef = doc(db, "users", id)
    await updateDoc(userRef, user)
}
export const deleteUsers = async (id: string) => {
    const userRef = doc(db, "users", id)
    await deleteDoc(userRef)
}