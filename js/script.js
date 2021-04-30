

//ハンバーガーメニュー・チェックボックスのチェックを外す
$(function() {
  $('.menu-list li>a').click(function() {
    $('#menu-btn-check').removeAttr('checked').prop('checked', false).change();
  });
});