import React from 'react'
import { Container, Grid, Button, Transition, Image } from 'semantic-ui-react'
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'

const BannerStyle = {
  minHeight:'50vh',
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
  backgroundColor:'transparent',
  border:'1px solid #3d5fac',
  fontSize:'18px',
  color:'#3d5fac',
  fontWeight:300,
  padding:'15px 75px'
}
const ImgBanner = {
  width:'100%'
}
const DownButton = {
  backgroundColor:'#83d2e1',
  color:'#3d5fac',
  fontSize:'50px',
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
        <Grid columns={2} style={BannerStyle} className="">
          <Grid.Row>
            <Grid.Column style={Column}>
              <Transition visible={this.state.visible} animation='fade up' duration={600}>
                <div style={SloganContainer}>
                  <p style={Slogan}>Need Cash now?</p>
                  <p style={Slogan}>Apply ka na ng</p>
                  <p style={Slogan}>Qwick Cash Loans</p>
                  <Link to="forms" smooth={true} offset={-110}  duration={800} onSetActive={this.handleSetActive}>
                    <Button style={BannerButton}>Apply Now</Button>
                  </Link>
                </div>
              </Transition>
              <Transition visible={!this.state.visible} animation='fade up' duration={600}>
                <div style={SloganContainer}>
                  <p style={Slogan}>Gadget ba kamo?</p>
                  <p style={Slogan}>Qwick installment loan</p>
                  <p style={Slogan}>ang bagay sayo</p>
                  <Link to="forms" smooth={true} offset={-110}  duration={800} onSetActive={this.handleSetActive}>
                    <Button style={BannerButton}>Apply Now</Button>
                  </Link>
                </div>
              </Transition>
            </Grid.Column>
            <Grid.Column style={Column}>
              <Image src="/static/images/banner_transparent.png" style={ImgBanner}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div style={{position:'relative', textAlign:'center', minHeight:'25vh', marginBottom:'100px'}}>
          <div style={{position:'absolute', bottom: 0, left:0, right:0}} className="">
            <p style={{fontSize:'30px', fontWeight:100, marginBottom:'5px'}}>How do Qwick Loans work?</p>
            <Link to="steps" smooth={true} offset={-110} duration={800} onSetActive={this.handleSetActive}>
              <Button circular icon='angle down' style={DownButton}/>
            </Link>
          </div>
        </div>
      </Container>
    )
  }
}

export default Banner
