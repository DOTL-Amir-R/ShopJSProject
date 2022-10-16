console.log('hi');
const firstNameInput = document.getElementById('first-name-input');
const lastNameInput = document.getElementById('last-name-input');
const emailNameInput = document.getElementById('email-name-input');
const passwordNameInput = document.getElementById('password-name-input');
const createYourAccountBtn = document.getElementById('create-your-account-btn');
const btnForPersonalAccount = document.getElementById('btn-for-personal-account');
const btnForBusinessAccount = document.getElementById('btn-for-business-account');
const thisHaveToBeTrue = true
let circlePersonalAccountBtnIsEmpty =true
let circleBusinessAccountBtnIsEmpty = true

const containerOfIndividualInputErrorArray = [
    document.getElementById('container-for-error-input-first-name') ,
    document.getElementById('container-for-error-input-last-name'),
    document.getElementById('container-for-error-input-email-name'),
    document.getElementById('container-for-error-input-password-name'),

]

function makeErrorForSignInValidtion(container) { 
    container.forEach((item)=>{
        if(item.childElementCount == 1){
            const errorText = document.createElement('div')
            errorText.style.color = 'red'
            errorText.style.display = 'none'
            errorText.innerHTML = 'please fill this input.'
            item.appendChild(errorText)
        }
    })
}
function goToNextPage(firstState,secondState){
    if(firstState === secondState){
        window.location.replace('./home-page.html')
    }
}

createYourAccountBtn.addEventListener('click',()=>{
    
    // const userData = {
    //     userFirstName:firstNameInput.value,
    //     userLastName:lastNameInput.value,
    //     userEmail:emailNameInput.value,
    //     userPassword:passwordNameInput.value,
    // }
    let testA = 0
    const userDataArray = [
        firstNameInput,
        lastNameInput,
        emailNameInput,
        passwordNameInput,
    ]
    containerOfIndividualInputErrorArray.forEach((item)=>{
        const inputForSignIn = [item.children][0][0]
        if(inputForSignIn.value == false){
            inputForSignIn.style.border = '0.0625rem red solid'
            makeErrorForSignInValidtion(containerOfIndividualInputErrorArray)
            const errorText = [item.children][0][1]
            errorText.style.display = 'flex'
        }else if(thisHaveToBeTrue){
            makeErrorForSignInValidtion(containerOfIndividualInputErrorArray)
            inputForSignIn.style.border = '0.0625rem #fafafa solid'
            inputForSignIn.style.borderRadius = '.5rem'
            const errorText = [item.children][0][1]
            errorText.style.display = 'none'
            // deleteErrorText(containerOfIndividualInputErrorArray)
            testA = testA + 1
            console.log(testA)
            goToNextPage(testA,containerOfIndividualInputErrorArray.length)
        }
    })
})
btnForPersonalAccount.addEventListener('click',()=>{
    if(circlePersonalAccountBtnIsEmpty){
        btnForPersonalAccount.src = '../img/filled-button.svg';
        btnForBusinessAccount.src = '../img/empty-button.svg';
        circleBusinessAccountBtnIsEmpty = true
        circlePersonalAccountBtnIsEmpty = false
    }else{
        btnForPersonalAccount.src = '../img/empty-button.svg';
        circlePersonalAccountBtnIsEmpty = true
    }

})
btnForBusinessAccount.addEventListener('click',()=>{
    if(circleBusinessAccountBtnIsEmpty){
        btnForBusinessAccount.src = '../img/filled-button.svg';
        btnForPersonalAccount.src = '../img/empty-button.svg';
        circlePersonalAccountBtnIsEmpty = true
        circleBusinessAccountBtnIsEmpty = false
    }else{
        btnForBusinessAccount.src = '../img/empty-button.svg';
        circleBusinessAccountBtnIsEmpty = true
    }

})