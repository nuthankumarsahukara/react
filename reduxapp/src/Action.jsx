export const handleDeposit = (amount) =>  ({
  type: 'account/deposit',
  payload: amount,
});

export const handleWithdraw = (amount) => ({
  type: "account/withdraw", 
  payload: Number(amount),
});

export const handleUpdateName = (name) => ({ 
    type: "nameUpdate", 
    payload: name,
});

export const handleUpdateMobile = (phone) => ({ 
    type: "mobileUpdate", 
    payload: phone ,
});
