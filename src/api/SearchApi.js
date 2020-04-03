import {BaseApi} from './BaseApi';

const DATA = [
  {
    title: 'Рядом',
    data: [
      {
        id: 1,
        title: '3-я Тверская-Ямская ул.8',
        price: '150₽ / час',
      },
      {
        id: 2,
        title: '3-я Тверская-Ямская ул.8',
        price: '150₽ / час',
      },
      {
        id: 3,
        title: '3-я Тверская-Ямская ул.8',
        price: '150₽ / час',
      },
    ],
  },
  {
    title: 'в пределах 2 км',
    data: [
      {
        id: 4,
        title: '3-я Тверская-Ямская ул.8',
        price: '150₽ / час',
      },
      {
        id: 5,
        title: '3-я Тверская-Ямская ул.8',
        price: '150₽ / час',
      },
      {
        id: 6,
        title: '3-я Тверская-Ямская ул.8',
        price: '150₽ / час',
      },
    ],
  },
  {
    title: '2 км и дальше',
    data: [
      {
        id: 7,
        title: '3-я Тверская-Ямская ул.8',
        price: '150₽ / час',
      },
      {
        id: 8,
        title: '3-я Тверская-Ямская ул.8',
        price: '150₽ / час',
      },
      {
        id: 9,
        title: '3-я Тверская-Ямская ул.8',
        price: '150₽ / час',
      },
    ],
  },
];

export class SearchApi extends BaseApi {
  search() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.8) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(DATA);
        }
      }, 300);
    });
  }
}
