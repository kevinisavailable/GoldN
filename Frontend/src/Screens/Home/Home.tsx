import {useAuth} from '@pangeacyber/react-auth'

const Home = () => {
  const {authenticated} = useAuth()
  console.log(authenticated)
  
  return (
    <div>
        Home
    </div>
  )
}

export default Home