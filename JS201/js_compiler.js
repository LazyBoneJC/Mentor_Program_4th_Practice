// code
// var a = 10
// function test(){
//   console.log(a)
//   let a
// }
// test()

// js compiler
// testEC: {
//   AO: {
//     a: error,
//   },
//   scopeChain: [testEC.AO, test.[[Scope]]]
//   // => [testEC.AO, globalEC.VO]
// }

// globalEC: {
//   VO: {
//     a: undefined -> 10,
//     test: func,
//   },
//   scopeChain: [globalEC.VO]
// }

// test.[[Scope]] = [globalEC.VO]