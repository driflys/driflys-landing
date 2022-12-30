import React from "react"
import Script from "next/script"
import { env } from "../constants/env"

function PaddleLoader({ success, close }: { success: (data: any) => void; close: (data: any) => void }) {
  return (
    <Script
      src="https://cdn.paddle.com/paddle/paddle.js"
      onLoad={() => {
        // @ts-ignore
        Paddle?.Environment?.set(env.PADDLE_ENVIRONMENT)
        // @ts-ignore
        Paddle?.Setup({
          vendor: env.PADDLE_VENDOR_ID,
          eventCallback: (data: any) => {
            console.log("Paddle Response: ", data)
            if (data.event === "Checkout.Complete") {
              success(data)
            } else if (data.event === "Checkout.Close") {
              close(data)
            }
          },
        })
      }}
    />
  )
}

export default PaddleLoader
