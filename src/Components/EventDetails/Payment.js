import React from "react"
import { useStyles } from "./style"
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3"

const Payment = () => {
  const classes = useStyles()
  const config = {
    public_key: "FLWPUBK_TEST-b14762dae8042e1abf1f6a14a6f4e025-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "ukwjeandedieu1@gmail.com",
      phonenumber: "0784860836",
      name: "UKWITEGETSE JEAN DE DIEU",
    },
    customizations: {
      title: "BuyMore",
      description: "Payment for items in cart",
      logo: "https://avatars.githubusercontent.com/u/59208992?v=4",
    },
  }

  const fwConfig = {
    ...config,
    text: "Pay ",
    callback: (response) => {
      console.log(response)
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  }

  return (
    <div>
      <FlutterWaveButton {...fwConfig} className={classes.SendBtn} />
    </div>
  )
}

export default Payment
