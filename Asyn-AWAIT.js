function get(URL) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            const DONE = 4;
            const OK = 200;
            if (this.readyState === DONE) {
                if (this.readyState === DONE) {
                        if (this.status === OK) {
                            //Todo OK
                            resolve(JSON.parse(this.responseText));
                        } else {
                            //Hubo un error
                            reject(new Error(`Se produjo un error al realizar el request ${this.status}`));
                        }
                    }
            }
        }

        xhr.open('GET', URL);
        xhr.send(null);
    });   
}

function handleError(err) {
    console.log(`Request failed: ${err}`)
  }
  
  async function getLuke() {
    try {
      const response            = await fetch('https://swapi.co/api/people/1/')
      const luke                = await response.json()
      const responseHomeworld   = await fetch(luke.homeworld)
      luke.homeworld            = await responseHomeworld.json()
      console.log(`${luke.name} nació en ${luke.homeworld.name}`)
    } catch (err) {
      handleError(err)
    }
  }
// let luke;
// get('https://swapi.co/api/people/1/')
//     .then((response) => {
//         luke = response;
//         return get(luke.homeworld);
//     })
//    .then((homeworld) => {
//       luke.homeworld = homeworld;
//       console.log(`${luke.name} nació en ${luke.homeworld.name}`);
//     })
//     .catch((err) => _handleError(err))