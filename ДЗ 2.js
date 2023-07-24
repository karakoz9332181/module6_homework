function getSimplicityOfNumber (number) {
    if (number > 1000) return "Данные неверны.";
    if (number === 0) return  " Число ненатуральное.";
    if (number === 1) return " Не простое и не составное.";
    let divisionsCount = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) divisionsCount++;
    }
    if (divisionsCount === 2)
        return "Число простое.";
    else
        return "Число составное.";
}
console.log(getSimplicityOfNumber(10));


  