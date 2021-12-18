export const depositMoney = (amount: number) => {
  return (dispatch: any) => {
    dispatch({
      type: 'deposit',
      payload: amount
    })
  }
}

export const withdrawMoney = (amount: number) => {
  return (dispatch: any) => {
    dispatch({
      type: 'withdraw',
      payload: amount
    })
  }
}