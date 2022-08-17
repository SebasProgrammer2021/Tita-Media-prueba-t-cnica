const getCommentsList = async () => {
  const response = await fetch(`https://dummyapi.io/data/v1/post`, {
    headers: {
      "Content-Type": "application/json",
      "app-id": "62fbeb98744123312b2ffa70",
      "Access-Control-Allow-Origin": "*",
    },
    credentials: "same-origin",
  }).then((response) => response.json());
  return response;
};

export default getCommentsList;
