
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useContext, useState } from "react";
import CartContext from "../../context/cart/CartContext";
import ModalMessage from "../modal/ModalMessage";

const Paypal = () => {


    const { clearItemToCheckout, cartTotal } = useContext(CartContext);

    const [show, setShow] = useState(false);
    const [nameModal, setNameModal] = useState("");

    const initialOptions = {
        clientId: "ATEp4EgaDSIdhjxchSBRGKz0NIKDl25j068Kpa_QZZe1fgEhyjVjxE37U49jUncMyzMv8thwHiv2XGsB",
        currency: "USD",
        intent: "capture",
    };

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
    const onApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;

            console.log(details);

            messageSuccess(name);

            clearItemToCheckout();
        });
    }


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