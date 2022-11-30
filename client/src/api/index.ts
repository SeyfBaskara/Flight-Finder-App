import axios from 'axios'

const url = 'http://localhost:5000'

export const searchTrips = (flight: UserInputState) => axios.post(`${url}/api/searchtrip`, flight)
