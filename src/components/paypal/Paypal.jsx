
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../context/cart/CartContext";
import ModalMessage from "../modal/ModalMessage";

const Paypal = () => {


    const { clearItemToCheckout, cartTotal, makeBuy, makeBuyState } = useContext(CartContext);

    const [show, setShow] = useState(false);
    const [nameModal, setNameModal] = useState("");

    const initialOptions = {
        clientId: "ATEp4EgaDSIdhjxchSBRGKz0NIKDl25j068Kpa_QZZe1fgEhyjVjxE37U49jUncMyzMv8thwHiv2XGsB",
        currency: "USD",
        intent: "capture",
    };


    /**
     * MESSAGE OPEN PAYMENT SUCCESS
     */
    const messageSuccess = (name) => {
        setNameModal("Gracias por la compra: " + name);
        setShow(true);
    };

    /**
     * CREATE ORDER BY PAYPAL
     */
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: cartTotal,
                        currency: "CLP",
                    }
                }
            ]
        });
    }

    /**
     * CANCEL PAY
     */
    const onCancel = () => {
        setNameModal("No has finalizado tu compra!");
        setShow(true);
    }

    /**
     * APPROVE PAY
     */
    const onApprove = async (data, actions) => {
        const result = await actions.order.capture();
        const name = result.payer.name.given_name;
        const status = result.status;
        makeBuy(name);
        clearItemToCheckout();
        messageSuccess(name);
        return status;
    }



    /**
     * MESSAGE BUY SUCCESS
     */
    useEffect(() => {
        console.log(makeBuyState);
        if (makeBuyState) {
            messageSuccess("useEffect");
        }

    }, [makeBuyState]);

    return (
        <>
            <ModalMessage setShow={setShow} show={show}>
                {nameModal}
            </ModalMessage>
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onCancel={onCancel}
                    style={{ layout: "horizontal" }} />
            </PayPalScriptProvider>
        </>

    );
};

export default Paypal;