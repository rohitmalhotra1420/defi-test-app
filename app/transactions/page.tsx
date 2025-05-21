"use client";

import { useState } from "react";

const mockTransactions = [
  {
    username: "Alice",
    type: "Stake",
    token: "ETH",
    amount: 2.5,
    date: "2024-08-01",
  },
  {
    username: "Bob",
    type: "Borrow",
    token: "USDC",
    amount: 1000,
    date: "2024-08-02",
  },
  {
    username: "Charlie",
    type: "Lend",
    token: "DAI",
    amount: 500,
    date: "2024-08-03",
  },
  {
    username: "Steve",
    type: "Lend",
    token: "USDC",
    amount: 200,
    date: "2024-08-04",
  },
  {
    username: "Derek",
    type: "Stake",
    token: "ETH",
    amount: 1.2,
    date: "2024-08-05",
  },
];

export type FilterType = "All" | "Stake" | "Borrow" | "Lend";

export default function Transactions() {
  const [filter, setFilter] = useState<FilterType>("All");

  const filtered =
    filter === "All"
      ? mockTransactions
      : mockTransactions.filter((tx) => tx.type === filter);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Recent Transactions
        </h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as FilterType)}
          className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="All">All</option>
          <option value="Stake">Stake</option>
          <option value="Borrow">Borrow</option>
          <option value="Lend">Lend</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">
                Username
              </th>
              <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">
                Type
              </th>
              <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">
                Token
              </th>
              <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">
                Amount
              </th>
              <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filtered.map((tx, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2 text-sm text-gray-700">
                  {tx.username}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">{tx.type}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{tx.token}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{tx.amount}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{tx.date}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-4 text-sm text-gray-500"
                >
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
