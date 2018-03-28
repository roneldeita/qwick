import { Container, Button, Step } from 'semantic-ui-react'
import Layout from '../components/layout/Layout'
import Banner from '../components/home/Banner'
import Forms from '../components/home/Forms'
import Steps from '../components/home/Step'

export default () => (
  <Layout>
    <Container fluid>
      <Banner/>
      <Steps/>
      <Forms/>
    </Container>
  </Layout>
)
