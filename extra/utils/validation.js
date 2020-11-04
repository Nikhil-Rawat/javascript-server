import validateEmail from "./helpers"
export default function validateUsers(arr){
    let validCount = 0;
    let invalidCount = 0;
    
    let emailInvalid = []
    let emailValid = []

    arr.forEach(element => {
        if (validateEmail(element.traineeEmail)){
            validCount = validCount + 1;
            emailValid.push(element.traineeEmail);
        }
        else{
            invalidCount +=1;
            emailInvalid.push(element.traineeEmail);
        }

        if(validateEmail(element.reviewerEmail)){
            validCount = validCount + 1;
            emailValid.push(element.reviewerEmail)
        }
        else{
            invalidCount += 1;
            emailInvalid.push(element.reviewerEmail)
        }
        
    })
    console.log(`Valid mails: ${validCount} \n${emailValid}`)
    console.log(`Invalid mails: ${invalidCount} \n${emailInvalid}`)

}

