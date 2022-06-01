export default {
  beforeMount(element, binding) {
    let iconClass = `fa fa-${binding.value.icon} text-green-400 text-2xl`;

    if (binding.value.right) {
      iconClass += ' float-right';
    }

    // eslint-disable-next-line no-param-reassign
    element.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
