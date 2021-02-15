<template>
  <div id="app">
    <div class="table">
      <div class="thead">
        <div class="name-column">Наименование площадки</div>
        <div class="offers">Офферы</div>
        <div class="links-and-promo">Ссылки и промо</div>
        <div class="traffic-type">Тип трафика</div>
        <div class="clicks">Клики</div>
        <div class="cr">CR%</div>
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
import { mapGetters } from 'vuex'
import BasePlatformRow from './components/BasePlatformRow'

export default {
  name: 'App',
  components: {
    BasePlatformRow
  },

  computed: {
    ...mapGetters(['platforms'])
  },

  methods: {
    togglePlatform(id) {
      this.$refs[`platform-${id}`][0].toggle()
    }
  }
}
</script>

<style lang="scss">

</style>
