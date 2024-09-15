var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var eperience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n<h2><b> Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n     <p><b>Name:</b><span contenteditable =\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable =\"true\">").concat(name, "</span></p>\n    p><b>Phone:</b><span contenteditable =\"true\"> ").concat(name, "</span></p>\n\n    <h3><b>education </b></h3>\n   <p contenteditable =\"true\">").concat(education, "</p>\n    \n   <h3><b>experience </b></h3>\n   <p contenteditable =\"true\">").concat(eperience, "</p>\n\n   <h3><b>skills </b></h3>\n   <p contenteditable =\"true\">").concat(skills, "</p>");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
