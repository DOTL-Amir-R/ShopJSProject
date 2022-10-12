console.log('hi');
const firstNameInput = document.getElementById('first-name-input');
const lastNameInput = document.getElementById('last-name-input');
const emailNameInput = document.getElementById('email-name-input');
const passwordNameInput = document.getElementById('password-name-input');
const createYourAccountBtn = document.getElementById('create-your-account-btn');
// const containerForErrorInputLastName = document.getElementById('container-for-error-input-last-name')
// const containerForErrorInputFirstName = document.getElementById('container-for-error-input-first-name')
const containerOfIndividualInputErrorArray = [
    document.getElementById('container-for-error-input-first-name') ,
    document.getElementById('container-for-error-input-last-name'),
    document.getElementById('container-for-error-input-email-name'),
    document.getElementById('container-for-error-input-password-name'),

]
// const test = document.createElement('div')
// if(containerOfIndividualInputErrorArray[0].childElementCount ==2){
//     console.log(containerOfIndividualInputErrorArray[0].childElementCount)
// }
function makeErrorForSignInValidtion(container) { 
    container.forEach((item)=>{
        if(item.childElementCount == 1){
            const test = document.createElement('div')
            test.style.color = 'red'
            test.style.display = 'flex'
            test.innerHTML = 'please fill this input.'
            item.appendChild(test)
        }
    })
    // test.style.display = 'block'
    

}

createYourAccountBtn.addEventListener('click',()=>{
    // const userData = {
    //     userFirstName:firstNameInput.value,
    //     userLastName:lastNameInput.value,
    //     userEmail:emailNameInput.value,
    //     userPassword:passwordNameInput.value,
    // }
    const userDataArray = [
        firstNameInput,
        lastNameInput,
        emailNameInput,
        passwordNameInput,
    ]
    // if(userData){
    //     console.log('nice');  
    // }
    containerOfIndividualInputErrorArray.forEach((item)=>{
        const inputForSignIn = [item.children][0][0]


        if(inputForSignIn.value == false){
            // console.log('wrong')
            inputForSignIn.style.border = '0.0625rem red solid'
            // console.log(item.parentElement)
            // makeErrorForSignInValidtion(item.parentElement)
            // errorText.style.display = 'flex'
            // console.log(errorText)
                            // errorText.style.display = 'flex'
            makeErrorForSignInValidtion(containerOfIndividualInputErrorArray)
            // errorText = 'none'
            // containerOfIndividualInputErrorArray.forEach((item)=>{
            //     makeErrorForSignInValidtion(item)
            // const errorText = [item.children][0][1]
            const errorText = [item.children][0][1]
            errorText.style.display = 'flex'
            // })
        }else{
            inputForSignIn.style.border = '0.0625rem #fafafa solid'
            inputForSignIn.style.borderRadius = '.5rem'
            const errorText = [item.children][0][1]
            // containerOfIndividualInputErrorArray.forEach((item)=>{
            errorText.style.display = 'none'
                // console.log(errorText)
            //     // const test02 =[item.children][0][1]
            //     // test02.style.display = 'none'
            // })
        }



    })
    // console.log(userDataArray);
})