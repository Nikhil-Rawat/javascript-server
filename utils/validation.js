let user = [
    {
        traineeEmail: 'nikhil.rawat@successive.tech',
        reviewerEmail: 'shalu.sharma@successive.tech',
    },
    {
        traineeEmail: 'aviral.swarankar@successive.tech',
        reviewerEmail: 'avinash.dhubey@yahoo.com'
    },
    {
        traineeEmail: 'akhil.sharma@gmail.com',
        reviewerEmail: 'shalu.sharma@successive.tech'
    }
    ]

function validateEmail(email){
    return (/@successive.tech/.test(email))
}

validateEmail('nikhil.rawat@successive.tech')

function validateUsers(arr){
    let userEmail = []
    
    user.forEach(function({traineeEmail:emailTrainee,reviewerEmail:emailReviewer})
    {
        userEmail.push(emailTrainee)
        userEmail.push(emailReviewer)
    }
    )

    let validCount = 0;
    let invalidCount = 0;

    let emailValid = [];
    let emailInvalid = [];

    userEmail.forEach(element => {if(validateEmail(element)){
        validCount +=1;
        emailValid.push(element);
    }
    else{
        invalidCount += 1;
        emailInvalid.push(element);
    }
    
    })

    console.log(" validUser:" ,validCount,"\n",emailValid);
    console.log("invalidUser:",invalidCount,"\n",emailInvalid);

}
validateUsers(user)
