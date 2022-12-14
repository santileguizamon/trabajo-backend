const socket = io.connect();

function render(data) {
  const html = data.map((elem, index) => {
      return(`<div>
          <strong>${elem.author}</strong>:
          <em>${elem.text}</em> </div>`)
  }).join(" ");
  document.getElementById('messages').innerHTML = html;
}

socket.on('new-message', function(data) { render(data); });

function addMessage(event) {
  const mensaje = {
      author: document.getElementById('username').value,
      text: document.getElementById('texto').value
  };
  socket.emit('new-message', mensaje);
  return false;
}