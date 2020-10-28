import validateEmail from './helpers';
export default function validateUsers(arr: any) {
    let validCount = 0;
    let invalidCount = 0;
    const emailInvalid: string[] = [];
    const emailValid: string[] = [];

    arr.forEach(element  => {
        if (validateEmail(element.traineeEmail)) {
            validCount = validCount + 1;
            emailValid.push(element.traineeEmail);
        }
        else {
            invalidCount += 1;
            emailInvalid.push(element.traineeEmail);
        }

        if (validateEmail(element.reviewerEmail)) {
            validCount = validCount + 1;
            emailValid.push(element.reviewerEmail);
        }
        else {
            invalidCount += 1;
            emailInvalid.push(element.reviewerEmail);
        }
    });
    console.log('validUser:' , validCount, '\n', emailValid);
    console.log('invalidUser:', invalidCount, '\n', emailInvalid);
}

