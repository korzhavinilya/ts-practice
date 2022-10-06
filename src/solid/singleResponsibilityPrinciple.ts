/**
 * У класса должна быть только один мотив для изменения.
 *
 * Он должен отвечать только за одну часть функциональности программы,
 */

export function singleResponsibilityPrinciple() {
  const employee = new Employee('Ilya');
  const timeSheetReport = new TimeSheetReport();
  timeSheetReport.print(employee);
}

class Employee {
  constructor(private name: string) {}

  // calculateReport() {}

  getName() {
    return this.name;
  }
}

class TimeSheetReport {
  print(employee: Employee) {
    console.log(`Calculation for ${employee.getName()}`);
  }
}
