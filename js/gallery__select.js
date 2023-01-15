const element = document.querySelector('#customSelect');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  position: 'below',
});
