const asyncCallback = function (cb) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return cb(null, "hellow world");
    } else {
      cb(new Error("hola error"));
    }
  }, 2000);
};
