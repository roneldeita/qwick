import { Container, Button, Step } from 'semantic-ui-react'
import Layout from '../components/layout/Layout'
import Steps from '../components/home/Step'

const Banner = {
  backgroundColor:'#f0f0f0',
  minHeight:'450px',
  zIndex:'-99 !important'
}
export default () => (
  <Layout>
    <Container fluid>
      <div style={Banner}></div>
      <Steps/>
    </Container>
  </Layout>
)
