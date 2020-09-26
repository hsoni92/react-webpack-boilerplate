import _ from 'lodash';

export const pageIndex = [
  {
    key: '1',
    title: 'Home',
    page: ''
  },
  {
    key: '2',
    title: 'Page Two',
    page: 'page2'
  },
  {
    key: '3',
    title: 'Page Three',
    page: 'page3'
  }
];

export function  getCurrentPage() {
  var currentPath = window.location.pathname;
  const pathArray = currentPath.split('/');
  pathArray.shift();
  const [thisPage] = _.filter(pageIndex, (pInd) => {
    return pInd.page === pathArray[0];
  });

  return `${thisPage.page}`;
}