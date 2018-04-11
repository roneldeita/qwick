import { Grid, Container, Image, Button, Icon } from 'semantic-ui-react'
import * as Scroll from 'react-scroll'
import { Element } from 'react-scroll'

const FormContainer = {
  backgroundColor:'#f3fbfe',
  padding:'100px 0px 0px 0px',
}
const Title = {
  fontSize:'50px',
  marginBottom:'0px',
  fontWeight: 300,
}
const Desc = {
  fontSize:'20px',
  fontWeight: 300,
  textAlign:'justify'
}
const FormImg = {
  width:'100%'
}
const DownloadButton = {
  backgroundColor:'#3d5fac',
  color:'#ffffff',
  fontWeight:300
}
const Forms = () => (
  <Element name="forms">
    <Container fluid style={FormContainer}>
      <Container className="">
        <Grid columns={2}>
          <Grid.Column className="default-color">
            <br/><br/>
            <p style={Title}>Lorem ipsum dolor</p>
            <p style={Desc}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don{`'`}t look even slightly believable.</p>
            <Button size="large" style={DownloadButton}><Icon name="download"/> Downlod Personal Loan Form</Button>
          </Grid.Column>
          <Grid.Column className="">
            <Image src="/static/images/form.png" style={FormImg}/>
          </Grid.Column>
        </Grid>
      </Container>
    </Container>
  </Element>
)

export default Forms
