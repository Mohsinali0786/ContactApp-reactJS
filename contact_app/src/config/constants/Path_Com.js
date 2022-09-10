
import Home from '../../component/Home/index.js'
import  AddContact from  '../../component/AddContact/index.js'
import  EditContact from '../../component/EditContact/index.js'

export const HOME='/'
export const ADDCONTACT='/addcontact'
export const EDITCONTACT='/editcontact/:id'


export const NavArray =[
    {
        path:HOME,
        component:Home
    },    
    {
        path:ADDCONTACT,
        component:AddContact
    },
    {
        path:EDITCONTACT,
        component:EditContact
    }
]


