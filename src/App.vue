<template>
  <div id="app">
    <div class="table">
      <div class="thead">
        <div class="item">Наименование площадки</div>
        <div class="item">Офферы</div>
        <div class="item">Ссылки и промо</div>
        <div class="item">Тип трафика</div>
        <div class="item">Клики</div>
        <div class="item">CR%</div>
      </div>

      <base-platform-row
        v-for="(platform, i) in platforms"
        :key="i"
        :platform="platform"
        :ref="`platform-${i}`"
        @click="togglePlatform(i)">
      </base-platform-row>
    </div>
  </div>
</template>

<script>
import BasePlatformRow from './components/BasePlatformRow'

export default {
  name: 'App',
  components: {
    BasePlatformRow
  },

  data() {
    return {
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
      rolled: true
    }
  },

  methods: {
    togglePlatform(id) {
      console.log(id)
      this.$refs[`platform-${id}`][0].toggle()
    }
  }
}
</script>

<style lang="scss">

</style>
