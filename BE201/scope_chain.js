var a = 'global';
function test() {
	// var a = 'test scope a';
	var b = 'test scope b';
	console.log(a, b);
	function inner() {
		var b = 'inner scope b';
		console.log(a, b);
	}
	inner();
}

test(); 
// global test scope b
// global inner scope b

console.log(a); // global

// scope chain: inner scope -> test scope -> global scope