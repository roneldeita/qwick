import React from 'react'
import { Container, Grid, Button, Transition, Image } from 'semantic-ui-react'
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'

const BannerStyle = {
  minHeight:'55vh',
}
const Column = {
  display:'flex',
  alignItems:'center'
}
const SloganContainer = {
  minWidth:'100%',
  position:'absolute'
}
const Slogan = {
  fontSize:'50px',
  marginBottom:'0px',
  fontWeight: 300,
}
const BannerButton = {
  marginTop:'15px',
  backgroundColor:'#3d5fac',
  fontSize:'18px',
  color:'#ffffff',
  fontWeight:300,
  padding:'15px 75px'
}
const ImgBanner = {
  width:'100%'
}
const DownButton = {
  backgroundColor:'#83d2e1',
  color:'#3d5fac',
  fontSize:'60px',
  padding:'2px',
  fontWeight:300
}
class Banner extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      visible: false
    }
  }
  render(){
    setTimeout(function (){
      this.setState({visible:!this.state.visible})
    }.bind(this), 5000)
    return(
      <Container className="default-color">
        <Grid columns={2} style={BannerStyle}>
          <Grid.Row>
            <Grid.Column style={Column}>
              <Transition visible={this.state.visible} animation='fade up' duration={600}>
                <div style={SloganContainer}>
                  <p style={Slogan}>Need Cash now?</p>
                  <p style={Slogan}>Apply ka na ng</p>
                  <p style={Slogan}>Qwick Cash Loans</p>
                  <Button style={BannerButton}>Apply Now</Button>
                </div>
              </Transition>
              <Transition visible={!this.state.visible} animation='fade up' duration={600}>
                <div style={SloganContainer}>
                  <p style={Slogan}>Gadget ba kamo?</p>
                  <p style={Slogan}>Qwick installment loan</p>
                  <p style={Slogan}>ang bagay sayo</p>
                  <Button style={BannerButton}>Apply Now</Button>
                </div>
              </Transition>
            </Grid.Column>
            <Grid.Column style={Column}>=
              <Image src="/static/images/banner_transparent.png" style={ImgBanner}/>=
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div style={{textAlign:'center', marginBottom:'200px', marginTop:'20px'}}>
          <p style={{fontSize:'30px', fontWeight:100, marginBottom:'5px'}}>How Do Qwick Loans Work?</p>
          <Link to="steps" smooth={true} offset={-30}  duration={800} onSetActive={this.handleSetActive}>
            <Button circular icon='angle down' style={DownButton}/>
          </Link>
        </div>
      </Container>
    )
  }
}

export default Banner
