import Loading from './src/loading.vue';

Loading.install = function(Vue) {
  Vue.component(Loading.name, Loading);
};

export default Loading;