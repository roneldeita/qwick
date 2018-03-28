import React from 'react'
import { Container, Sidebar, Menu, Divider, Grid, Sticky, Visibility, Dropdown, Icon } from 'semantic-ui-react'

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
  color:'#b3b3b3'
}
const HeadIcon = {
  color:'#5B8CC2',
  fontSize:'40px',
  position:'relative',
}

const Logo = {
  width:'180px'
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
              <Grid.Column className="" floated='left' width={5}>
                <img src='/static/images/logo_new.png' style={Logo} />
              </Grid.Column>
              <Grid.Column className="" floated='right' width={7} style={{paddingTop:'25px'}}>
                <div style={{display:'inline-block'}}>
                  <div className="" style={{display:'inline-block'}}>
                    <Icon className="" name="marker" style={HeadIcon}/>
                  </div>
                  <div className="" style={{display:'inline-block'}}>
                    <p style={HeadInfoMain}>Pacific Century Tower</p>
                    <p style={HeadInfo}>Brgy. South Triangle Quezon City</p>
                  </div>
                </div>
                <div style={{display:'inline-block', marginLeft:'25px'}}>
                  <div className="" style={{display:'inline-block'}}>
                    <Icon name="call" style={HeadIcon}/>
                  </div>
                  <div className="" style={{display:'inline-block'}}>
                    <p style={HeadInfoMain}>426-3051</p>
                    <p style={HeadInfo}>marketing@qwickfinancial.com</p>
                  </div>
                </div>
              </Grid.Column>
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
                <Menu.Item><Icon name="marker"/>Pacific Century Tower</Menu.Item>
                <Menu.Item><Icon name="call"/>426-3051</Menu.Item>
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
