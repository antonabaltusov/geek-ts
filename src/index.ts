import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'


window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Wade Warren','/img/avatar.png',0);
  const checkin = new Date();
  const checkout =new Date();
  checkout.setMonth(checkout.getMonth()+2, 0);
  renderSearchFormBlock(checkin,checkout);
  renderSearchStubBlock();
  renderToast(
    {text: 'Это пример уведомления.', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
