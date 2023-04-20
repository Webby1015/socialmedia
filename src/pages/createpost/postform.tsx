import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"

export const PostForm =()=> {
    const schema = yup.object().shape({
        title : yup.string().required("You must add a title"),
        description : yup.string().required("You must add a Description"),

    })
    return (
        <form className=" flex-col  text-center m-20 bg-slate-500 rounded-md ">
            <div className="flex-col">
            <p className=" text-white p-10 ">Create a post</p>
            <input className="h-10 rounded-sm" type="text" title="post-title" placeholder="    Title"  required/>
            </div>
            <br />
            <textarea title="descriptopn" className=" h-32 w-40"></textarea>
            <input className=' text-white bg-slate-700 p-2 rounded my-10 cursor-pointer text-center hover:bg-slate-400 ' type="submit"/>
        </form>
    )
}