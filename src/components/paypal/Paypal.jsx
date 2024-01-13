
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";


const Paypal = () => {


    const { clearItemToCheckout, cartTotal } = useContext(CartContext);


    const initialOptions = {
        clientId: "ATEp4EgaDSIdhjxchSBRGKz0NIKDl25j068Kpa_QZZe1fgEhyjVjxE37U49jUncMyzMv8thwHiv2XGsB",
        currency: "USD",
        intent: "capture",
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
     * APPROVE PAY
     */
    const onApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(name);
            clearItemToCheckout();
        });
    }


    return (
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}
                style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
    );
};

export default Paypal;