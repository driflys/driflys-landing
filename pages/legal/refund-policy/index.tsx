import Page from "../../../components/Page"
import { MainLayout } from "../../../layouts"

function RefundPolicy() {
  return (
    <Page
      title="Refund policy - Driflys"
      description="Driflys Refund Policy contains the info about subscription plan cancellation and refund process and conditions"
    >
      <main className="bg-white">
        <section className="container pt-8">
          <p className="mt-2">
            Last updated:<strong> August 01, 2022</strong>.
          </p>
          <p>The following terms are applicable for any subscriptions that You purchased with Us.</p>
        </section>

        <section className="container mt-8">
          <h1 className="text-4xl">Your Subscription Cancellation Rights</h1>
          <p className="mt-4">
            You are entitled to cancel Your Subscription anytime without giving any reason for doing so.
          </p>
          <p className="mt-4">
            After cancellation, you will be downgraded to FREE plan. All credentials currently published on your account
            will remain active for your recipients to use and for you to manage under the FREE plan limitations and
            regulations. Your account will still be open.
          </p>
        </section>

        <section className="container mt-8 pb-12">
          <h1 className="text-4xl">Refund Policy</h1>
          <p className="mt-4">
            The deadline for refunding a paid Subscription is 7 days from the date on which You purchased the
            Subscription.
          </p>
          <p className="mt-4">
            We offer a refund if there has been a genuine billing error that our Customer Support team can verify.
          </p>
          <p className="mt-4">
            To speak to a member of our Customer Support team regarding your subscription, please reach out to us at
            contact@driflys.com.
          </p>
        </section>
      </main>
    </Page>
  )
}

RefundPolicy.layout = MainLayout

export default RefundPolicy
