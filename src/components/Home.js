import React from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';

const Home = () => {
  const { user, logOut } = useUserAuth();
  const handleLogOut = async (e) => {
    // e.preventDefault();
    try{
      await logOut();
    }catch(err){
      console.log(err.message)
    }
  }
  console.log(user);
  return (
    <>
        <div className='p-4 box mt-3 text-center'>Hello Welcome <br />{user && user.email}</div>
        <div className='d-grid gap-2'>
            <Button variant='primary' onClick={handleLogOut}>Log out</Button>
        </div>
    </>
  );
};

export default Home