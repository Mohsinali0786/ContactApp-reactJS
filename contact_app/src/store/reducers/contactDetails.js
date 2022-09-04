const initialState = [
    {
        id: 0,
        name: 'Kalim',
        email: 'kalim@gmail.com',
        number: parseInt('03001234567'),
    },
    {
        id: 1,
        name: 'Imran',
        email: 'Imran@gmail.com',
        number: parseInt('0300234567'),
    },
    {
        id: 2,
        name: 'Fahad',
        email: 'Fahad@gmail.com',
        number: parseInt('0320234567'),
    }
]


const contactDetails = (state = initialState, action) => {
    console.log('action====>', action.type)
    switch (action.type) {
        case "ADD_CONTACT":
            {
                state = [...state, action.payload]
                return state
            }

        default: return state

    }
    // return state

}
export default contactDetails