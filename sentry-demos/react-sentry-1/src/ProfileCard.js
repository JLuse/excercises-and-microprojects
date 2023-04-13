
import { withScope } from '@sentry/react';

function ProfileCard() {
  
  return ( 
  <div>
    <h2>Profile Card</h2>
    <button onClick={() => {throw new Error('this is a trggered error from profile card component')}}>Click me!</button>
  </div>
  )
}

export default ProfileCard;