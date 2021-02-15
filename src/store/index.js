import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    platforms: [
      {
        name: 'Площадка 1',
        offers: [
          {
            name: 'Оффер 1',
            items: [
              {
                links: 'Ссылка 1',
                type: 'WEB',
                clicks: 1,
                cr: 2
              },
              {
                links: 'Ссылка 1',
                type: 'WEB',
                clicks: 1,
                cr: 2
              },
              {
                links: 'Ссылка 1',
                type: 'WEB',
                clicks: 1,
                cr: 2
              },
              {
                links: 'Ссылка 1',
                type: 'WEB',
                clicks: 1,
                cr: 2
              },
              {
                links: 'Ссылка 1',
                type: 'WEB',
                clicks: 1,
                cr: 2
              },
            ]
          },
          {
            name: 'Оффер 2',
            items: [
              {
                links: 'Ссылка 3',
                type: 'WEB',
                clicks: 1,
                cr: 2
              },
              {
                links: 'Ссылка 4',
                type: 'WEB',
                clicks: 1,
                cr: 2
              },
              {
                links: 'Ссылка 4',
                promo: 'Promo',
                type: 'WEB',
                clicks: 1,
                cr: 2
              },
            ]
          }
        ]
      },
      {
        name: 'Площадка 2',
        offers: [
          {
            name: 'Оффер 3',
            items: [
              {
                links: 'Ссылка 6',
                type: 'WEB',
                promo: 'Промокод',
                clicks: 1,
                cr: 2
              },
              {
                links: 'Ссылка 7',
                type: 'WEB',
                clicks: 1,
                cr: 2
              },
            ]
          },
          {
            name: 'Оффер 7',
            items: [
              {
                links: 'Ссылка 8',
                type: 'WEB',
                clicks: 1,
                cr: 2
              },
              {
                links: 'Ссылка 9',
                type: 'WEB',
                clicks: 1,
                cr: 2
              },
            ]
          }
        ]
      },
    ],
  },

  getters: {
    platforms(state) {
      return state.platforms
    }
  }
})
