import React from 'react'
import { Container, Sidebar, Menu, Divider, Grid, Visibility, Dropdown, Icon, Button } from 'semantic-ui-react'

const HeadContainer = {
  backgroundColor:'#ffffff',
}
const Head = {
  padding:'15px 0px 10px 0px'
}
const HeadInfoMain = {
  fontSize:'16px',
  fontWeight:600,
  lineHeight:'25px',
  marginBottom:'0px'
}
const HeadInfo = {
  fontSize:'12px',
  lineHeight:'15px',
  marginBottom:'0px',
  color:'#909090'
}
const HeadIcon = {
  color:'#5B8CC2',
  fontSize:'40px',
  position:'relative',
}
const Logo = {
  width:'180px'
}
const MenuButton = {
  marginTop:'10px',
  fontSize:'18px',
  width:'100%',
  padding:'15px 5px'
}

const activeItem = 'home'

class TopNav extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Togglemenu: false
    }
  }
  StickTopMenu = (e) =>{
    //onsole.log('show menu')
    this.setState({Togglemenu:true})
  }

  UnStickTopMenu = (e) =>{
    //console.log('hide menu')
    this.setState({Togglemenu:false})
  }
  render(){
    // console.log(this.state.Togglemenu)
    return (
      <div>
        <div style={HeadContainer}>
          <Container style={Head}>
            <Grid>
              <Grid.Column className="" floated='left' width={4}>
                <img src='/static/images/logo_new.png' style={Logo} />
              </Grid.Column>
              <Grid.Column className="" width={4} style={{paddingTop:'25px'}}>
                <div style={{display:'inline-block'}}>
                  <div className="" style={{display:'inline-block'}}>
                    <Icon className="" name="marker" style={HeadIcon}/>
                  </div>
                  <div className="" style={{display:'inline-block'}}>
                    <p style={HeadInfoMain}>Pacific Century Tower</p>
                    <p style={HeadInfo}>Brgy. South Triangle Quezon City</p>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column className="" width={4} style={{paddingTop:'25px'}}>
                <div style={{display:'inline-block', marginLeft:'25px'}}>
                  <div className="" style={{display:'inline-block'}}>
                    <Icon name="call" style={HeadIcon}/>
                  </div>
                  <div className="" style={{display:'inline-block'}}>
                    <p style={HeadInfoMain}>0905 402 7240</p>
                    <p style={HeadInfo}>sales@qwickfinancial.com</p>
                  </div>
                </div>
              </Grid.Column>
              {/*<Grid.Column className="border" floated='right' width={4}>
                  <Button style={MenuButton} color='blue' basic><Icon name="download"/> Donwload Form</Button>
                </Grid.Column>*/}
            </Grid>
          </Container>
        </div>
        <Divider style={{margin:'0px'}}/>
        <Container>
          <Menu secondary style={{margin:'10px 0px'}}>
            <Menu.Item name='Home' active={activeItem === 'homex'} onClick={this.handleItemClick} />
            <Menu.Item name='Loan' active={activeItem === 'loan'} onClick={this.handleItemClick} />
            <Menu.Item name='About' active={activeItem === 'about'} onClick={this.handleItemClick} />
            <Menu.Item name='Contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
              <Menu.Item><Icon name="facebook f"/></Menu.Item>
              <Menu.Item><Icon name="twitter"/></Menu.Item>
              <Menu.Item><Icon name="instagram"/></Menu.Item>
              <Menu.Item><Icon name="youtube"/></Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>
        <Divider/>
        <Visibility onBottomPassed={this.StickTopMenu} onBottomVisible={this.UnStickTopMenu} once={false}>
          <Sidebar as={Menu} secondary animation='overlay' direction='top' visible={this.state.Togglemenu} style={{backgroundColor:'#ffffff'}}>
            <Container>
              <Menu.Item>
                <img src='/static/images/logo_new.png' style={{width:'110px'}} />
              </Menu.Item>
              <Menu.Item name='Home' active={activeItem === 'homex'} onClick={this.handleItemClick} />
              <Menu.Item name='Loan' active={activeItem === 'loan'} onClick={this.handleItemClick} />
              <Menu.Item name='About' active={activeItem === 'about'} onClick={this.handleItemClick} />
              <Menu.Item name='Contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
              <Menu.Menu position='right'>
                <Menu.Item><Icon name="mail"/>sales@qwickfinancial.com</Menu.Item>
                <Menu.Item><Icon name="call"/>0905 402 7240</Menu.Item>
              </Menu.Menu>
            </Container>
          </Sidebar>
        </Visibility>
        <style global jsx>{`
          .ui.secondary.menu .item{
            font-size: 15px;
            cursor:pointer;
            color: #666666;
          }
          .ui.secondary.menu .item:hover{
            color: #4277BB;
            font-weight: 500;
          }
        `}
        </style>
      </div>
    )
  }
}

export default TopNav
