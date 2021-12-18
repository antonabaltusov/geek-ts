import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';
import { getUserData, getFavoritesAmount } from './user-model.js';
import { getTodosByCount } from './todos.js';
import { FlatRentSdk } from './flat-rent-sdk.js';
window.addEventListener('DOMContentLoaded', () => {
    const user = getUserData();
    renderUserBlock(user.userName, user.avatarUrl, getFavoritesAmount());
    const checkin = new Date();
    const checkout = new Date();
    checkout.setMonth(checkout.getMonth() + 2, 0);
    renderSearchFormBlock(checkin, checkout);
    renderSearchStubBlock();
    renderToast({ text: 'Это пример уведомления.', type: 'success' }, { name: 'Понял', handler: () => { console.log('Уведомление закрыто'); } });
    console.log(getTodosByCount(3));
    const a = new FlatRentSdk();
    console.log(a.get('vnd331'));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFBO0FBQ3RDLE9BQU8sRUFBTyxXQUFXLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQTtBQUNyRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sWUFBWSxDQUFBO0FBQzFDLE9BQU8sRUFBVSxXQUFXLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQTtBQUt2RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQy9DLE1BQU0sSUFBSSxHQUFTLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDM0IsTUFBTSxRQUFRLEdBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUMzQixRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUMscUJBQXFCLENBQUMsT0FBTyxFQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLHFCQUFxQixFQUFFLENBQUM7SUFDeEIsV0FBVyxDQUNULEVBQUMsSUFBSSxFQUFFLHlCQUF5QixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFDbEQsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUEsQ0FBQSxDQUFDLEVBQUMsQ0FDckUsQ0FBQTtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsTUFBTSxDQUFDLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlclNlYXJjaEZvcm1CbG9jayB9IGZyb20gJy4vc2VhcmNoLWZvcm0uanMnXG5pbXBvcnQgeyByZW5kZXJTZWFyY2hTdHViQmxvY2sgfSBmcm9tICcuL3NlYXJjaC1yZXN1bHRzLmpzJ1xuaW1wb3J0IHsgcmVuZGVyVXNlckJsb2NrIH0gZnJvbSAnLi91c2VyLmpzJ1xuaW1wb3J0IHsgcmVuZGVyVG9hc3QgfSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7VXNlciwgZ2V0VXNlckRhdGEsIGdldEZhdm9yaXRlc0Ftb3VudH0gZnJvbSAnLi91c2VyLW1vZGVsLmpzJ1xuaW1wb3J0IHtnZXRUb2Rvc0J5Q291bnR9IGZyb20gJy4vdG9kb3MuanMnXG5pbXBvcnQge2FkZERheXMsIEZsYXRSZW50U2RrfSBmcm9tICcuL2ZsYXQtcmVudC1zZGsuanMnXG5cblxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCB1c2VyOiBVc2VyID0gZ2V0VXNlckRhdGEoKTtcbiAgcmVuZGVyVXNlckJsb2NrKHVzZXIudXNlck5hbWUsdXNlci5hdmF0YXJVcmwsZ2V0RmF2b3JpdGVzQW1vdW50KCkpO1xuICBjb25zdCBjaGVja2luID0gbmV3IERhdGUoKTtcbiAgY29uc3QgY2hlY2tvdXQgPW5ldyBEYXRlKCk7XG4gIGNoZWNrb3V0LnNldE1vbnRoKGNoZWNrb3V0LmdldE1vbnRoKCkrMiwgMCk7XG4gIHJlbmRlclNlYXJjaEZvcm1CbG9jayhjaGVja2luLGNoZWNrb3V0KTtcbiAgcmVuZGVyU2VhcmNoU3R1YkJsb2NrKCk7XG4gIHJlbmRlclRvYXN0KFxuICAgIHt0ZXh0OiAn0K3RgtC+INC/0YDQuNC80LXRgCDRg9Cy0LXQtNC+0LzQu9C10L3QuNGPLicsIHR5cGU6ICdzdWNjZXNzJ30sXG4gICAge25hbWU6ICfQn9C+0L3Rj9C7JywgaGFuZGxlcjogKCkgPT4ge2NvbnNvbGUubG9nKCfQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC30LDQutGA0YvRgtC+Jyl9fVxuICApXG4gIGNvbnNvbGUubG9nKGdldFRvZG9zQnlDb3VudCgzKSk7XG4gIGNvbnN0IGEgPSBuZXcgRmxhdFJlbnRTZGsoKTtcbiAgY29uc29sZS5sb2coYS5nZXQoJ3ZuZDMzMScpKTtcbn0pXG4iXX0=