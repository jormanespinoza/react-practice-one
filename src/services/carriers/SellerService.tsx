import Axios from 'axios'
import {
  carriersApiBaseUrl,
  glamitAuthToken
} from '../../configuration/application.properties'

const axios = Axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: glamitAuthToken,
    'Glamit-Env': ''
  },
  responseType: 'json'
})

export const getSellersIds = () => {
  return axios.get(`${carriersApiBaseUrl}/seller/ids`)
}

export const getSellerById = (sellerId: string) => {
  axios.defaults.headers.common['Glamit-Env'] = sellerId
  return axios.get(`${carriersApiBaseUrl}/seller`)
}
