
import Home from '../../component/Home/index.js'
import  AddContact from  '../../component/AddContact/index.js'
import  EditContact from '../../component/EditContact/index.js'
import  AddContactANT from  '../../component/form/Sig'



const HOME='/'
const ADDCONTACT='/addcontact'
const EDITCONTACT='/editcontact/:id'


export const NavArray =[
    {
        path:HOME,
        component:Home
    },    
    {
        path:ADDCONTACT,
        component:AddContactANT
    },
    {
        path:EDITCONTACT,
        component:EditContact
    }
]


