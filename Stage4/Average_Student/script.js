let students = [
  {
    name: "Eduardo",
    firstTestGrade: 6,
    secondTestGrade: 2,
  },

  {
    name: "Pedro",
    firstTestGrade: 3,
    secondTestGrade: 1,
  },

  {
    name: "João",
    firstTestGrade: 10,
    secondTestGrade: 10,
  },

  {
    name: "Viviane",
    firstTestGrade: 8,
    secondTestGrade: 9,
  }

]

  function calAverage (firstTestGrade,secondTestGrade) { //CRIADO A FUNÇÃO
  return (firstTestGrade + secondTestGrade) / 2 //RETORNO DA FUNÇÃO, POREM NÃO RECEBEU NENHUM
}

  function averageStudent (student){    //CRIADA A FUNÇÃO 
    let media = calAverage(student.firstTestGrade, student.secondTestGrade) //A VARIAVEL MEDIA RECEBE O VALOR DO STUDENT.FIRST E STUDENT.SECOND 
    
    if(media >= 7) {      
      return (`A média do(a) aluno(a) ${student.name} é ${calAverage(student.firstTestGrade, student.secondTestGrade)}. Parabéns ${student.name}! Você foi aprovado(a) no concurso.`)
    } else {      
      return (`A média do(a) aluno(a) ${student.name} é ${calAverage(student.firstTestGrade, student.secondTestGrade)}. Lamentamos ${student.name}, mas não foi dessa vez. Tente novamente!`)
    }

}

for (let student of students){
  let messageAverage = averageStudent(student)
  alert (messageAverage)
}