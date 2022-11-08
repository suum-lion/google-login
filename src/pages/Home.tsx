import { Outlet, useLocation } from 'react-router-dom'

import Button from '@/components/design/Button'

const Home = () => {
  const { pathname } = useLocation()

  return (
    <div>
      {pathname === '/' ? (
        <div>
          <h1>Home</h1>
          <Button theme="Accent" type="button" text="버튼" onClick={() => alert('button')} />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  )
}

export default Home
