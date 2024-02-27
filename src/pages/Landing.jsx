import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, getTransactions, getBills, getBudgets } from 'wasp/client/operations';

const LandingPage = () => {
  const { data: transactions, isLoading: transactionsLoading, error: transactionsError } = useQuery(getTransactions);
  const { data: bills, isLoading: billsLoading, error: billsError } = useQuery(getBills);
  const { data: budgets, isLoading: budgetsLoading, error: budgetsError } = useQuery(getBudgets);

  if (transactionsLoading || billsLoading || budgetsLoading) return 'Loading...';
  if (transactionsError || billsError || budgetsError) return 'Error: ' + (transactionsError || billsError || budgetsError);

  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold mb-4'>Welcome to MiBudget!</h1>
      <p className='text-lg mb-4'>Manage your finances with ease and keep track of your shared expenses.</p>
      <p className='text-lg mb-4'>Sign up now to start budgeting together with your loved ones!</p>
      <div className='mt-8'>
        <h2 className='text-2xl font-bold mb-4'>Overview</h2>
        <p>Total Transactions: {transactions.length}</p>
        <p>Total Bills: {bills.length}</p>
        <p>Total Budgets: {budgets.length}</p>
      </div>
      <div className='mt-8'>
        <h2 className='text-2xl font-bold mb-4'>Quick Access</h2>
        <div className='flex justify-between'>
          <Link to='/expense-tracking' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Expense Tracking</Link>
          <Link to='/bill-splitting' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Bill Splitting</Link>
          <Link to='/shared-budgeting' className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>Shared Budgeting</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;