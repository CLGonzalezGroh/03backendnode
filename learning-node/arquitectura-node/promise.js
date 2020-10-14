// const asyncCallback = function (cb) {
//   setTimeout(() => {
//     if (Math.random() < 0.5) {
//       return cb(null, "hellow world");
//     } else {
//       cb(new Error("hola error"));
//     }
//   }, 2000);
// };

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve("hellow world");
    } else {
      reject(new Error("hola error"));
    }
  }, 2000);
});
promise
  .then((msg) => msg.toUpperCase())
  .then((msg) => console.log("Message:", msg))
  .catch((err) => console.error(err));
