<template>
  <div class="row">
    <div class="name item"
         @click="onClick">
      {{ platform.name }}
    </div>
    <div class="platform-wrapper">
      <div v-if="rolled" class="platform-row">
          <div class="offers clicked item">
            Офферы: {{ getPlatformOffersTotalCount }}
          </div>

          <div class="links-and-promo item">
            <div class="item"> Ссылки: {{ platformOfferItemsHasValue('links') }} </div>
            <div class="item"> Промо: {{ platformOfferItemsHasValue('promo') }} </div>
          </div>

          <div class="traffic-type item"></div>
          <div class="clicks item">{{ clicks }}</div>
          <div class="cr item">{{ cr }}%</div>
      </div>

      <base-offer-row
        v-else
        v-for="(offer, i) in platform.offers"
        :offer="offer"
        :key="i"
        :ref="`offer-${i}`"
        @click="togglePlatform(i)"/>
    </div>
  </div>
</template>

<script>
  import BaseOfferRow from './BaseOfferRow'
export default {
  components: {
    BaseOfferRow
  },

  props: {
    platform: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      rolled: true
    }
  },

  methods: {
    toggle() {
      this.rolled = !this.rolled
    },

    platformOfferItemsHasValue(value) {
      return this.platform.offers.reduce((prev, current) => prev + current.items.filter(item => item[value]).length, 0)
    },

    togglePlatform(id) {
      this.$refs[`offer-${id}`][0].toggle()
    },

    onClick() {
      this.$emit('click')
    }
  },

  computed: {
    getPlatformOffersTotalCount() {
      return this.platform.offers.length
    },

    clicks() {
      return this.platform.offers
        .map(offer => offer.items
        .map(item =>  item.clicks))
        .flat(2)
        .reduce((prev,current) => prev + current)
    },

    cr() {
      return this.platform.offers
        .map(offer => offer.items
        .map(item =>  item.cr))
        .flat(2)
        .reduce((prev,current) => prev + current)
    },
  }
}
</script>

<style scoped lang="scss">

</style>