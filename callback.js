function get(URL, callback) {
    const xhr   = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        const DONE  = 4;
        const OK    = 200;
        
        if (this.readyState == DONE) {
            if (this.status == OK) {
                callback(null, JSON.parse(this.responseText));
            }else{
                callback(new Error(`Se produjo un error ${this.status}`));
            }
        }

        xhr.open('GET', URL);
        xhr.send(null);
    }
}

function _handleError(err) {
    console.log(`Request failed: ${err}`);
    return;
}

get('https://swapi.co/api/people/1/', function onResponse(err, luke) {
 if (err) {
    _handleError(err)
 } else {
     get(luke.homeworld, function onHomeWorldResponse(err, homeworld) {
        luke.homeworld = homeworld;
        //console.log('Luke', luke);
        console.log(`${luke.name} nacio en ${luke.homeworld}`);
     })
     
 }   
});