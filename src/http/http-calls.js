import {makeGetRequest, makePostRequest} from './http-service'

export const trending = () => {
  return new Promise((resolve, reject) => {
      makeGetRequest(
          "https://api.giphy.com/v1/gifs/trending",
          false,
          { "api_key" : "RIU3oWjqWS24P7aDC9ZD2ygypGYOIXLC" }
      )
      .then(res => {
          resolve(res.data);
        })
        .catch(e => {
          console.log("API call error: ", e);
          reject(e);
        });
  });
};

export const search = (input) => {
  return new Promise((resolve, reject) => {
    makeGetRequest(
        "https://api.giphy.com/v1/gifs/search",
        false,
        {
          "api_key" : "RIU3oWjqWS24P7aDC9ZD2ygypGYOIXLC",
          "q" : input
        }
    )
    .then(res => {
        resolve(res.data);
      })
      .catch(e => {
        console.log("API call error: ", e);
        reject(e);
      });
  });
}

export const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    makePostRequest(
      "https://upload.giphy.com/v1/gifs",
      false,
      {
        "api_key" : "RIU3oWjqWS24P7aDC9ZD2ygypGYOIXLC"
      },
      file
    )
    .then(res => {
      resolve(res);
    })
    .catch(e => {
      console.log("API call error: ", e);
      reject(e);
    });
  });
}

export const previewFile = (id) => {
  return new Promise((resolve, reject) => {
    makeGetRequest(
      "https://api.giphy.com/v1/gifs/${" + id + "}",
      false,
      {
        "api_key" : "RIU3oWjqWS24P7aDC9ZD2ygypGYOIXLC"
      }
    )
    .then(res => {
      resolve(res);
    })
    .catch(e => {
      console.log("API call error: ", e);
      reject(e);
    });
  });
}