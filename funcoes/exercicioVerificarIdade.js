function checkAge(age) {
    ageStatus = age >= 18 ? "maior de idade"
    : "menor de idade"
    console.log(`Você é ${ageStatus}`)
}

checkAge(17);