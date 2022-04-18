function getTodos(){
    // axios.interceptors.request.use(req => {
    //     console.log(`${req.method} ${req.url}`);
    //     // Important: request interceptors **must** return the request.
    //     return req;
    //   });
      
    //   axios.interceptors.response.use(res => {
    //     console.log(res.data.json);
    //     // Important: response interceptors **must** return the response.
    //     return res;
    //   });

    axios.interceptors.request.use(req => {
        console.log(`${req.method} ${req.url}`);
        // Important: request interceptors **must** return the request.
        return req;
      });

      axios.interceptors.response.use(function (response) {
        console.log(response.status);
        console.log("njenkjfnejnfj");
        return response;
      }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      });
    axios({
        method:"get",
        url:"https://jsonplaceholder.typicode.com/todos"
    })
    
    .then(res=>console.log(res));

    
}
document.getElementById("getSomething").addEventListener("click",getTodos)