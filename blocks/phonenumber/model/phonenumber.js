import { Model } from './model';

export class Phonenumber extends Model {
  /**
   * Регистарция пользователя
   * @param {Object} form
   */
  signup (form) {
    if (form.password !== form.password_repeat) {
      return Promise.reject(new Error('не совпадают пароль'));
    }
    return this.request('/auth/signup', 'POST', form);
  }
}
