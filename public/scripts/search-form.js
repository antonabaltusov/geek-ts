import { renderBlock } from './lib.js';
import { searchFormFunc } from './search-interface.js';
export function renderSearchFormBlock(checkin, checkout) {
    const MIN = checkin.toISOString().slice(0, 10);
    const MAX = checkout.toISOString().slice(0, 10);
    const checkinDefault = new Date(checkin);
    checkinDefault.setDate(checkinDefault.getDate() + 1);
    const checkinDefaultString = checkinDefault.toISOString().slice(0, 10);
    const checkoutDefault = new Date(checkinDefault);
    checkoutDefault.setDate(checkoutDefault.getDate() + 2);
    const checkoutDefaultString = checkoutDefault.toISOString().slice(0, 10);
    function submitFormEvent(e, arrayValues) {
        e.preventDefault();
        if (e.target) {
            const formData = new FormData(e.target);
            const formDataEntries = {};
            arrayValues.forEach(key => {
                formDataEntries[key] = formData.get(key);
            });
            searchFormFunc(formDataEntries);
            //callback().then(console.log()).catch(console.log())
        }
    }
    renderBlock('search-form-block', `
    <form id="form">
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
    const form = document.getElementById('form');
    if (form) {
        const arrayNames = ['checkin', 'checkout', 'price'];
        form.addEventListener('submit', ev => submitFormEvent(ev, arrayNames));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQW1CLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFBO0FBS3RFLE1BQU0sVUFBVSxxQkFBcUIsQ0FBRSxPQUFZLEVBQUUsUUFBYTtJQUVoRSxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQztJQUM5QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQztJQUUvQyxNQUFNLGNBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxjQUFjLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRCxNQUFNLG9CQUFvQixHQUFHLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXRFLE1BQU0sZUFBZSxHQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELGVBQWUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELE1BQU0scUJBQXFCLEdBQUcsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFJeEUsU0FBUyxlQUFlLENBQUMsQ0FBTyxFQUFFLFdBQXVCO1FBRXZELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUM7WUFDWCxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBeUIsQ0FBQyxDQUFBO1lBRTFELE1BQU0sZUFBZSxHQUFvQixFQUFFLENBQUM7WUFFNUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDeEIsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFjLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDckQsQ0FBQyxDQUFDLENBQUE7WUFFRixjQUFjLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDL0IscURBQXFEO1NBSXREO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FDVCxtQkFBbUIsRUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OzJEQWlCdUQsb0JBQW9CLFVBQVUsR0FBRyxVQUFVLEdBQUc7Ozs7NERBSTdDLHFCQUFxQixVQUFVLEdBQUcsVUFBVSxHQUFHOzs7Ozs7Ozs7Ozs7S0FZdEcsQ0FDRixDQUFBO0lBRUQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUU1QyxJQUFJLElBQUksRUFBQztRQUNQLE1BQU0sVUFBVSxHQUFlLENBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLENBQUMsQ0FBQTtRQUM3RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0tBQ3RFO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnXG5pbXBvcnQgeyBJU2VhcmNoRm9ybURhdGEsIHNlYXJjaEZvcm1GdW5jfSBmcm9tICcuL3NlYXJjaC1pbnRlcmZhY2UuanMnXG5cbmV4cG9ydCB0eXBlIG5hbWVzVHlwZSA9ICdjaGVja2luJyB8ICdjaGVja291dCcgfCAncHJpY2UnXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jayAoY2hlY2tpbjpEYXRlLCBjaGVja291dDpEYXRlKSB7XG5cbiAgY29uc3QgTUlOID0gY2hlY2tpbi50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApO1xuICBjb25zdCBNQVggPSBjaGVja291dC50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApO1xuXG4gIGNvbnN0IGNoZWNraW5EZWZhdWx0ID0gbmV3IERhdGUoY2hlY2tpbik7XG4gIGNoZWNraW5EZWZhdWx0LnNldERhdGUoY2hlY2tpbkRlZmF1bHQuZ2V0RGF0ZSgpKzEpO1xuICBjb25zdCBjaGVja2luRGVmYXVsdFN0cmluZyA9IGNoZWNraW5EZWZhdWx0LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMCk7XG5cbiAgY29uc3QgY2hlY2tvdXREZWZhdWx0ID0gbmV3IERhdGUoY2hlY2tpbkRlZmF1bHQpO1xuICBjaGVja291dERlZmF1bHQuc2V0RGF0ZShjaGVja291dERlZmF1bHQuZ2V0RGF0ZSgpKzIpO1xuICBjb25zdCBjaGVja291dERlZmF1bHRTdHJpbmcgPSBjaGVja291dERlZmF1bHQudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKTtcblxuICBcblxuICBmdW5jdGlvbiBzdWJtaXRGb3JtRXZlbnQoZTpFdmVudCwgYXJyYXlWYWx1ZXM6bmFtZXNUeXBlW10pe1xuICAgIFxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmIChlLnRhcmdldCl7XG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQpXG4gICAgICBcbiAgICAgIGNvbnN0IGZvcm1EYXRhRW50cmllczogSVNlYXJjaEZvcm1EYXRhID0ge307XG5cbiAgICAgIGFycmF5VmFsdWVzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgZm9ybURhdGFFbnRyaWVzW2tleV0gPSA8bmFtZXNUeXBlPmZvcm1EYXRhLmdldChrZXkpXG4gICAgICB9KVxuXG4gICAgICBzZWFyY2hGb3JtRnVuYyhmb3JtRGF0YUVudHJpZXMpXG4gICAgICAvL2NhbGxiYWNrKCkudGhlbihjb25zb2xlLmxvZygpKS5jYXRjaChjb25zb2xlLmxvZygpKVxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgIH1cbiAgfVxuICAgXG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtZm9ybS1ibG9jaycsXG4gICAgYFxuICAgIDxmb3JtIGlkPVwiZm9ybVwiPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzPVwic2VhcmNoLWZpbGVkc2V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj7Qk9C+0YDQvtC0PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkIHZhbHVlPVwi0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LNcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBkaXNhYmxlZCB2YWx1ZT1cIjU5LjkzODYsMzAuMzE0MVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJwcm92aWRlcnNcIj5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJob215XCIgY2hlY2tlZCAvPiBIb215PC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJmbGF0LXJlbnRcIiBjaGVja2VkIC8+IEZsYXRSZW50PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj4tLSE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1pbi1kYXRlXCI+0JTQsNGC0LAg0LfQsNC10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLWluLWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtjaGVja2luRGVmYXVsdFN0cmluZ31cIiBtaW49XCIke01JTn1cIiBtYXg9XCIke01BWH1cIiBuYW1lPVwiY2hlY2tpblwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1vdXQtZGF0ZVwiPtCU0LDRgtCwINCy0YvQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1vdXQtZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2NoZWNrb3V0RGVmYXVsdFN0cmluZ31cIiBtaW49XCIke01JTn1cIiBtYXg9XCIke01BWH1cIiBuYW1lPVwiY2hlY2tvdXRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWF4LXByaWNlXCI+0JzQsNC60YEuINGG0LXQvdCwINGB0YPRgtC+0Lo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWF4LXByaWNlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj48YnV0dG9uPtCd0LDQudGC0Lg8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZm9ybT5cbiAgICBgXG4gIClcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKVxuXG4gIGlmIChmb3JtKXtcbiAgICBjb25zdCBhcnJheU5hbWVzOm5hbWVzVHlwZVtdID0gWydjaGVja2luJywnY2hlY2tvdXQnLCdwcmljZSddXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldiA9PiBzdWJtaXRGb3JtRXZlbnQoZXYsYXJyYXlOYW1lcykpXG4gIH1cbn1cblxuXG5cbiJdfQ==