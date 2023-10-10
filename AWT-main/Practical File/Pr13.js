const fetchFromAPI = () => {
  return new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
      if (success) {
        const data = { message: "Data fetched from the API" };
        resolve(data);
      } else {
        reject(new Error("Failed to fetch data from the API"));
      }
    }, 2000);
  });
};

fetchFromAPI()
  .then((data) => {
    console.log("API call successful:", data);
  })
  .catch((error) => {
    console.error("API call failed:", error.message);
  });
