class Solution {
    //Function to Reverse Sort the given string.
    ReverseSort(str)
    {
        //your code here
        let result = str.split("").sort().reverse().join("");
        return result;
    }
}
