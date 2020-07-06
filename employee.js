let Employee = {
  salary: 10.000,
}

// creates the three possible roles
export let payGrades = {
  juniorLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

// gets and returns the employee role
export function getRole() {
  if (Employee.salary >= payGrades.juniorLevel.minSalary && Employee.salary <= payGrades.juniorLevel.maxSalary) {
    return 'juniorLevel';
  } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else return 'seniorLevel';
}

// it calculate tax grades based on the salary level
export function calculateTax() {
  return payGrades[getRole()].taxMultiplier * Employee.salary;
}

// it calculate benefits based on the salary level
export function getBenefits() {
  return payGrades[getRole()].benefits.join(', ');
}

// it calculates salary bonuses based on the salary
export function calculateBonus() {
  return .02 * Employee.salary;
}

// calculates eligible reimbursement based on salary
export function reimbursementEligibility() {
  let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
  let totalBenefitsValue = 0;
  let employeeBenefits = payGrades[getRole()].benefits;
  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }
  return totalBenefitsValue;
}

export default Employee;
