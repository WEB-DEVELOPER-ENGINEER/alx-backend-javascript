export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve("hi");
    } else {
      reject("bye");
    }
  });
}
