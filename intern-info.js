import { getRole, calculateTax, getBenefits, calculateBonus, reimbursementEligibility } from './employee';

import Employee from './employee';

function getEmployeeInformation(salary) {
  Employee.salary = salary;
  console.log('Role: ' + getRole());
  console.log('Tax: ' + calculateTax());
  console.log('Benefits: ' + getBenefits());
  console.log('Bonus: ' + calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);