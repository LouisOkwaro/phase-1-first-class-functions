function spy() {
    console.log(spy);
  }
  
  function receivesAFunction(fn) {
    fn();
  }
  function returnsANamedFunction() {
    return spy;
  }
  
  function returnsAnAnonymousFunction() {
    return function () {};
  }
  