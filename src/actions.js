import { HttpError } from 'wasp/server';

export const addTransaction = async (args, context) => {
  if (!context.user) { throw new HttpError(401); }
  return context.entities.Transaction.create({
    data: {
      date: args.date,
      amount: args.amount,
      category: args.category,
      payee: args.payee,
      userId: args.userId
    }
  });
}

export const addBill = async (args, context) => {
  if (!context.user) { throw new HttpError(401); }

  return context.entities.Bill.create({
    data: {
      amount: args.amount,
      dueDate: args.dueDate,
      payer: args.payer,
      payee: args.payee,
      userId: args.userId
    }
  });
}

export const setBudget = async (args, context) => {
  if (!context.user) { throw new HttpError(401); }

  return context.entities.Budget.create({
    data: {
      category: args.category,
      goal: args.goal,
      user: { connect: { id: args.userId } }
    }
  });
}