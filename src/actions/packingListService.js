import axios from 'axios'


export function addPackingListItem(item){
  return axios.post(`/api/dashboard/${item.id}/packingList`,{
    item: item.item
  })
}

export function getPackingListItems(id){
  console.log(id)
  return axios.get(`/api/dashboard/${id}/packingList`)
}

export function deletePackingListItem(id){
  return axios.delete(`/api/dashboard/packingList/${id}`)
}
