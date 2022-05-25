export default {
  beforeMount(element, binding) {
    let iconClass = `fa fa-${binding.value} float-right text-green-400 text-2xl`;

    if (binding.arg === 'full') {
      iconClass = binding.value;
    }

    // eslint-disable-next-line no-param-reassign
    element.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
