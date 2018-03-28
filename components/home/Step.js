import { Container, Grid, Card } from 'semantic-ui-react'
import * as Scroll from 'react-scroll';
import { Element } from 'react-scroll'

const StepContainer = {
  padding:'100px 0px 250px 0px',
  textAlign:'center',
}
const Header = {
  fontSize: '40px',
  marginBottom:'20px',
  fontWeight: 300,
}
const Title = {
  fontSize: '24px',
  marginTop:'20px',
  marginBottom:'20px',
  fontWeight: 300,
}
const StepImg = {
  width:'65%'
}
export default () => (
  <Element name="steps">
    <Container fluid>
      <Container style={StepContainer} className="default-color">
        <p style={Header}>Claim your money fast. Easy application.</p>
        <br/>
        <Grid relaxed='very' columns={3}>
          <Grid.Column>
            <img src='/static/images/Fill_Blue-01.png' style={StepImg}/>
            <p style={Title}>FILL OUT FORM</p>
            <p>Tell us about yourself and how much you want to borrow.</p>
          </Grid.Column>
          <Grid.Column>
            <img src='/static/images/Approved_Blue-01.png' style={StepImg}/>
            <p style={Title}>CREDIT EVALUATION</p>
            <p>confirmation of your infos, phone interviews, and submission of documents online.</p>
          </Grid.Column>
          <Grid.Column>
            <img src='/static/images/Get_Money_Blue-01.png' style={StepImg}/>
            <p style={Title}>GET YOUR MONEY</p>
            <p>Pick up your loan check at our offices Monday-Friday. Option to deposit to your bank account available.</p>
          </Grid.Column>
        </Grid>
      </Container>
    </Container>
  </Element>
)
