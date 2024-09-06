function getINFO() {
    var name=document.getElementById(name).value;
    var email=document.getElementById(email).value;
    var password=document.getElementById(password).value;
    var dob=document.getElementById(dob).value;
    var age=document.getElementById(age).value;
    var gender=document.getElementById(gender).value;
   document.getElementById("demo").innerHTML=("username:"+name+"email:"+email+"dob:"+dob+"age:"+age+"gender"+gender);
   console.log("you have completed registration form");

}
function getINFO() {
    alert("you have done a great job.");
}
function completeRegistration() {
    submitForm();
    console.log("you have completed registration");
}
var programmingLanguages = [];
    var checkboxes = document.querySelectorAll('input[name="programming"]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
        programmingLanguages.push(checkboxes[i].id);
    }
{
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Password: " + password);
    console.log("DOB: " + dob);
    console.log("Department: " + department);
    console.log("Resume: " + resume);
    console.log("Age: " + age);
    console.log("Feedback: " + feedback);
    console.log("Gender: " + gender);
    console.log("Programming Languages: " + programmingLanguages.join(", "));
}
