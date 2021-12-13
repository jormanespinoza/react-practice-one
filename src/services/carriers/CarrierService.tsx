import Axios from 'axios'
import { carriersApiBaseUrl, glamitAuthToken } from '../../configuration/application.properties'

const axios = Axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': glamitAuthToken,
    'Glamit-Env': ''
  },
  responseType: 'json'
})

export const getCarriers = () => {
  return axios.get(`${carriersApiBaseUrl}/carrier`)
}