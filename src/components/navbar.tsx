import {Link} from 'react-router-dom'
import { auth } from '../config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth';
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export const Navbar = ()=> {
    // console.log(auth)
    const logout =()=> {
        signOut(auth)
    }
    const [user] = useAuthState(auth)
    return (    
        <div className=' bg-sky-900 flex h-20 justify-end'>
            
            {user && (<>
            <div className='m-2 flex'>
                
                <img className='rounded-full h-15' src={user?.photoURL|| ""} alt="" />
                <p className='m-5 text-white'>{user.displayName || ""}</p>
                
            </div>
            <p className=' bg-white m-5 p-2 rounded cursor-pointer hover:bg-slate-950 hover:text-white' onClick={logout}>Log Out</p>
            <p className=' bg-white m-5 p-2 rounded cursor-pointer hover:bg-slate-950 hover:text-white' >Create Post</p>
            </>)}

            <Link className='bg-white m-5 p-2 rounded h-10  hover:bg-slate-950 hover:text-white'  to='/'>Home</Link>
            {!user && (<><Link className='bg-white m-5 p-2 rounded  h-10  hover:bg-slate-950 hover:text-white' to='/login'>Login</Link></>)}
            
                
        </div>

    )
}