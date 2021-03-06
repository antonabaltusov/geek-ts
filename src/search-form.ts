import { renderBlock } from './lib.js'

export function renderSearchFormBlock (checkin:Date, checkout:Date) {

  const MIN = checkin.toISOString().slice(0,10);
  const MAX = checkout.toISOString().slice(0,10);

  const checkinDefault = new Date(checkin);
  checkinDefault.setDate(checkinDefault.getDate()+1);
  const checkinDefaultString = checkinDefault.toISOString().slice(0,10);

  const checkoutDefault = new Date(checkinDefault);
  checkoutDefault.setDate(checkoutDefault.getDate()+2);
  const checkoutDefaultString = checkoutDefault.toISOString().slice(0,10);
   
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${checkinDefaultString}" min="${MIN}" max="${MAX}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${checkoutDefaultString}" min="${MIN}" max="${MAX}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
