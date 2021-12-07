export function cloneDate(date:Date):Date
export function addDays(date:Date, days:number):Date

export interface IFlat {
  id: string
  title: string
  details: string
  photos: string[]
  coordinates: number[]
  bookedDates: Date[]
  price: number
}

export interface IParameters {
  city:string
  checkInDate:Date
  checkOutDate:Date
  priceLimit?:number
}

export class FlatRentSdk {
  get(id:string):Promise<IFlat|null>
  search(parameters:IParameters):IFlat[]
  book(flatId:number, checkInDate:Date, checkOutDate:Date):number
}

