const maskCvv = () =>{
    
    var input = document.querySelector("input[name='security_code']")
    input.setAttribute('maxlength','3')
    var reOne = /[a-z]/g
    var reTwo = /[0-9a-zA-Z]/g
    var foundRegexOne = reOne.test(input.value)
    var foundRegexTwo = reTwo.test(input.value)

    if (foundRegexOne == true || foundRegexTwo == false) {
        input.value = ''
    }
}

export default maskCvv