import QForm from './src/form';

QForm.install = function(Vue) {
	Vue.component(QForm.name, QForm);
};

export default QForm;
