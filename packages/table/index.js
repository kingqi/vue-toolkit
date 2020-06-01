import QTable from './src/table';

QTable.install = function(Vue) {
  Vue.component(QTable.name, QTable);
};

export default QTable;