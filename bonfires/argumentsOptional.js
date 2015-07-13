function add() {
  var args = Array.slice(arguments);

  if(args.every( function(n) { return typeof(n) === 'number'; } )) {
      if( args.length > 1 ) {
          return args[0] + args[1];
      } else {
          return function(i) {
              return add(args[0],i);
        };
      }
  }
}

add(2,3);