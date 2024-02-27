import { HttpError } from 'wasp/server';

export const getTransactions = async (args, context) => {
  if (!context.user) { throw new HttpError(401); }

  return context.entities.Transaction.findMany({
    where: {
      userId: args.userId
    }
  });
};

export const getBills = async (args, context) => {
  if (!context.user) { throw new HttpError(401); }

  return context.entities.Bill.findMany({
    where: {
      userId: args.userId
    }
  });
};

export const getBudgets = async (args, context) => {
  if (!context.user) { throw new HttpError(401); }

  return context.entities.Budget.findMany({
    where: { userId: args.userId }
  });
};