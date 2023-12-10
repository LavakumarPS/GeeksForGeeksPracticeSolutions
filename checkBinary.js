class Solution{
    isBinary(str){
        //code here
        const pattern = /^[01]+$/
        return pattern.test(str);
        
    }
}
