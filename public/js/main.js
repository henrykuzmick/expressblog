$(document).ready(() => {
  $('.delete-category').on('click', (e) => {
    $target = $(e.target);
    $.ajax({
      type: 'DELETE',
      url: '/categories/delete/'+$target.attr('data-cat-id'),
      success: (response) => {
        alert('Category Removed');
        window.location.href='/'
      },
      error: (error) => {
        console.log(error);
      }
    })
  });

  $('.delete-article').on('click', (e) => {
    $target = $(e.target);
    $.ajax({
      type: 'DELETE',
      url: '/articles/delete/'+$target.attr('data-art-id'),
      success: (response) => {
        alert('Article Removed');
        window.location.href='/'
      },
      error: (error) => {
        console.log(error);
      }
    })
  })
})
