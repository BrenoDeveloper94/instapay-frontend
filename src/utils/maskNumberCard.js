const maskNumberCard = () =>{
    
    var input = document.querySelector("input[name='card_number']")
    input.setAttribute('maxlength','19')
    var reOne = /[a-z]/g
    var reTwo = /[0-9a-zA-Z]/g
    var foundRegexOne = reOne.test(input.value)
    var foundRegexTwo = reTwo.test(input.value)

    if (foundRegexOne == true || foundRegexTwo == false) {
        input.value = ''
    }
    
    
    input.addEventListener('keypress',()=>{
        var inputLength = input.value.length
        if (inputLength == 4 || inputLength == 9 || inputLength == 14) {
            input.value += ' '
        }
    })
}

export default maskNumberCard