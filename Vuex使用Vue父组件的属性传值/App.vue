<script setup>
import productListOne from "./components/ProductListOne.vue";
import productListTwo from "./components/ProductListTwo.vue";
import { ref } from "vue";

const products = ref([
  { name: "小张", money: 100 },
  { name: "小王", money: 80 },
  { name: "小李", money: 95 },
  { name: "小陆", money: 90 },
]);
</script>

<template>
  <productListOne :products="products"></productListOne>
  <productListTwo :products="products"></productListTwo>
</template>

<style>
body {
  font-family: Ubuntu;
  color: #500;
}
</style>
