// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

        function agregarAmigo() {
            const nombre = document.getElementById('amigo').value.trim();
            if (nombre) {
                amigos.push(nombre);
                document.getElementById('amigo').value = ''; // Limpiar el campo de entrada
                actualizarListaAmigos();
            } else {
                alert("Por favor, ingresa un nombre válido.");
            }
        }

        function actualizarListaAmigos() {
            const listaAmigos = document.getElementById('listaAmigos');
            listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar
            amigos.forEach(amigo => {
                const li = document.createElement('li');
                li.textContent = amigo;
                listaAmigos.appendChild(li);
            });
        }

        function sortearAmigo() {
            if (amigos.length > 1) {
                const indiceAleatorio = Math.floor(Math.random() * amigos.length);
                const amigoSecreto = amigos[indiceAleatorio];
                document.getElementById('resultado').innerHTML = `<li>¡Tu amigo secreto es: ${amigoSecreto}!</li>`;
            } else {
                alert("Necesitas agregar al menos dos amigos para sortear.");
            }
        }
    </script>
</body>
</html>
