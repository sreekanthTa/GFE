const numIntoBinary = n => {
    let result = '';
  
    while (n > 0) {
      if (n % 2 === 1) result += '1';
      else result += '0';
  
      n = Math.floor(n / 2);
    }
  
    return result.split('').reverse().join('');
  };
  
  console.log(numIntoBinary(94));
  


  const convertDeciToNu = s => {
    let res = 0;
  
    for (let i = 0; i < s.length; i++) {
      const digit = parseInt(s[s.length - 1 - i], 10);
      res += digit * Math.pow(2, i);
    }
  
    return res;
  };
  
  console.log(convertDeciToNu('1011110'));
  