import './index';
import './theme.css';
import 'typeface-roboto';
import 'typeface-source-sans-pro';

window.addEventListener('load', () => {
  const tabs = Array.from(document.getElementsByTagName('tabs-tab'));

  tabs.forEach((tab) => {
    tab.addEventListener('tab-selected', () => {
      tabs.forEach((unselectedTab) => {
        unselectedTab.removeAttribute('active');
      });

      tab.setAttribute('active', '');
    });
  });
});
