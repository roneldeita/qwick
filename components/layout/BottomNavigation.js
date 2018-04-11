import { Container, Grid, Image, List, Icon, Form } from 'semantic-ui-react'

const Slogan = {
  color:'#ffffff',
  fontSize:'32px',
  fontWeight:200,
}
export default () => (
  <Container fluid>
    <div style={{minHeight:'100px', backgroundColor:'#3d5fac'}}>
      <Container style={{padding:'25px'}}>
        <p style={Slogan}>Need cash now? Call <b>+63 905 402 7240</b> today!</p>
      </Container>
    </div>
    <div style={{height:'200px'}}>
      <Container style={{padding:'50px'}}>
        <Grid columns={4} padded>
          <Grid.Column>
            <Image style={{width:'180px'}} src="/static/images/logo_new.png"/>
            <br/>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
          </Grid.Column>
          <Grid.Column>
            <h3 style={{margin:'30px 0px 35px 0px'}}>LINKS</h3>
            <List>
              <Grid columns={2} divided='vertically'>
                <Grid.Column>
                  <List.Item><Icon name="angle right"/>Home</List.Item>
                  <List.Item><Icon name="angle right"/>Services</List.Item>
                  <List.Item><Icon name="angle right"/>Events</List.Item>
                  <List.Item><Icon name="angle right"/>Testimonials</List.Item>
                </Grid.Column>
                <Grid.Column style={{marginLeft:'-20px'}}>
                  <List.Item><Icon name="angle right"/>Contact Us</List.Item>
                  <List.Item><Icon name="angle right"/>About Us</List.Item>
                </Grid.Column>
              </Grid>
            </List>
          </Grid.Column>
          <Grid.Column>
          <h3 style={{margin:'30px 0px 35px 0px'}}>OUR OFFICE</h3>
          <List>
            <List.Item>
              <List.Icon name="marker"/>
              <List.Content>Unit 218 pacific Century Tower, 1472-146 Quezon Ave. Brgy. South Triangle Quezon City</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="call"/>
              <List.Content>0905 402 7240</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="call"/>
              <List.Content>0918 340 4537</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="mail"/>
              <List.Content>hershey.romero@qwickfinancial.com</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="mail"/>
              <List.Content>sales@qwickfinancial.com</List.Content>
            </List.Item>
          </List>
          </Grid.Column>
          <Grid.Column>
            <h3 style={{margin:'30px 0px 35px 0px'}}>EMAIL NEWSLETTER</h3>
            <p>Get subscriber only insights & news delivered by Finance Pro</p>
            <Form>
              <Form.Group>
                <Form.Input placeholder='Email' name='email' />
                <Form.Button content='Submit' basic color="blue"/>
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  </Container>
)
