import { reactive } from 'vue'

export const store = reactive({
  projects: [],
  project: {},
  currentPage: 1,
  perPage: 12,
  choice: '',
  lastPage: null,

})