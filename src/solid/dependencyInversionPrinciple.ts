/**
 * Классы верхних уровней не должны зависеть от классов нижних уровней. Оба должны зависеть от абстракций.
 * Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.
 */
export function dependencyInversionPrinciple() {
  const mysql = new MySql();
  const mongoDB = new MongoDB();

  const budgetReport1 = new BudgetReport(mysql);
  budgetReport1.print(new Date());

  const budgetReport2 = new BudgetReport(mongoDB);
  budgetReport2.print(new Date());
}

interface Database {
  insert(): void;
  update(): void;
  delete(): void;
}

class BudgetReport {
  constructor(private database: Database) {}

  print(date: Date) {
    console.log(`Print report for the ${date} date.`);
    this.database.update();
  }
}

class MySql implements Database {
  insert() {}

  update() {
    console.log('mysql updated');
  }

  delete() {}
}

class MongoDB implements Database {
  insert() {}

  update() {
    console.log('mongoDB updated');
  }

  delete() {}
}
