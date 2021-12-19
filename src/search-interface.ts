export interface ISearchFormData {
  checkin?: string;
  checkout?: string;
  price?: string;
}

export const searchFormFunc = (formData: ISearchFormData): void => {
  console.log(formData)
}

//export interface IPlace { exemple?:string}

// export async function getPlace(): Promise<Array<IPlace> | string>  {
//   try {
//     setTimeout(()=>{
//       if(Math.random() < 0.5){
//         return[]
//       } else {return new Error('ERRROORR')}
//     },500)
//   } catch (error) {
//     if (error) {
//       return error.message
//     }
//   }
// }

// export function getPlace () {new Promise<Array<IPlace>>((resolve, reject) => {
//   // Обещание разрешилось спустя несколько часов
//   if(Math.random() < 0.5){
//     setTimeout(() => {
//       resolve([])
//     }, 400)} else {reject('We couldn\'t mow the lawn')}
// })}
