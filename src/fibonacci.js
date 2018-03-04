//---------- FORMA 1 -----------------------//
function fibonacci(){
	let a=0, b=1
	//Closure
	return{
		next: function() {
		 let f= a
		 a = b
		 b = f + a
		 return{ value: f, done: false}
		}
	}
}

//const fibo = fibonacci()
const fibo = {};
fibo[Symbol.iterator] = fibonacci 

let i=0
for (let value of fibo) {
	console.log(value)
	i++
	if(i>20) break
}