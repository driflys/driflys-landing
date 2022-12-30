// components
import { useEffect } from "react"
import PaddleLoader from "../../components/PaddleLoader"
import Page from "../../components/Page"

function Checkout() {
  useEffect(() => {
    setTimeout(() => {
      handle()
    }, 2000)
  }, [])
  const handle = () => {
    // @ts-ignore
    Paddle?.Checkout?.open({
      method: "inline",
      product: 30780,
      allowQuantity: false,
      disableLogout: true,
      frameTarget: "checkout-container",
      frameInitialHeight: 416,
      frameStyle: "width:100%; min-width:312px; background-color: transparent; border: none;",
    })
  }

  return (
    <Page title="Driflys Checkout">
      {/* <PaddleLoader /> */}
      <div className="checkout-container"></div>
      {/* <button onClick={handle}>Click</button> */}
    </Page>
  )
}

export default Checkout
