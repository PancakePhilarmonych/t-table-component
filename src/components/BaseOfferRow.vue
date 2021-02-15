<template>
  <div class="platform-row">
    <div @click="onClick" class="offers clicked item">
      {{ offer.name }}
    </div>

    <div v-if="rolled" class="offer-body">
      <div class="offer-body-row">
        <div class="links-and-promo item">
          <div class="links">Ссылки: {{ offerLinks(offer) }}</div>
          <div class="promo">Промо: {{ offerPromo(offer) }}</div>
        </div>
        <div class="traffic-type item"></div>
        <div class="clicks item">{{ offerItem(offer, 'clicks') }}</div>
        <div class="cr item">{{ offerItem(offer, 'cr') }}%</div>
      </div>
    </div>

    <div v-else class="offer-body">
      <div v-for="(item, itemIndex) in links"
        :key="`link-${itemIndex}`"
        class="offer-body-row">
        <div class="links-and-promo item"> {{item.links}} </div>
        <div class="traffic-type item"> {{item.type}} </div>
        <div class="clicks item">{{ item.clicks }}</div>
        <div class="cr item">{{ item.cr }}%</div>
      </div>

      <div v-for="(item, itemIndex) in promos"
        :key="`promo-${itemIndex}`"
        class="offer-body-row">
        <div class="links-and-promo item"> {{item.promo}} </div>
        <div class="traffic-type item"> {{item.type}} </div>
        <div class="clicks item"></div>
        <div class="cr item"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    offer: {
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

    offerLinks(offer) {
      return offer.items.filter(item => item.links).length
    },

    offerPromo(offer) {
      return offer.items.filter(item => item.promo).length
    },

    offerItem(offer, item) {
      return offer.items.reduce((total, current) => total + current[item], 0 )
    },

    onClick() {
      this.$emit('click')
    }
  },

  computed: {
    links() {
      return this.offer.items.filter(item => item.links)
    },

    promos() {
      return this.offer.items.filter(item => item.promo)
    }
  }

}
</script>

<style>

</style>