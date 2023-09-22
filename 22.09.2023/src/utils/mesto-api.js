import {MESTO_SERVER} from './constants';
import {getResponse} from './utils';

class MestoApi {
  constructor({ address, token, groupId }) {
    this._token = token;
    this._groupId = groupId;
    this._address = address;
  }

  getCardList() {
    return fetch(`${this._address}/${this._groupId}/cards`, {
      headers: {
        authorization: this._token,
      },
    })
      .then(getResponse)
  }

  addCard({ name, link }) {
    return fetch(`${this._address}/${this._groupId}/cards/`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        link,
      }),
    })
      .then(getResponse)
  }

  removeCard(cardID) {
    return fetch(`${this._address}/${this._groupId}/cards/${cardID}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
    })
      .then(getResponse) 
  }

  getUserInfo() {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
      headers: {
        authorization: this._token,
      },
    })
      .then(getResponse)
  }

  setUserInfo({ name, about }) {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        about,
      }),
    })
      .then(getResponse) 
  }

  setUserAvatar({ avatar }) {
    return fetch(`${this._address}/${this._groupId}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar,
      }),
    })
      .then(getResponse)
      
  }

  changeLikeCardStatus(cardID, like) {
    return fetch(`${this._address}/${this._groupId}/cards/likes/${cardID}`, {
      method: like ? 'PUT' : 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
    })
      .then(getResponse)
  }
}

const api = new MestoApi(MESTO_SERVER);

export default api;
