import {
  getHomeHotSuggests,
  getHomeCategories,
  getHomeHouseList,
} from '@/services';
import { defineStore } from 'pinia';

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: [],
    currentPage: 1,
    houseList: [],
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests();
      this.hotSuggests = res.data;
    },
    async fetchCategoriesData() {
      const res = await getHomeCategories();
      this.categories = res.data;
    },
    async fetchHouseListDara() {
      const res = await getHomeHouseList(this.currentPage++);
      this.houseList.push(...res.data);
    },
  },
});

export default useHomeStore;
