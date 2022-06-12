let form = document.getElementById('form');
let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let birthdate = document.getElementById('birthdate');
let sex = document.getElementById('sex');
let personalPhone = document.getElementById('personalPhone');
let homePhone = document.getElementById('homePhone');
let cellphoneNumber = document.getElementById('cellPhone1');
let email = document.getElementById('email');
let address1 = document.getElementById('address1');
let address2 = document.getElementById('address2');
let city = document.getElementById('city');
let province = document.getElementById('province');
let zip = document.getElementById('zip');
let medications = document.getElementById('medications1');
let doctor1 = document.querySelector('.doctorName');
let allergies1 = document.querySelector('.allergies1');
let lastHealthExam = document.getElementById('date-exam');
let submitBtn = document.getElementById('button');
let modalBg = document.querySelector('.modal-background');
let modalSubmit = document.querySelector('.modal-submit')
let modalClose = document.getElementById('cancel');


//For Modals
let modalfName = document.querySelector('.modal-fName');
let modallName = document.querySelector('.modal-lName');
let modalBirthdate = document.querySelector('.modal-birthdate');
let modalSex = document.querySelector('.modal-sex');
let modalEmail = document.querySelector('.modal-email');
let modalAddress1 = document.querySelector('.modal-address1');
let modalAddress2 = document.querySelector('.modal-address2');
let modalPersonalPhone = document.querySelector('.modal-personalPhone');
let modalHomePhone = document.querySelector('.modal-homePhone');
let modalCellPhone = document.querySelector('.modal-cell');
let modalCity = document.querySelector('.modal-city');
let modalProvince = document.querySelector('.modal-province');
let modalZip = document.querySelector('.modal-zip');
let modalMedications = document.querySelector('.modal-medication');
let modalDoctor = document.querySelector('.modal-doctor');
let modalAllergies = document.querySelector('.modal-allergies');
let modalDate = document.querySelector('.modal-healthExam');



validate1 = () => {
    if (
        fName.value.trim() == '' ||
        lName.value.trim() == '' ||
        birthdate.value == '' ||
        sex.value == 'Choose Sex here' ||
        email.value.trim() == '' ||
        address1.value.trim() == '' ||
        city.value.trim() == '' ||
        personalPhone.value.trim() == '' ||
        province.value.trim() == '' ||
        zip.value.trim() == ''
    ) {
        alert('Please fill in the required fields!')

    } else {

        modalBg.classList.add('modalActive');

        modalfName.innerHTML = `${fName.value}`

        modallName.innerHTML = `${lName.value}`
        
        modalBirthdate.innerHTML = `${birthdate.value}`
        
        modalSex.innerHTML = `${sex.value}`;

        modalEmail.innerHTML = `${email.value}`;
        
        modalAddress1.innerHTML = `${address1.value}`;
        
        modalAddress2.innerHTML = `${address2.value}`;
        
        modalPersonalPhone.innerHTML = `${personalPhone.value}`;
        
        modalHomePhone.innerHTML = `${homePhone.value}`;
                
        modalCellPhone.innerHTML = `${cellphoneNumber.value}`;
        
        modalCity.innerHTML = `${city.value}`;

        modalProvince.innerHTML = `${province.value}`

        modalZip.innerHTML = `${zip.value}`;
        
        modalMedications.innerHTML = `${medications.value}`;
        
        modalDoctor.innerHTML = `${doctor1.value}`
        
        modalAllergies.innerHTML = `${allergies1.value}`;
        
        modalDate.innerHTML = `${lastHealthExam.value}`
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate1();
});


modalClose.addEventListener('click', () => {
    modalBg.classList.remove('modalActive');
})


modalSubmit.addEventListener('click', () => {
    window.location.href = 'success.html'
})

