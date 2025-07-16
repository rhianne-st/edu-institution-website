document.querySelector('Form').onsubmit = function(e) {
    e.preventDefault();
    const fillFname = document.querySelector('#fill-fname');
    const fillLname = document.querySelector('#fill-lname');
    const fillID = document.querySelector('#fill-id');
    const checkID = document.querySelector('#check-id');
    const fillStreet = document.querySelector('#fill-street');
    const fillCity = document.querySelector('#fill-city');
    const fillState = document.querySelector('#fill-state');
    const fillPostcode = document.querySelector('#fill-postcode');
    const checkPostcode = document.querySelector('#check-postcode');
    const selectIntake = document.querySelector('#select-intake');
    const selectGrade = document.querySelector('#select-grade');
    const submitFace = document.querySelector('#submit-face');
    const submitId = document.querySelector('#submit-id');
    const selectCountry = document.querySelector('#select-country');

    const selectSubject = document.querySelector('#select-subject');
    const selectSubject2 = document.querySelector('#select-subject2');
    const selectSubject3 = document.querySelector('#select-subject3');
    const selectSubject4 = document.querySelector('#select-subject4');
    const selectSubject5 = document.querySelector('#select-subject5');
    const selectSubject6 = document.querySelector('#select-subject6');

    const popupSubmit = document.getElementById('popupSubmit');
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var id = document.getElementById("id").value;
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var postcode = document.getElementById("postcode").value;
    var intake = document.getElementById("intake").value;
    var facepic = document.getElementById("facepic").value;
    var idpic = document.getElementById("idpic").value;
    var country = document.getElementById("country").value;
    var subject1 = document.getElementById("subject1").value;
    var subject2 = document.getElementById("subject2").value;
    var subject3 = document.getElementById("subject3").value;
    var subject4 = document.getElementById("subject4").value;
    var subject5 = document.getElementById("subject5").value;
    var subject6 = document.getElementById("subject6").value;
    var subject7 = document.getElementById("subject7").value;
    var subject8 = document.getElementById("subject8").value;
    var subject9 = document.getElementById("subject9").value;
    var subject10 = document.getElementById("subject10").value;
    var subject11 = document.getElementById("subject11").value;
    var subject12 = document.getElementById("subject12").value;
    var subject13 = document.getElementById("subject13").value;
    var subject14 = document.getElementById("subject14").value;
    var subject15 = document.getElementById("subject15").value;
    var subject16 = document.getElementById("subject16").value;
    var subject17 = document.getElementById("subject17").value;
    var subject18 = document.getElementById("subject18").value;
    var subject19 = document.getElementById("subject19").value;
    var subject20 = document.getElementById("subject20").value;
    var subject21 = document.getElementById("subject21").value;
    var subject22 = document.getElementById("subject22").value;
    var subject23 = document.getElementById("subject23").value;
    var subject24 = document.getElementById("subject24").value;
    var grade = document.getElementById("grade").value;
    var postcodeCheck = /^[A-Za-z0-9-]*$/;
    var idCheck = /^[A-Za-z0-9]*$/;
    var lnameValid, fnameValid, idValid, streetValid, cityValid, stateValid, postcodeValid, intakeValid, facepicValid, idpicValid, countryValid, subjectValid, subjectValid2 ,subjectValid3 ,subjectValid4 ,subjectValid5, subjectValid6;
    
    //Check Postal/Zip code
    if (postcode == "") {
        checkPostcode.classList.remove('show');
        fillPostcode.classList.add('show');
        document.getElementById('postcode').focus();
        postcodeValid = false;
    }
    else if (!postcodeCheck.test(postcode)) {
        checkPostcode.classList.add('show');
        fillPostcode.classList.remove('show');
        document.getElementById('postcode').focus();
        postcodeValid = false;
    }
    else {
        checkPostcode.classList.remove('show');
        fillPostcode.classList.remove('show');
        postcodeValid = true;
    }
    //Check State
    if (state == "") {
        fillState.classList.add('show');
        document.getElementById('state').focus();
        stateValid = false;
    }
    else {
        fillState.classList.remove('show');
        stateValid = true;
    }
    //Check City
    if (city == "") {
        fillCity.classList.add('show');
        document.getElementById('city').focus();
        cityValid = false;
    }
    else {
        fillCity.classList.remove('show');
        cityValid = true;
    }
    //Check Street Address
    if (street == "") {
        fillStreet.classList.add('show');
        document.getElementById('street').focus();
        streetValid = false;
    }
    else {
        fillStreet.classList.remove('show');
        streetValid = true;
    }
    //Check Country
    if (country == "") {
        selectCountry.classList.add('show');
        document.getElementById('country').focus();
        countryValid = false;
    }
    else {
        selectCountry.classList.remove('show');
        countryValid = true;
    }
    //Check Picture of ID
    if (idpic == "") {
        submitId.classList.add('show');
        document.getElementById('idpic').focus();
        idpicValid = false;
    }
    else {
        submitId.classList.remove('show');
        idpicValid = true;
    }
    //Check Picture of Face
    if (facepic == "") {
        submitFace.classList.add('show');
        document.getElementById('facepic').focus();
        facepicValid = false;
    }
    else {
        submitFace.classList.remove('show');
        facepicValid = true;
    }
    //Check ID
    if (id == "") {
        fillID.classList.add('show');
        checkID.classList.remove('show');
        document.getElementById('id').focus();
        idValid = false;
    }
    else if (!idCheck.test(id)) {
        fillID.classList.remove('show');
        checkID.classList.add('show');
        document.getElementById('id').focus();
        idValid = false;
    }
    else {
        fillID.classList.remove('show');
        checkID.classList.remove('show');
        idValid = true;
    }
    //Check Last Name
    if (lname == "") {
        fillLname.classList.add('show');
        document.getElementById('lname').focus();
        lnameValid = false;
    }
    else {
        fillLname.classList.remove('show');
        lnameValid = true;
    }
    //Check First Name
    if (fname  == "") {
        fillFname.classList.add('show');
        document.getElementById('fname').focus();
        fname = false;
    }
    else {
        fillFname.classList.remove('show');
        fname = true;
    }
    //Check Intake
    if (intake == "") {
        selectIntake.classList.add('show');
        document.getElementById('intake').focus();
        intakeValid = false;
    }
    else {
        selectIntake.classList.remove('show');
        intakeValid = true;
    }  

    //Check Subjects
    if (subject1 == "" || subject2 == "" || subject3 == "" || subject4 == "") {
        selectSubject.classList.add('show');
        subjectValid = false
    }
    else {
        selectSubject.classList.remove('show');
        subjectValid = true;
    }

    if (subject5 == "" || subject6 == "" || subject7 == "" || subject8 == "") {
        selectSubject2.classList.add('show');
        subjectValid2 = false
    }
    else {
        selectSubject2.classList.remove('show');
        subjectValid2 = true;
    }
    if (subject9 == "" || subject10 == "" || subject11 == "" || subject12 == "") {
        selectSubject3.classList.add('show');
        subjectValid3 = false
    }
    else {
        selectSubject3.classList.remove('show');
        subjectValid3 = true;
    }

    if (subject13 == "" || subject14 == "" || subject15 == "" || subject16 == "") {
        selectSubject4.classList.add('show');
        subjectValid4 = false
    }
    else {
        selectSubject4.classList.remove('show');
        subjectValid4 = true;
    }
    if (subject17 == "" || subject18 == "" || subject19 == "" || subject20 == "") {
        selectSubject5.classList.add('show');
        subjectValid5 = false
    }
    else {
        selectSubject5.classList.remove('show');
        subjectValid5 = true;
    }

    if (subject21 == "" || subject22 == "" || subject23 == "" || subject24 == "") {
        selectSubject6.classList.add('show');
        subjectValid6 = false
    }
    else {
        selectSubject6.classList.remove('show');
        subjectValid6 = true;
    }



    //Check Grade
    if (grade == "") {
        selectGrade.classList.add('show');
        gradeValid = false
    }
    else {
        selectGrade.classList.remove('show');
        gradeValid = true;
    }
    //Submit From if all valid
    if (lnameValid && fnameValid, idValid && streetValid && cityValid && stateValid && postcodeValid && intakeValid && countryValid && facepicValid && idpicValid &&(subjectValid || subjectValid2 || subjectValid3 || subjectValid4 || subjectValid5 || subjectValid6) && gradeValid) {
        function openSubmitPopup() {
            popupSubmit.style.display = 'block';
        }
       
        openSubmitPopup();
    }
}


//Login/SignUp prompt
document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopup = document.getElementById('closePopup');
    var loggedin = true;

    // Function to open the popup
    function openPopup() {
        popupOverlay.style.display = 'block';
    }

    // Function to close the popup
    function closePopupFunc() {
        popupOverlay.style.display = 'none';
    }

    openPopup();
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('email') == true) {
        var a = document.getElementById('tohome')
        a.href += '?email';
        closePopupFunc();
    }


    // Close the popup
    closePopup.addEventListener('click', goBack);
});

//Ensure no duplicate subjects selected
function validateDropdown(currentDropdownId) {
    var grade = document.getElementById('grade').value;
    const currentDropdown = document.getElementById(currentDropdownId);
    const selectedOption = currentDropdown.value;
    const selectSubject = document.querySelector('#select-subject');
    const selectSubject2 = document.querySelector('#select-subject2');
    const selectSubject3 = document.querySelector('#select-subject3');
    const selectSubject4 = document.querySelector('#select-subject4');
    const selectSubject5 = document.querySelector('#select-subject5');
    const selectSubject6 = document.querySelector('#select-subject6');

    const dropdowns = document.querySelectorAll('select');
    dropdowns.forEach(dropdown => {
        if (dropdown.id !== currentDropdownId && dropdown.value === selectedOption) {
            switch (grade){
                case 'grade7':
                    selectSubject.classList.add('show');
                break;
                case 'grade8':
                    selectSubject2.classList.add('show');
                break;
                case 'grade9':
                    selectSubject3.classList.add('show');
                break;
                case 'grade10':
                    selectSubject4.classList.add('show');
                break;
                case 'grade11':
                    selectSubject5.classList.add('show');
                break;
                default:
                    selectSubject6.classList.add('show');
                break;


            }
            selectSubject.classList.add('show');
            selectSubject2.classList.add('show');
            currentDropdown.value = ''; // Reset the selection
        }
    });
}

function goBack() {
    window.history.back();
    }

function subEnroll(){
    var grade = document.getElementById("grade").value;
    const grade7Enroll = document.querySelector("#grade7Enroll");
    const grade8Enroll = document.querySelector("#grade8Enroll");
    const grade9Enroll = document.querySelector("#grade9Enroll");
    const grade10Enroll = document.querySelector("#grade10Enroll");
    const grade11Enroll = document.querySelector("#grade11Enroll");
    const grade12Enroll = document.querySelector("#grade12Enroll");

    if (grade === 'grade7'){
        grade7Enroll.style.display='block';
        grade8Enroll.style.display='none';
        grade9Enroll.style.display='none';
        grade10Enroll.style.display='none';
        grade11Enroll.style.display='none';
        grade12Enroll.style.display='none';
    }
    else if(grade === 'grade8'){
        grade7Enroll.style.display='none';
        grade8Enroll.style.display='block';
        grade9Enroll.style.display='none';
        grade10Enroll.style.display='none';
        grade11Enroll.style.display='none';
        grade12Enroll.style.display='none';
    }

    else if(grade === 'grade9'){
        grade7Enroll.style.display='none';
        grade8Enroll.style.display='none';
        grade9Enroll.style.display='block';
        grade10Enroll.style.display='none';
        grade11Enroll.style.display='none';
        grade12Enroll.style.display='none';
    }

    else if(grade === 'grade10'){
        grade7Enroll.style.display='none';
        grade8Enroll.style.display='none';
        grade9Enroll.style.display='none';
        grade10Enroll.style.display='block';
        grade11Enroll.style.display='none';
        grade12Enroll.style.display='none';
    }

    else if(grade === 'grade11'){
        grade7Enroll.style.display='none';
        grade8Enroll.style.display='none';
        grade9Enroll.style.display='none';
        grade10Enroll.style.display='none';
        grade11Enroll.style.display='block';
        grade12Enroll.style.display='none';
    }

    else if(grade === 'grade12'){
        grade7Enroll.style.display='none';
        grade8Enroll.style.display='none';
        grade9Enroll.style.display='none';
        grade10Enroll.style.display='none';
        grade11Enroll.style.display='none';
        grade12Enroll.style.display='block';
    }

}
