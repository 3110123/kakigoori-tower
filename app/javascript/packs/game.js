import Swal from 'sweetalert2'

Swal.fire({
  text: '10秒間、下のボタンを連打してかき氷を高く積み上げましょう！',
  icon: 'warning',
  confirmButtonText: 'スタート',
}).then((result) => {
  if (result) {
    Swal.fire({
      title: 'タイトル',
      timer : '3000',
      showConfirmButton : false
    });
  }
})


