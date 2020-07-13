import Form from './form/index.js';
import Table from './table/index.js';

const components = [
  Form,
  Table,
]
const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Form,
  Table
}