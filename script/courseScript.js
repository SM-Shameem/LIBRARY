function ShowReferences(arg) {    
    if (arg != 1) document.getElementById('course1').style.display = 'none';
    else document.getElementById('reference1').style.display = 'block';
    if (arg != 2) document.getElementById('course2').style.display = 'none';
    else document.getElementById('reference2').style.display = 'block';
    if (arg != 3) document.getElementById('course3').style.display = 'none';
    else document.getElementById('reference3').style.display = 'block';
    if (arg != 4) document.getElementById('course4').style.display = 'none';
    else document.getElementById('reference4').style.display = 'block';
    if (arg != 5) document.getElementById('course5').style.display = 'none';
    else document.getElementById('reference5').style.display = 'block';
    if (arg != 6) document.getElementById('course6').style.display = 'none';
    else document.getElementById('reference6').style.display = 'block';
    if (arg != 7) document.getElementById('course7').style.display = 'none';
    else document.getElementById('reference7').style.display = 'block';

    buttonCourse();
}

function ShowCourses() {
    document.getElementById('course1').style.display = 'block';
    document.getElementById('course2').style.display = 'block';
    document.getElementById('course3').style.display = 'block';
    document.getElementById('course4').style.display = 'block';
    document.getElementById('course5').style.display = 'block';
    document.getElementById('course6').style.display = 'block';
    document.getElementById('course7').style.display = 'block';

    document.getElementById('reference1').style.display = 'none';
    document.getElementById('reference2').style.display = 'none';
    document.getElementById('reference3').style.display = 'none';
    document.getElementById('reference4').style.display = 'none';
    document.getElementById('reference5').style.display = 'none';
    document.getElementById('reference6').style.display = 'none';
    document.getElementById('reference7').style.display = 'none';

    buttonReference()
}

function buttonCourse() {
    document.getElementById('buttReff_1').style.display = 'none';
    document.getElementById('buttCour_1').style.display = 'block';
    document.getElementById('buttReff_2').style.display = 'none';
    document.getElementById('buttCour_2').style.display = 'block';
    document.getElementById('buttReff_3').style.display = 'none';
    document.getElementById('buttCour_3').style.display = 'block';
    document.getElementById('buttReff_4').style.display = 'none';
    document.getElementById('buttCour_4').style.display = 'block';
    document.getElementById('buttReff_5').style.display = 'none';
    document.getElementById('buttCour_5').style.display = 'block';
    document.getElementById('buttReff_6').style.display = 'none';
    document.getElementById('buttCour_6').style.display = 'block';
    document.getElementById('buttReff_7').style.display = 'none';
    document.getElementById('buttCour_7').style.display = 'block';
}

function buttonReference() {
    document.getElementById('buttReff_1').style.display = 'block';
    document.getElementById('buttCour_1').style.display = 'none';
    document.getElementById('buttReff_2').style.display = 'block';
    document.getElementById('buttCour_2').style.display = 'none';
    document.getElementById('buttReff_3').style.display = 'block';
    document.getElementById('buttCour_3').style.display = 'none';
    document.getElementById('buttReff_4').style.display = 'block';
    document.getElementById('buttCour_4').style.display = 'none';
    document.getElementById('buttReff_5').style.display = 'block';
    document.getElementById('buttCour_5').style.display = 'none';
    document.getElementById('buttReff_6').style.display = 'block';
    document.getElementById('buttCour_6').style.display = 'none';
    document.getElementById('buttReff_7').style.display = 'block';
    document.getElementById('buttCour_7').style.display = 'none';
}