import { Model } from '../../libs/model';

export class User extends Model {
  /**
   * Регистарция пользователя
   * @param {Object} form
   */
  signup (form) {
    if (form.password !== form.password_repeat) {
      return Promise.reject(new Error('не совпадают пароль'));
    }
    return this.request('POST', 'auth/signup', form);
  }
  signin (form) {
    return this.request('POST', 'auth/signin', form);
  }
}
