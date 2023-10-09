export const baseUrl = "http://localhost:5000/api";

export const postRequest = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  const data = await response.json();
  if (!response.ok) {
    let message;
    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }
    return { error: true, message };
  }
  return data;
};

export const getRequest = async (url) => {
  let response;
  try {
    response = await fetch(url);
  } catch (error) {
    console.log("response:error", error);
  }

  const data = await response.json();
  if (!response.ok) {
    let message = "An error occured...";
    if (data?.message) {
      message = data.message;
    }
    return { error: true, message };
  }
  return data;
};
