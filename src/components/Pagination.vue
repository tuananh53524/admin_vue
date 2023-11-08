<template>
  <div class="float-end mb-3">
    <a-pagination v-model:current="current" v-model:pageSize="pageSize" :total="pagination.total" :pageSizeOptions="pageSizeOptions" :defaultPageSize="per_page" @change="handleChangePage">
      <template #itemRender="{ type, originalElement }">
        <a v-if="type === 'prev'">Previous</a>
        <a v-else-if="type === 'next'">Next</a>
        <component :is="originalElement" v-else></component>
      </template>
    </a-pagination>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const {page, per_page} = route.query

const pageSize = ref(per_page ?? 20)
const props = defineProps({
  pagination: {
    page:Number,
    total: Number,
  },
});

const router = useRouter()
const emit = defineEmits(['reloadData'])

const current = ref(page ?? 1);
const pageSizeOptions = ref([20, 50, 100]);
const { pagination } = props;

const handleChangePage = (page, pageSize) => {
  router.push({query: {
    page,
    per_page: pageSize
  }})
  emit('reloadData', {page, per_page: pageSize})
}

</script>

<style scoped>
  .ant-pagination{
    width: max-content;
  }
</style>
