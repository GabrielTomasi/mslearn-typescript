"use strict";
/* Module 3: Implement interfaces in TypeScript
   Lab Start  */
/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loanTerms) {
    // Calculates the monthly payment of an interest only loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
/*  TODO: Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(conventionalLoanTerms) {
    // Calculates the monthly payment of a conventional loan
    let interest = conventionalLoanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment = conventionalLoanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), conventionalLoanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
let loanTerms = {
    principal: 3000,
    interestRate: 10
};
let conventionalLoanTerms = {
    principal: 3000,
    interestRate: 5,
    months: 180
};
let interestOnlyPayment = calculateInterestOnlyLoanPayment(loanTerms);
let conventionalPayment = calculateConventionalLoanPayment(conventionalLoanTerms);
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24" 
