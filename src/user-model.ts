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


export function getUserData () {
  const user: unknown = JSON.parse(window.localStorage.getItem('user'));
  Object.setPrototypeOf(user, User.prototype);
  
  if (user instanceof User) {
    return user;
  } else {
    throw new Error('User in local storage is wrong')
  }
}

export function getFavoritesAmount() {
  return +window.localStorage.getItem('favoritesAmount');
}
