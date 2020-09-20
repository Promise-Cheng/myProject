<template>
  <div>
    <list-card :status="0" api="getMyComp"></list-card>
  </div>
</template>

<script>
  import TableCard from "@/components/card/TableCard";
  import * as api from "@/api/api"
  import ListCard from "@/components/card/ListCard";

  export default {
    name: "Competition",
    components: {ListCard, TableCard},
    data() {
      return {
        list: [],
        // height: window.innerHeight - 100,
        total: 0,
        params: {
          page: 1,
          size: 5,
        },
        count: 2,
      }
    },
    methods: {},

    mounted() {
    }
  }
</script>

<style scoped>

</style>
