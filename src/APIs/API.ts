import axios from "axios";

export const makeSearch = async (text: string) => {
  const options = {
    method: "POST",
    url: "https://open-ai21.p.rapidapi.com/chatgpt",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "73452e0975mshf95ab79883098b0p119f1djsnf35fc8d34115",
      "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
    },
    data: {
      messages: [
        {
          role: "user",
          content: text,
        },
      ],
      web_access: true,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
