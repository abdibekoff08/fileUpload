document.querySelector('#form').addEventListener('submit',  async function (e) {
  await e.preventDefault();

  const userFile = document.querySelector('#file').files[0];
  const userComments = document.querySelector('#comments').value;

  const formData = new FormData();
  formData.append('user-file', userFile);
  formData.append('user-comments', userComments);

  fetch('https://httpbin.org/post', {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .then(err => console.log(err));
})