import { Container, Grid, Card, Button } from 'semantic-ui-react'
import * as Scroll from 'react-scroll'
import { Element, Link } from 'react-scroll'

const StepContainer = {
  textAlign:'center',
  margin: '0px'
}
const StepStyle = {
  minHeight:'40vh',
}
const Column = {
  display:'flex',
  alignItems:'center'
}
const Header = {
  fontSize: '40px',
  marginBottom:'50px',
  fontWeight: 300,
}
const Title = {
  fontSize: '20px',
  marginTop:'20px',
  marginBottom:'10px',
  fontWeight: 300,
}
const SubTitle = {
}
const StepImg = {
  width:'40%'
}
const DownButton = {
  backgroundColor:'#83d2e1',
  color:'#3d5fac',
  fontSize:'50px',
  padding:'2px',
  fontWeight:300
}
export default () => (
  <Element name="steps">
    <Container fluid className="">
      <Container style={StepContainer} className="default-color">
        <p style={Header}>Claim your money fast. Easy application.</p>
        <Grid relaxed columns={3} className="" style={StepStyle}>
          <Grid.Column style={Column}>
            <div>
              <img src='/static/images/Fill_Blue-01.png' style={StepImg}/>
              <p style={Title}>FILL OUT FORM</p>
              <p style={SubTitle}>Tell us about yourself and how much you want to borrow.</p>
            </div>
          </Grid.Column>
          <Grid.Column style={Column}>
            <div>
              <img src='/static/images/Approved_Blue-01.png' style={StepImg}/>
              <p style={Title}>CREDIT EVALUATION</p>
              <p style={SubTitle}>confirmation of your infos, phone interviews, and submission of documents online.</p>
            </div>
          </Grid.Column>
          <Grid.Column style={Column}>
            <div>
              <img src='/static/images/Get_Money_Blue-01.png' style={StepImg}/>
              <p style={Title}>GET YOUR MONEY</p>
              <p style={SubTitle}>Pick up your loan check at our offices Monday-Friday. Option to deposit to your bank account available.</p>
            </div>
          </Grid.Column>
        </Grid>
        <div style={{position:'relative', textAlign:'center', minHeight:'25vh', marginBottom:'150px'}}>
          <div style={{position:'absolute', bottom: 0, left:0, right:0}} className="">
            <p style={{fontSize:'30px', fontWeight:100, marginBottom:'5px'}}>Get Your Loan Now!</p>
            <Link to="forms" smooth={true} offset={-65}  duration={800} onSetActive={this.handleSetActive}>
              <Button circular icon='angle down' style={DownButton}/>
            </Link>
          </div>
        </div>
      </Container>
    </Container>
  </Element>
)
