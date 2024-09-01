// Promise is an object representation of eventual completion or failure of an asynchronous operation.
// When we use fetch it does two things - in local it creates data, onFulfilled[],onRejection[]
//                                      - on network it fetches data and fill onFulfilled pr onRejection array noe these arrays have
// functions which are used to fill data field and we can access data value by .response all server error are recieved in response as request was fulfilled and we recieved something(error) from server

const promise = new Promise((resolve, reject) => {
  let error = true;
  if (!error) {
    resolve({
      data: "Promise resolved and this data is recieved from promise",
    });
  }
  if (error) {
    reject("Promise Rejected");
  }
});

promise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("It will run whether promise is resolved or not");
  });
