import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import {
  Communities,
  Content,
  Events,
  Galleries,
  Speakers,
  ThrowbackEvent,
} from "./schema";

const firebaseConfig = {
  apiKey: process.env["FIREBASE_API_KEY"],
  databaseURL: process.env["FIREBASE_DATABASE_URL"],
  projectId: process.env["FIREBASE_PROJECT_ID"],
};

const app = initializeApp(firebaseConfig);

export async function getCommunities(): Promise<Communities | Error> {
  try {
    const dbRef = ref(getDatabase());
    const data = await get(child(dbRef, "community"));
    if (data.exists()) {
      return data.val() as Communities;
    } else {
      throw new Error("Community data not found");
    }
  } catch (error) {
    return Error(undefined);
  }
}

export async function getContent(): Promise<Content | Error> {
  try {
    const dbRef = ref(getDatabase());
    const data = await get(child(dbRef, "content"));
    if (data.exists()) {
      return data.val() as Content;
    } else {
      throw new Error("Content data not found");
    }
  } catch (error) {
    return Error(undefined);
  }
}

export async function getSpeakers(): Promise<Speakers | Error> {
  try {
    const dbRef = ref(getDatabase());
    const data = await get(child(dbRef, "speaker"));
    if (data.exists()) {
      return data.val() as Speakers;
    } else {
      throw new Error("Speaker data not found");
    }
  } catch (error) {
    return Error(undefined);
  }
}

export async function getGalleries(): Promise<Galleries | Error> {
  try {
    const dbRef = ref(getDatabase());
    const data = await get(child(dbRef, "gallery"));
    if (data.exists()) {
      return data.val() as Galleries;
    } else {
      throw new Error("Gallery data not found");
    }
  } catch (error) {
    return Error(undefined);
  }
}

export async function getEvents(): Promise<Events | Error> {
  try {
    const dbRef = ref(getDatabase());
    const data = await get(child(dbRef, "gallery"));
    if (data.exists()) {
      return data.val() as Events;
    } else {
      throw new Error("Event data not found");
    }
  } catch (error) {
    return Error(undefined);
  }
}

export async function getThrowbackEvent(
  year: number
): Promise<ThrowbackEvent | Error> {
  try {
    const dbRef = ref(getDatabase());
    const data = await get(child(dbRef, `jdd${year}`));
    if (data.exists()) {
      return data.val() as ThrowbackEvent;
    } else {
      throw new Error("Event data not found");
    }
  } catch (error) {
    return Error(undefined);
  }
}
