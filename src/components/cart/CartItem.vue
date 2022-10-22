<template>
  <li class="cart-item">
    <span>{{ name }}</span>
    <span>{{ unitName }}</span>
    <span>{{ unitPrice }}</span>
    <span>{{amount}}</span>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    unitName: {
      type: String,
      required: true,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
    },
  },
  setup() {

 

    return{
    
    }
  },
}
</script>

<style lang="scss" scoped>
.cart-item{
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;

  span{
    text-align: center;
    flex:1;
  }
}
</style>
