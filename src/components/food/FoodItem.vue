T<template>
  <li class="food-item" @click.once="toDetail">
    <h4>{{title}}</h4>  
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
   

  },
}
</script>

<style lang="scss" scoped>
.food-item {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;

  img {
    width: 100%;
    border-radius: 5px;
    height: 10.6rem;
  }

  &__detail {
    line-height: 1.6;
  }
}
</style>
