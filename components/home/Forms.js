import { Grid, Container, Image } from 'semantic-ui-react'

const FormContainer = {
  minHeight:'500px',
  backgroundColor:'#f3fbfe',
  padding:'100px 0px 0px 0px',
}

const Forms = () => (
  <Container fluid style={FormContainer}>
    <Container>
      <Grid relaxed='very' columns={2}>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
          <Image src="/static/images/form.png" style={{position:'absolute', top:'-41px'}}/>
        </Grid.Column>
      </Grid>
    </Container>
  </Container>
)

export default Forms
