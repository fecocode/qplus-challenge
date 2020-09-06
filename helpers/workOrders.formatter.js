import moment from 'moment'

export const workOrdersFormatter = (WO) => {
  return {
    key: WO.id,
    description: WO.description,
    dateStart: moment(WO.dateStart).format('DD/MM/YYYY hh:mm'),
    orderNumber: WO.workOrderNumber
  }
}

