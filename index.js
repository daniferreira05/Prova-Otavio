function enviar(event) {
    event.preventDefault();

    var nome = event.target[0].value;
    var matricula = event.target[1].value;
    var nota1 = event.target[2].value;
    var nota2 = event.target[3].value;

    console.log({ nome, matricula, nota1, nota2 });

    if (!nome || !matricula || !nota1 || !nota2) {
        alert('Preencha o campo!');
        return;
    }

    var tr = document.createElement('tr');
    var td_nome = document.createElement('td');
    td_nome.innerHTML = nome;
    var td_matricula = document.createElement('td');
    td_matricula.innerHTML = matricula;
    var td_nota1 = document.createElement('td');
    td_nota1.innerHTML = nota1;
    var td_nota2 = document.createElement('td');
    td_nota2.innerHTML = nota2;
    var td_situacao = (nota1 + nota2) / 2 > 5 ? 'Aprovado' :' Reprovado';
   

    

    tr.appendChild(td_nome);
    tr.appendChild(td_matricula);
    tr.appendChild(td_nota1);
    tr.appendChild(td_nota2);
    tr.appendChild(td_situacao);

    document.querySelector("body > section:nth-child(5) > table > tbody").appendChild(tr);

    var aluno = {nome, matricula, nota1, nota2};
    var alunos = JSON.parse(localStorage.getItem("alunos")) || [];
    alunos.push(aluno);

    localStorage.setItem("aluno", JSON.stringify(aluno))

















}