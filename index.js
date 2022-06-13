//person 1
const grossSalary1 = 500
let pensionContribution1 = grossSalary1 * 0.05
let taxedSalary1 = grossSalary1 - pensionContribution1
const taxUnder250EUR = 6.80
const taxUnder450EUR = 16
let taxOver450 = taxedSalary1 - 450
let taxOver450percentage = taxOver450 * 0.1
let totaltax = taxUnder250EUR + taxUnder450EUR + taxOver450percentage
let totalAmount1 = taxedSalary1 - totaltax

console.log("Total amount is :" + totalAmount1 + " EUR")


//person 2
const grossSalary2 = 80
let pensionContribution2 = grossSalary2 * 0.05
let taxableAmount2 = grossSalary2 - pensionContribution2 


console.log("Total amount is :" + taxableAmount2 + "EUR")
