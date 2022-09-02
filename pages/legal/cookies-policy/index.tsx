import Page from "../../../components/Page"
import { MainLayout } from "../../../layouts"

function CookiesPolicy() {
  return (
    <Page title={`Cookies Policy - Driflys`}>
      <main className="bg-white">
        <section className="container pt-8">
          <h1 className="text-4xl">Cookies Policy</h1>
          <p className="mt-2">
            Last updated on <strong>August 23, 2022</strong>.
          </p>
          <p className="mt-4">
            This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can
            understand what type of cookies We use, or the information We collect using Cookies and how that information
            is used.
          </p>
          <p className="mt-4">
            Cookies do not typically contain any information that personally identifies a user, but personal information
            that we store about You may be linked to the information stored in and obtained from Cookies. For further
            information on how We use, store and keep your personal data secure, see our Privacy Policy.
          </p>
          <p className="mt-4">
            We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the
            Cookies We use.
          </p>
        </section>

        <section className="container mt-8">
          <h1 className="text-4xl">Interpretation and Definitions</h1>
          <h2 className="text-2xl mt-4">Interpretation</h2>
          <p>
            The words of which the initial letter is capitalized have meanings defined under the following conditions.
            The following definitions shall have the same meaning regardless of whether they appear in singular or in
            plural.
          </p>

          <h2 className="text-2xl mt-4">Definitions</h2>
          <p>For the purposes of these Terms and Conditions:</p>
          <ul>
            <li>{`●	“Company” (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Driflys`}</li>
            <li>{`●	“Cookies” are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.`}</li>
            <li>{`●	“Website” refers to Driflys, accessible from https://driflys.com`}</li>
            <li>{`●	“You” means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.`}</li>
          </ul>
        </section>

        <section className="container mt-8">
          <h1 className="text-4xl">The use of the Cookies</h1>
          <h2 className="mt-4 text-2xl">Type of Cookies We Use</h2>
          <p className="mt-4">
            Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or
            mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.
          </p>
          <p className="mt-4">We use both session and persistent Cookies for the purposes set out below:</p>
          <ul className="mt-2 space-y-4">
            <li>
              <p className="font-semibold">{`● Necessary / Essential Cookies`}</p>
              <p className="mt-2 ml-8">Type: Session Cookies</p>
              <p className="mt-2 ml-8">Administered by: Us</p>
              <p className="mt-2 ml-8">
                Purpose: These Cookies are essential to provide You with services available through the Website and to
                enable You to use some of its features. They help to authenticate users and prevent fraudulent use of
                user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We
                only use these Cookies to provide You with those services.
              </p>
            </li>
            <li>
              <p className="font-semibold">{`● Cookies Policy / Notice Acceptance Cookies`}</p>
              <p className="mt-2 ml-8">Type: Persistent Cookies</p>
              <p className="mt-2 ml-8">Administered by: Us</p>
              <p className="mt-2 ml-8">
                Purpose: These Cookies identify if users have accepted the use of cookies on the Website.{" "}
              </p>
            </li>
            <li>
              <p className="font-semibold">{`● Functionality Cookies`}</p>
              <p className="mt-2 ml-8">Type: Persistent Cookies</p>
              <p className="mt-2 ml-8">Administered by: Us</p>
              <p className="mt-2 ml-8">
                Purpose: These Cookies allow us to remember choices You make when You use the Website, such as
                remembering your login details or language preference. The purpose of these Cookies is to provide You
                with a more personal experience and to avoid You having to re-enter your preferences every time You use
                the Website.
              </p>
            </li>
            <li>
              <p className="font-semibold">{`● Tracking and Performance Cookies`}</p>
              <p className="mt-2 ml-8">Type: Persistent Cookies</p>
              <p className="mt-2 ml-8">Administered by: Third-Parties</p>
              <p className="mt-2 ml-8">
                Purpose: These Cookies are used to track information about traffic to the Website and how users use the
                Website. The information gathered via these Cookies may directly or indirectly identify you as an
                individual visitor. This is because the information collected is typically linked to a pseudonymous
                identifier associated with the device you use to access the Website. We may also use these Cookies to
                test new pages, features or new functionality of the Website to see how our users react to them.
              </p>
            </li>
          </ul>
        </section>

        <section className="container mt-8">
          <h1 className="text-4xl">Your Choices Regarding Cookies</h1>
          <p className="mt-4">
            If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your
            browser and then delete the Cookies saved in your browser associated with this website. You may use this
            option for preventing the use of Cookies at any time.
          </p>
          <p className="mt-4">
            If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some
            features may not function properly.
          </p>
          <p className="mt-4">
            If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the
            help pages of your web browser.
          </p>
          <p className="mt-4">
            For the Chrome web browser, please visit this page from Google:
            <span>
              <a
                href="https://support.google.com/accounts/answer/32050"
                target="_blank"
                rel="noreferrer"
                className="ml-2 text-blue-700 underline hover:cursor-pointer"
              >
                https://support.google.com/accounts/answer/32050
              </a>
            </span>
          </p>
          <p className="mt-4">
            For the Internet Explorer web browser, please visit this page from Microsoft:
            <span>
              <a
                href="http://support.microsoft.com/kb/278835"
                target="_blank"
                rel="noreferrer"
                className="ml-2 text-blue-700 underline hover:cursor-pointer"
              >
                http://support.microsoft.com/kb/278835
              </a>
            </span>
          </p>
          <p className="mt-4">
            For the Firefox web browser, please visit this page from Mozilla:
            <span>
              <a
                href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                target="_blank"
                rel="noreferrer"
                className="ml-2 text-blue-700 underline hover:cursor-pointer"
              >
                https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
              </a>
            </span>
          </p>
          <p className="mt-4">
            For the Safari web browser, please visit this page from Apple:
            <span>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                target="_blank"
                rel="noreferrer"
                className="ml-2 text-blue-700 underline hover:cursor-pointer"
              >
                https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
              </a>
            </span>
          </p>
        </section>
      </main>
    </Page>
  )
}

CookiesPolicy.layout = MainLayout

export default CookiesPolicy
