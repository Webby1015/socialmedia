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
        <div className='bg-sky-500/50 h-16 flex-auto items-stretch'>
            
            <Link className='bg-white mx-5 rounded px-5 py-5'  to='/'>Home</Link>
            <Link className='bg-white mx-5 rounded px-5 py-5' to='/login'>Login</Link>
            {user && (<>
            <div>{user?.displayName || ""}
                <img className='b' src={user?.photoURL|| ""} alt="" width='50' height='50'/></div>
                <br />
            <button onClick={logout}>Log Out</button>
            </>)}
                
        </div>

    )
}