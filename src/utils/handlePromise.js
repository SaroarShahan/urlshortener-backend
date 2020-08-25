module.exports = function(promise) {
    return new Promise(function(resolve, reject) {
        let data = null;
        let error = null;

        promise
            .then(d => {
                data = d
                resolve([data, error]) 
            })
            .catch(err => {
                error = err;
                resolve([data, error])
            })
    })
}