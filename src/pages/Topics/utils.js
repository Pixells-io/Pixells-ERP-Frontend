import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function saveNewTopic(data) {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}topics/create-topic`,
    {
      method: "POST",
      body: data,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function getUser() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}auth/get-user`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function saveNewCategory(data) {
  const info = {
    name: data.get("name"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}topics/create-category`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function getCategories() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}topics/get-categories`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getTopics(id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}topics/get-topics/${id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getTopic(id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}topics/get-topic/${id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getTopicsData() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}topics/get-topics-data`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function multiLoaderTopics({ params }) {
  const id = params.id;
  const [categories, user, topics, analytic] = await Promise.all([
    getCategories(),
    getUser(),
    getTopics(id),
    getTopicsData(),
  ]);

  return json({ categories, user, topics, analytic });
}

export async function multiLoaderTopics2() {
  const [categories, user] = await Promise.all([getCategories(), getUser()]);

  return json({ categories, user });
}

export async function storeLike(data) {
  const info = {
    topic_id: data.get("topic"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}topics/like-topic`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function storeLikeComment(data) {
  const info = {
    comment_id: data.get("comment"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}topics/comment-topic-like`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function storeFavorite(data) {
  const info = {
    topic_id: data.get("topic"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}topics/topics-favorite-save`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function storeComment(data) {
  const info = {
    topic_id: data.get("topic"),
    comment: data.get("comment"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}topics/comment-topic`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function getTopicSaved() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}topics/get-topics-favorites`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}
