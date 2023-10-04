function CapitalizeWords(arr){
    return arr.map(word=>{
        firstLetter = word.charAt(0).toUpperCase()
        restLetter = word.slice(1).toLowerCase()
        return firstLetter + restLetter
    })
    
}

console.log(CapitalizeWords(["ram", "shyam", "pathan"]))
