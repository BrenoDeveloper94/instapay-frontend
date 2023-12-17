const dates = (element) => {
    var date = new Date(element)
    var foundDate = Intl.DateTimeFormat('pt-BR',{
        dateStyle: 'short',
        timeStyle: 'short'
    }).format(date)

    return foundDate
}

const dateCompare = (element) => {

    let now = new Date()
    let baseDate = new Date(element)
    var resultSeconds = Math.ceil((now.getTime() - baseDate.getTime()) / (1000))
    
    var testMinutes = resultSeconds / 60
    var testHours = testMinutes / 60
    var testDays = testHours / 24
    var testWeeks = testDays / 7 
    

    if (testMinutes < 60) {

        if (resultSeconds < 60) {
            var result = 'agora'
        } else {
            var result = `há ${Math.trunc(testMinutes)} minuto${testMinutes >= 2 ? 's' : ''}`
        }
        return result

    } else {

        if (testHours < 24) {

            var result = `há ${Math.trunc(testHours)} hora${testHours >= 2 ? 's' : ''}`
            return result

        } else {

            if (testDays < 7) {

                var result = `há ${Math.trunc(testDays)} dia${testDays >= 2 ? 's' : ''}`
                return result
                
            } else {

                var result = `há ${Math.trunc(testWeeks)} semana${testWeeks >= 2 ? 's' : ''}`
                return result

            }

        }

    }

}

export default {
    dates,
    dateCompare
}

