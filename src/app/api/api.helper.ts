export const getContentType = () => ({
    'Content-Type': 'application/json'
})

export const errorCatch = (error: any): string => 
    error.responce && error.responce.data
    ? typeof error.response.data.message === 'object'
    ? error.response.data.message[0] : error.response.data.message : error.message
    ? error.message : 'Something went wrong'
    

