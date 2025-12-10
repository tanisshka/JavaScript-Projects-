const birthDate=document.getElementById("birthdate");
const calculateAgebtn=document.getElementById("btn-calc");
const result=document.getElementById("result");


function calculateAge() {
    const birthdateInput=birthDate.value;
    console.log(birthdateInput);
    //2025-12-11
    if(!birthdateInput){
        result.innerHTML="Please select your birthdate";
        return;
    }

    const dob=new Date(birthdateInput);
    console.log(dob);
    const now=new Date();
    console.log(now);

    const years=now.getFullYear()-dob.getFullYear();
    const months=now.getMonth()-dob.getMonth();
    const days=now.getDate()-dob.getDate();

    if (days < 0) {
        months--;
        const lastMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += lastMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

        result.innerHTML = ` You are
        <b>${years}</b> Years • 
        <b>${months}</b> Months • 
        <b>${days}</b> Days
    `;
}
