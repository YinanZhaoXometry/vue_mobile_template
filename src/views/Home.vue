<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <div v-for="index in listLength" class="list-item" :key="index">
        <div class="item-title">title</div>
        <div class="item-desc">
          <span class="item-span">test content</span>
          <span class="item-date">2020-01-02</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      listLength: 20
    }
  },
  computed: {},
  created() {
    this.loadData()
  },
  mounted() {},
  methods: {
    loadData() {
      this.listLength += 10
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {})
          this.scroll.on('touchend', (pos) => {
            console.log('pull down')
            // 下拉动作
            if (pos.y > 50) {
              this.loadData()
            }
          })
          this.scroll.on('scrollEnd', () => {
            console.log('scrollToEnd')
            this.loadData()
          })
        } else {
          this.scroll.refresh()
        }
      })
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 700px;
  margin: auto;
  padding-top: 50px;
  overflow: auto;
  max-height: 100vh;
}
.list-item {
  border-radius: 10px;
  box-shadow: 0 0 4px #999;
  padding: 20px;
  font-size: 24px;
  margin-bottom: 25px;
}
.item-title {
  color: #333;
}
.item-desc {
  display: flex;
  justify-content: space-between;
}
.item-date {
  color: #999;
}
</style>
