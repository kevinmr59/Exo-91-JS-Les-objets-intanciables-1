const personne = function (SonNom, SonPrenom, SonAge, SonSexe, SonJob) {
    this.nom = SonNom ;
    this.prenom = SonPrenom ;
    this.age = SonAge ;
    this.sexe = SonSexe ;
    this.job = SonJob ;

}
this.getNomPrenom = function (){
    return this.nom + " " + this.prenom.join(',');
}

this.getAge = function (){
    return this.age.join(',');
}

this.getSexe = function (){
    return this.sexe.join(',');

}

this.getJob = function (){
    return this.job.join(',');
}


let kevin = new personne ('Mura', 'kevin', '28', 'masculin', 'eleve a UPTO');
let uluberlu = new personne ('Ulu', 'berlu', '50', 'feminin', 'police');

perso1 = document.getElementById('perso1');
perso1.innerText = kevin;
perso2 = document.getElementById('perso2');
perso2.innerHTML = uluberlu ;