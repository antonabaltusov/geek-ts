import { renderBlock } from './lib.js';
// Функция должна принимать дату въезда и дату выезда. Аргументы должны иметь подходящие для них типы. 
// При этом минимальная дата, которую можно выбрать это дата сегодняшнего дня, 
// а максимальная дата - последний день следующего месяца. Будем считать это ограничениями сервиса. 
// По умолчанию поля заполняются следующим образом. Дата въезда это следующий день от текущей даты. 
// Дата выезда - плюс два дня от даты въезда
export function renderSearchFormBlock(checkin, checkout) {
    const MIN = checkin.toISOString().slice(0, 10);
    const MAX = checkout.toISOString().slice(0, 10);
    const checkinDefault = new Date(checkin);
    checkinDefault.setDate(checkinDefault.getDate() + 1);
    const checkinDefaultString = checkinDefault.toISOString().slice(0, 10);
    const checkoutDefault = new Date(checkinDefault);
    checkoutDefault.setDate(checkoutDefault.getDate() + 2);
    const checkoutDefaultString = checkoutDefault.toISOString().slice(0, 10);
    renderBlock('search-form-block', `
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
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUV0Qyx1R0FBdUc7QUFDdkcsK0VBQStFO0FBQy9FLG9HQUFvRztBQUNwRyxvR0FBb0c7QUFDcEcsNENBQTRDO0FBRTVDLE1BQU0sVUFBVSxxQkFBcUIsQ0FBRSxPQUFZLEVBQUUsUUFBYTtJQUVoRSxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQztJQUM5QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQztJQUUvQyxNQUFNLGNBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxjQUFjLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRCxNQUFNLG9CQUFvQixHQUFHLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXRFLE1BQU0sZUFBZSxHQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELGVBQWUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELE1BQU0scUJBQXFCLEdBQUcsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFFeEUsV0FBVyxDQUNULG1CQUFtQixFQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MkRBaUJ1RCxvQkFBb0IsVUFBVSxHQUFHLFVBQVUsR0FBRzs7Ozs0REFJN0MscUJBQXFCLFVBQVUsR0FBRyxVQUFVLEdBQUc7Ozs7Ozs7Ozs7OztLQVl0RyxDQUNGLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcblxuLy8g0KTRg9C90LrRhtC40Y8g0LTQvtC70LbQvdCwINC/0YDQuNC90LjQvNCw0YLRjCDQtNCw0YLRgyDQstGK0LXQt9C00LAg0Lgg0LTQsNGC0YMg0LLRi9C10LfQtNCwLiDQkNGA0LPRg9C80LXQvdGC0Ysg0LTQvtC70LbQvdGLINC40LzQtdGC0Ywg0L/QvtC00YXQvtC00Y/RidC40LUg0LTQu9GPINC90LjRhSDRgtC40L/Riy4gXG4vLyDQn9GA0Lgg0Y3RgtC+0Lwg0LzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNCw0YLQsCwg0LrQvtGC0L7RgNGD0Y4g0LzQvtC20L3QviDQstGL0LHRgNCw0YLRjCDRjdGC0L4g0LTQsNGC0LAg0YHQtdCz0L7QtNC90Y/RiNC90LXQs9C+INC00L3RjywgXG4vLyDQsCDQvNCw0LrRgdC40LzQsNC70YzQvdCw0Y8g0LTQsNGC0LAgLSDQv9C+0YHQu9C10LTQvdC40Lkg0LTQtdC90Ywg0YHQu9C10LTRg9GO0YnQtdCz0L4g0LzQtdGB0Y/RhtCwLiDQkdGD0LTQtdC8INGB0YfQuNGC0LDRgtGMINGN0YLQviDQvtCz0YDQsNC90LjRh9C10L3QuNGP0LzQuCDRgdC10YDQstC40YHQsC4gXG4vLyDQn9C+INGD0LzQvtC70YfQsNC90LjRjiDQv9C+0LvRjyDQt9Cw0L/QvtC70L3Rj9GO0YLRgdGPINGB0LvQtdC00YPRjtGJ0LjQvCDQvtCx0YDQsNC30L7QvC4g0JTQsNGC0LAg0LLRitC10LfQtNCwINGN0YLQviDRgdC70LXQtNGD0Y7RidC40Lkg0LTQtdC90Ywg0L7RgiDRgtC10LrRg9GJ0LXQuSDQtNCw0YLRiy4gXG4vLyDQlNCw0YLQsCDQstGL0LXQt9C00LAgLSDQv9C70Y7RgSDQtNCy0LAg0LTQvdGPINC+0YIg0LTQsNGC0Ysg0LLRitC10LfQtNCwXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hGb3JtQmxvY2sgKGNoZWNraW46RGF0ZSwgY2hlY2tvdXQ6RGF0ZSkge1xuXG4gIGNvbnN0IE1JTiA9IGNoZWNraW4udG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKTtcbiAgY29uc3QgTUFYID0gY2hlY2tvdXQudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKTtcblxuICBjb25zdCBjaGVja2luRGVmYXVsdCA9IG5ldyBEYXRlKGNoZWNraW4pO1xuICBjaGVja2luRGVmYXVsdC5zZXREYXRlKGNoZWNraW5EZWZhdWx0LmdldERhdGUoKSsxKTtcbiAgY29uc3QgY2hlY2tpbkRlZmF1bHRTdHJpbmcgPSBjaGVja2luRGVmYXVsdC50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApO1xuXG4gIGNvbnN0IGNoZWNrb3V0RGVmYXVsdCA9IG5ldyBEYXRlKGNoZWNraW5EZWZhdWx0KTtcbiAgY2hlY2tvdXREZWZhdWx0LnNldERhdGUoY2hlY2tvdXREZWZhdWx0LmdldERhdGUoKSsyKTtcbiAgY29uc3QgY2hlY2tvdXREZWZhdWx0U3RyaW5nID0gY2hlY2tvdXREZWZhdWx0LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMCk7XG4gICBcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1mb3JtLWJsb2NrJyxcbiAgICBgXG4gICAgPGZvcm0+XG4gICAgICA8ZmllbGRzZXQgY2xhc3M9XCJzZWFyY2gtZmlsZWRzZXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPtCT0L7RgNC+0LQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQgdmFsdWU9XCLQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs1wiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGRpc2FibGVkIHZhbHVlPVwiNTkuOTM4NiwzMC4zMTQxXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInByb3ZpZGVyc1wiPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImhvbXlcIiBjaGVja2VkIC8+IEhvbXk8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImZsYXQtcmVudFwiIGNoZWNrZWQgLz4gRmxhdFJlbnQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2Pi0tIT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLWluLWRhdGVcIj7QlNCw0YLQsCDQt9Cw0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2staW4tZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2NoZWNraW5EZWZhdWx0U3RyaW5nfVwiIG1pbj1cIiR7TUlOfVwiIG1heD1cIiR7TUFYfVwiIG5hbWU9XCJjaGVja2luXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLW91dC1kYXRlXCI+0JTQsNGC0LAg0LLRi9C10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLW91dC1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7Y2hlY2tvdXREZWZhdWx0U3RyaW5nfVwiIG1pbj1cIiR7TUlOfVwiIG1heD1cIiR7TUFYfVwiIG5hbWU9XCJjaGVja291dFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXgtcHJpY2VcIj7QnNCw0LrRgS4g0YbQtdC90LAg0YHRg9GC0L7QujwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJtYXgtcHJpY2VcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgbmFtZT1cInByaWNlXCIgY2xhc3M9XCJtYXgtcHJpY2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PjxidXR0b24+0J3QsNC50YLQuDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9mb3JtPlxuICAgIGBcbiAgKVxufVxuIl19