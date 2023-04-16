import {auth,provider} from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
export const Login =()=> {
    const navigate = useNavigate()
    const signInWithGoogle = async ()=> {
        const result = await signInWithPopup(auth,provider)
        console.log(result)
        navigate('/')
    }
    return (
        <div className='  bg-slate-500 flex justify-center m-20  p-10 rounded'> 
        <div className=' flex-auto justify-center '>
            <p className=' text-white my-2'>Sign in with Google to continue</p>
            <br /><br />
            <p className=' text-white bg-slate-700 p-2 rounded my-2 cursor-pointer text-center hover:bg-slate-400' onClick={signInWithGoogle}>Sign in With Google</p>
        </div>
        </div>
    )
}