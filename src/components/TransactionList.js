import React, { useContext } from 'react';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  return (
    <>
        <h3>History</h3>
      <ul id="list" class="list">
          <li class="minus">
            Cash <span>-$400</span><button class="delete-btn">x</button>
          </li>
      </ul>
    </>
  )
}
