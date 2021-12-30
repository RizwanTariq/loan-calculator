//Loan Form
const loanForm = document.getElementById("loan-form");
const amountInput = document.getElementById("amount");
const interestInput = document.getElementById("interest");
const yearsToRepayInput = document.getElementById("years");
//Results Fields
const monthlyPaymentField = document.getElementById("monthly-payment");
const totalPaymentField = document.getElementById("total-payment");
const totalInterestField = document.getElementById("total-interest");

loanForm.addEventListener("submit", calculateResults);

function calculateResults(e) {
  e.preventDefault();
  resultLoading();

  const principle = amountInput.value;
  const calculateInterest = interestInput.value / 100 / 12;
  const calculatePayments = yearsToRepayInput.value * 12;

  //COmpute monthly payment
  const x = Math.pow(1 + calculateInterest, calculatePayments);
  const monthlyPayment = (principle * calculateInterest * x) / (x - 1);

  if (isFinite(monthlyPayment)) {
    monthlyPaymentField.value = monthlyPayment.toFixed(2);
    totalPaymentField.value = (monthlyPayment * calculatePayments).toFixed(2);
    totalInterestField.value = (
      monthlyPayment * calculatePayments -
      principle
    ).toFixed(2);
  }
}

function resultLoading() {
  const loadElement = document.getElementById("loading");
  const resultElement = document.getElementById("results");
  loadElement.style.display = "block";
  setTimeout(() => {
    loadElement.style.display = "none";
    resultElement.style.display = "block";
  }, 300);
}
