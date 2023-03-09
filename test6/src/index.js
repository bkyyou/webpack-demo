import $ from 'jquery';

const body = $('body')
const drag = $('.drag');
const table = $('table');

console.log('body', body)

let _cloneDragDom = '';
let selectDom = '';

const mousemoveEvent = function(e) {
  _cloneDragDom.css({
    left: e.clientX,
    top: e.clientY
  })
  // $('.tr').map((i, _val) => {
  //   const val = $(_val);
  //   console.log('_val', _val)
  //   console.log('map', val)
  //   console.log('e.clientY', e.clientY)
  //   console.log('val.offsetHeight', val.offsetHeight)
  //   if (e.clientY > val.offsetHeight / 2) {
  //     val.css({
  //       transform: 'translateY(-' + val.offsetHeight + ')'
  //     })
  //   }

  //   if (e.clientY < val.offsetHeight / 2) {
  //     val.css({
  //       transform: 'translateY(' + val.offsetHeight + ')'
  //     })
  //   }
  // })

  const trs = $('.tr');
  console.log('trs', trs.length);
  for (let i = 0; i < trs.length; i++) {
    const val = trs.eq(i);
    console.log('val', trs.eq(i).height())
    if (e.clientY > val.offset().top + val.height() / 2) {
      console.log(2222)
      val.css({
        transform: 'translateY(-' + val.height() + 'px)'
      })
    }

    if (e.clientY < val.offset().top + val.height() / 2) {
      val.css({
        transform: 'translateY(' + val.height() + 'px)'
      })
    }
    
  }

}

drag.on('mousedown', function(e) {
  console.log('click', e);
  table.css({
    "user-select": 'none'
  })
  _cloneDragDom = $(this).parent().clone();
  selectDom = $(this).parent();
  _cloneDragDom.css({
    // translate
    position: 'fixed',
    left: e.clientX,
    top: e.clientY
  })
  $('table tr').css({
    transition: 'all 1s linear'
  })
  _cloneDragDom.appendTo(body);
  $(this).parent().css({
    opacity: 0,
    visibility: 'hidden'
  })

  body.on('mousemove', mousemoveEvent)
})

body.on('mouseup', function(e) {
  console.log(11111)
  body.off('mousemove', mousemoveEvent);
  table.css({
    "user-select": 'auto'
  })
  // $('table tr').css({
  //   transition: 'none'
  // })
  console.log('selectDom', selectDom)
  selectDom.css({
    opacity: 1,
    visibility: 'initial'
  })
  _cloneDragDom.remove()
})


