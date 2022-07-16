import { MainLayout } from '../layouts'

// components
import Page from '../components/Page'

const Home = () => {
  return (
    <Page title="Driflys">
      <main>
        <h1>Body</h1>
      </main>
    </Page>
  )
}

Home.layout = MainLayout

export default Home
