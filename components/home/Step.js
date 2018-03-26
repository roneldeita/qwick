import { Container, Grid, Card, Image } from 'semantic-ui-react'
const StepContainer = {
  margin:'45px 0px 200px 0px',
  textAlign:'center'
}
const Title = {
  color:'#5B8CC2',
  fontSize: '50px',
  marginBottom:'0px',
  fontWeight: 300,
}
const SubTitle = {
  fontSize: '20px',
  fontWeight: 300,
  marginBottom:'50px'
}
export default () => (
  <Container style={StepContainer}>
    <p style={Title}>How it works?</p>
    <p style={SubTitle}>Claim your money fast. Easy application.</p>
    <Card.Group itemsPerRow={3}>
        <Card>
          <Image src='/static/images/fillout.jpg' />
          <Card.Content>
            <Card.Header>
              FILL OUT FORM
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Tell us about yourself and how much you want to borrow.
              </span>
            </Card.Meta>
          </Card.Content>
        </Card>
        <Card>
          <Image src='/static/images/evaluate.jpg' />
          <Card.Content>
            <Card.Header>
              CREDIT EVALUATION
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                confirmation of your infos, phone interviews, and submission of documents online.
              </span>
            </Card.Meta>
          </Card.Content>
        </Card>
        <Card>
          <Image src='/static/images/money.jpg' />
          <Card.Content>
            <Card.Header>
              GET YOUR MONEY
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Pick up your loan check at our offices Monday-Friday. Option to deposit to your bank account available.
              </span>
            </Card.Meta>
          </Card.Content>
        </Card>
    </Card.Group>
    <style jsx global>{`
      .ui.card>.content>.header,
      .ui.cards>.card>.content>.header{
        font-size: 22px !important;
        margin: 15px 0px !important;
        color: #5B8CC2 !important;
        font-weight: 300 !important;
      }
    `}
    </style>
  </Container>
)
