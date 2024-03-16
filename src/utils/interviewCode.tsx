const messageInABottle = (message: string, source:string[]) => {
    //message === 'hello world'
    //source === 'abc123letsnotuseregex ?'

    source = ['a','b','c']

    sourceObject = {}
    
    source.forEach((char) => {
        if(sourceObject.char){
            sourceObject.char = sourceObject.char + 1 
         
        } else {
            sourceObject.[char] = 1 
        }
    })

//    sourceObject = {
//         h:1,
//         e: 1,
//         l: 3
//     }

    //iterate over the message, and make sure the sourceObject to make sure the key value pairs equate to the number of instances of each character in the message 

    let messageLength = message.length

    

    //loop over the source 
    //each charachter in the source, check against that character's property on the messageObject, 



 
    if(source.includes(message)){
        return true 
    }
    return false 



}
