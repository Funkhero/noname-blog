import TableSorter from './components/TableSorter.vue';
import events from './events';

export default {
  install(Vue) {
    Vue.component('tableSorter', TableSorter);
    
    Vue.prototype.$tableSorter.edit = (params) => {
      events.$emit('edit', params);
    };
    
    Vue.prototype.$tableSorter.delete = (params) => {
      events.$emit('delete', params);
    };
  },
};
