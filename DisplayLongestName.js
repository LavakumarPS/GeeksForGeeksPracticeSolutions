class Solution {

    longest(names,n){
        //code here
        return names.sort((a,b)=>b.length-a.length)[0]
       
    }
}
