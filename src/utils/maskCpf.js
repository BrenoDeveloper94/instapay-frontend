const maskCpf = () =>{
    
    var input = document.querySelector("input[name='cpf']")
    input.setAttribute('maxlength','14')
    var reOne = /[a-z]/g
    var reTwo = /[0-9a-zA-Z]/g
    var foundRegexOne = reOne.test(input.value)
    var foundRegexTwo = reTwo.test(input.value)

    if (foundRegexOne == true || foundRegexTwo == false) {
        input.value = ''
    }
    
    
    input.addEventListener('keypress',()=>{
        var inputLength = input.value.length
        if (inputLength == 3 || inputLength == 7) {
            input.value += '.'
        } else if(inputLength == 11) {
            input.value += '-'
        }
    })
}

export default maskCpf