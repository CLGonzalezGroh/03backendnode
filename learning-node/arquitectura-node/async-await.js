const functionPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("hellow world");
      } else {
        reject(new Error("hola error"));
      }
    }, 500);
  });

const asyncFunction = async () => {
  try {
    const msg = await functionPromise();
    console.log("Message:", msg);
  } catch (err) {
    console.error(err);
  }
};

asyncFunction();
