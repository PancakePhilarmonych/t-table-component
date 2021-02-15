<template>
  <div class="body-row">
    <div @click="onClick" class="offers">
      Оффер: {{ offer.name }}
    </div>

    <div v-if="rolled" class="offer-body">
      <div class="offer-body-row">
        <div class="links-and-promo">
          <div class="links">Ссылки :{{ offerLinks(offer) }}</div>
          <div class="promo">Промо :{{ offerPromo(offer) }}</div>
        </div>
        <div class="traffic-type"></div>
        <div class="clicks">{{ offerItem(offer, 'clicks') }}</div>
        <div class="cr">{{ offerItem(offer, 'cr') }}%</div>
      </div>
    </div>

    <div v-else class="offer-body">
      <div v-for="(item, itemIndex) in links"
        :key="itemIndex"
        class="offer-body-row">
        <div class="link"> {{item.links}} </div>
        <div class="traffic-type"> {{item.type}} </div>
        <div class="clicks">{{ item.clicks }}</div>
        <div class="cr">{{ item.cr }}%</div>
      </div>

      <div v-for="(item, itemIndex) in promos"
        :key="itemIndex"
        class="offer-body-row">
        <div class="promo"> {{item.promo}} </div>
        <div class="traffic-type"> {{item.type}} </div>
        <div class="clicks">{{ item.clicks }}</div>
        <div class="cr">{{ item.cr }}%</div>
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