import React from 'react'
import { formatAmount } from '@/lib/utils' // adjust path if needed

type TotalBalanceBoxProps = {
  accounts?: any[],
  totalBanks: number,
  totalCurrentBalance: number,
}

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance 
}: TotalBalanceBoxProps) => {
  return (
    <section className="w-full rounded-xl bg-white p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
      
      <div className="flex flex-col gap-2 w-full sm:w-1/2">
        <h2 className="text-xl font-semibold text-gray-700">
          Linked Bank Accounts: <span className="text-blue-600">{totalBanks}</span>
        </h2>
        <p className="text-sm text-gray-500">
          These accounts are connected and ready for transactions.
        </p>
      </div>

      <div className="flex flex-col items-end sm:items-start w-full sm:w-1/2">
        <p className="text-sm text-gray-500">Total Balance</p>
        <p className="text-2xl sm:text-3xl font-bold text-gray-900">
          {formatAmount(totalCurrentBalance)}
        </p>
      </div>

    </section>
  )
}

export default TotalBalanceBox
