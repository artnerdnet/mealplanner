import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../auth/google';

const Navigation: React.FC = () => {
  const onSuccess = (res) => {
    console.log('logged in', res)

    refreshTokenSetup(res)
  }
  console.log(process.env.GOOGLE_OAUTH_CLIENT_ID, 'client id')
  const clientid = process.env.GOOGLE_OAUTH_CLIENT_ID
  const onFailure = (res) => {
    console.log('fail log in', res)
  }

  return (
    <div className="flex flex-col m-4">
      <GoogleLogin 
        clientId={clientid}
        buttonText="Log in"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={false}
      />
    </div>
  );
};

export default Navigation;
