const constructLps = (arr, lps) => {
    lps[0] = 0;
    let i = 1;
    let j = 0;
  
    while (i < arr.length) {
      if (arr[i] === arr[j]) {
        j++;
        lps[i] = j;
        i++;
      } else {
        if (j !== 0) {
          j = lps[j - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }
  };
  
  function search(pat, txt) {
    let m = pat.length;
    let n = txt.length;
    const lps = new Array(m).fill(0);
    constructLps(pat, lps);
  
    let i = 0;
    let j = 0;
    const result = [];
  
    while (i < n) {
      if (txt[i] === pat[j]) {
        i++;
        j++;
        if (j === m) {
          result.push(i - j);  // ✅ Correct match position
          j = lps[j - 1];      // 🔁 continue searching
        }
      } else {
        if (j !== 0) {
          j = lps[j - 1];
        } else {
          i++;
        }
      }
    }
  
    return result;
  }
  
  // ✅ Example
  const txt = "aabaacaadaabaaba";
  const pat = "aaba";
  
  const res = search(pat, txt);
  console.log(res.join(" "));  // Output: 0 9 12
  