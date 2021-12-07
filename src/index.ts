import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import {User, getUserData, getFavoritesAmount} from './user-model.js'
import {getTodosByCount} from './todos.js'
import {addDays, FlatRentSdk} from './flat-rent-sdk.js'




window.addEventListener('DOMContentLoaded', () => {
  const user: User = getUserData();
  renderUserBlock(user.userName,user.avatarUrl,getFavoritesAmount());
  const checkin = new Date();
  const checkout =new Date();
  checkout.setMonth(checkout.getMonth()+2, 0);
  renderSearchFormBlock(checkin,checkout);
  renderSearchStubBlock();
  renderToast(
    {text: 'Это пример уведомления.', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
  console.log(getTodosByCount(3));
  const a = new FlatRentSdk();
  console.log(a.get('vnd331'));
})
