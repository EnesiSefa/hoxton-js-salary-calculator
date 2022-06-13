//person 1
const grossSalary1 = 500
let pensionContribution1 = grossSalary1 * 0.05
let taxableAmount1 = grossSalary1 - pensionContribution1

let taxedSalary1 = taxableAmount1 * 0.1 
let totalAmount1 = grossSalary1 - taxedSalary1

console.log("Total amount is :" + totalAmount1 + "Euro")


//person 2
const grossSalary2 = 80
let pensionContribution2 = grossSalary2 * 0.05
let taxableAmount2 = grossSalary2 - pensionContribution2 


console.log("Total amount is :" + taxableAmount2 + "Euro")
