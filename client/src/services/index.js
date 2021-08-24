export const baseURL = "https://api.airtable.com/v0/appzTRr5Ju0pMpe1m/plays"

export const config = { 
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
    }
 }