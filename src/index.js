import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>28. Implement strStr()
</h1>
<div>
LeetCode Problems. Find the needle in the haystack
</div>
`;

var strStr = function (haystack, needle) {
  //if the needle is an empty string...
  if (needle === "") {
    //just return zero.
    return 0;
  }
  /**
   * Search() will look for the first instance of something.
   * So, I use it here to return that value. Easy Peasy.
   */
  console.log(haystack.search(needle));
  return haystack.search(needle);
};

strStr("aasld", "as");
