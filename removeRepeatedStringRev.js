class Solution {
    //Function to reverse a string.
    reverseString(s)
    {
        let revString = s.split("").reverse().join("").replaceAll(" ","");
        let set = new Set(revString);
        let result = Array.from(set).join("");
        return result;
    }
}
