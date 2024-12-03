
function adicionartarefas() {
    let tarefaDoInput = document.querySelector("input").value;

    if (tarefaDoInput.trim() === "") {
        alert("Digite uma tarefa antes de adicionar!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${tarefaDoInput} <span onclick="deletarTarefa(this)">❌</span>`;

    document.querySelector("ul").appendChild(li);

  
    document.querySelector("input").value = "";
}

function deletarTarefa(span) {
    span.parentElement.remove();
}
