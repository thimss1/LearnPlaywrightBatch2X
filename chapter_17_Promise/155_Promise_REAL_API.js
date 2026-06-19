let apiCall = new Promise(function (resolve, reject) {

    resolve({ 
        status: 200, body: "User data"
    })

});


apiCall.then(function (response) {
    console.log(response.status);
    

}).catch(function (reject) {  // this runs if something went wrong

})


// .then() runs ONLY when the Promise is resloved successfully