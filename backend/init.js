// MongoDB init script
db = db.getSiblingDB('finlit');

// Create modules collection and insert initial data
db.createCollection('modules');
const modulesCount = db.modules.countDocuments();

if (modulesCount === 0) {
  const initialModules = [
    { name: 'Investing', description: 'Learn the basics of investing, stocks, bonds, and portfolios.' },
    { name: 'Savings', description: 'Understand how to save effectively and the importance of financial security.' },
    { name: 'Budgeting', description: 'Master the art of budgeting for managing personal finances.' },
    { name: 'Fraud Prevention', description: 'Learn how to protect yourself from financial fraud and scams.' }
  ];
  
  db.modules.insertMany(initialModules);
  print('Initial modules added to the database.');
}