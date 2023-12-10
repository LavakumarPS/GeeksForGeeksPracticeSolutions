class Solution 
{
    //Function to check if a string is Isogram or not.
    isIsogram(s)
    {
        // code here
        let set = new Set(s);
        let str = Array.from(set).join("");
        if(s==str){
            return 1;
        }
        return 0;
        
    }
}
