import Head from 'next/head'
import TopNavigation from './TopNavigation'
import BottomNavigation from './BottomNavigation'

export default (props) => {
  return(
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"/>
      </Head>
      <TopNavigation/>
      <div style={{minHeight:'800px'}}>
        {props.children}
      </div>
      <BottomNavigation />
      <style jsx global>{`
        html, body{
          background-color:#f9f9f9;
          font-family: 'Roboto', sans-serif;
          color:#666666 !important
        }
        .border{
          border: 1px solid #666666
        }
        .default-color{
          color:#3d5fac
        }
      `}
      </style>
    </div>
  )
}
