import {REGISTER} from '../const'
export const RegisterAction=(data)=>{
    return(

        {type:REGISTER,
        payload:data,}
    )

}

