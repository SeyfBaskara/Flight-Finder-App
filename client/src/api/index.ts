import axios from 'axios'

const url = 'http://localhost:5000'

export const searchTrips = (flight: IUserInputState) => axios.post(`${url}/api/searchtrip`, flight)
