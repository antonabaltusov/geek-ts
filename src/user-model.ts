// Первая getUserData, которая читает из localStorage ключ user. Подразумевается, 
// что ключ содержит объект с полями username и avatarUrl. Вторая функция getFavoritesAmount, 
// которая читает из localStorage ключ favoritesAmount. Ключ должен содержать количество предметов, 
// добавленных пользователем в избранное. Для обеих функций применить подход с unknown, чтобы валидировать 
// содержимое localStorage. Написать функцию renderUserBlock, которая принимает имя пользователя, 
// ссылку на аватар и количество избранных. Последнее поле является необязательным. 
// Использовать эти данные для вывода блока пользователя.
export class User {
  userName: string
  avatarUrl: string

  constructor(userName: string, avatarUrl: string) {
    this.userName = userName
    this.avatarUrl = avatarUrl
  }
}

const user1: User = {
  userName: 'anton',
  avatarUrl: '/img/avatar.png'
}

export function getUserData () {
  window.localStorage.setItem('user',JSON.stringify(user1));
  const userFromStorage = window.localStorage.getItem('user')
  if(userFromStorage!= null){
    const user: unknown = JSON.parse(userFromStorage);
    Object.setPrototypeOf(user, User.prototype);
    if (user instanceof User) {
      return user;
    } else {
      throw new Error('User in local storage is wrong')
    }
  }else{
    throw new Error('User in local storage is wrong')
  }
}

export function getFavoritesAmount() {
  window.localStorage.setItem('favoritesAmount','0');
  const amountJsonStorage = window.localStorage.getItem('favoritesAmount');
  const amount = amountJsonStorage ? +amountJsonStorage : 0;
  if(!Number.isNaN(amount)){
    return amount;
  }else {
    throw new Error('favoritesAmount in local storage is not a number')
  }
  
}
