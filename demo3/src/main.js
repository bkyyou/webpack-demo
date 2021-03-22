
export const PageRender = {
  init: function (el, page) {
    // eslint-disable-next-line no-undef
    new Vue({
      el: el,
      render: h => {
        return h(page.componentName, {
          props: page.props
        });
      }
    })
  }
};
