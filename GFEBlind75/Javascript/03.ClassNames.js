function classnames(...args) {
  const classes = [];

  const process = (arg) => {
    if (!arg) return;

    if (typeof arg === 'string') {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      arg.forEach(process);
    } else if (typeof arg === 'object') {
      for (const key in arg) {
        if (arg[key]) classes.push(key);
      }
    }
    // other types ignored
  };

  args.forEach(process);
  return classes.join(' ');
}

// classnames is a commonly-used utility in modern front end applications to conditionally join CSS class names together. If you've written React applications, you likely have used a similar library.

// Implement the classnames function.

// Examples
const res = classnames('foo', 'bar'); // 'foo bar'
console.log(res)
// classNames('foo', { bar: true }); // 'foo bar'
// classNames({ 'foo-bar': true }); // 'foo-bar'
// classNames({ 'foo-bar': false }); // ''
// classNames({ foo: true }, { bar: true }); // 'foo bar'
// classNames({ foo: true, bar: true }); // 'foo bar'
// classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
// Arrays will be recursively flattened as per the rules above.

// classNames('a', ['b', { c: true, d: false }]); // 'a b c'