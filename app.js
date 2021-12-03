const personne = function (SonNom, SonPrenom, SonAge, SonSexe, SonJob) {
    this.nom = SonNom ;
    this.prenom = SonPrenom ;
    this.age = SonAge ;
    this.sexe = SonSexe ;
    this.job = SonJob ;

    this.getNomPrenom= function (){
        return this.nom + " " + this.prenom + " " + this.age+ " " + this.sexe ;
    }

    this.changeElement = function (newAge, newSexe){
        this.age = newAge;
        this.sexe = newSexe;

    }

}



let kevin = new personne ('Mura', 'kevin', 28, 'masculin', 'eleve a UPTO');
document.getElementById('propriete1').innerHTML= kevin.nom;
document.getElementById('propriete2').innerHTML= kevin.prenom;
document.getElementById('propriete3').innerHTML= kevin.age;
document.getElementById('propriete4').innerHTML= kevin.sexe;
document.getElementById('propriete5').innerHTML= kevin.job;
document.getElementById('method1').innerHTML= kevin.getNomPrenom();
kevin.changeElement(60, 'feminim');
document.getElementById('method2').innerHTML = kevin.getNomPrenom();

let uluberlu = new personne ('Ulu', 'berlu', 50, 'feminin', 'police');
document.getElementById('propriete6').innerHTML=  uluberlu.nom;
document.getElementById('propriete7').innerHTML=  uluberlu.prenom;
document.getElementById('propriete8').innerHTML=  uluberlu.age;
document.getElementById('propriete9').innerHTML=  uluberlu.sexe;
document.getElementById('propriete10').innerHTML= uluberlu.job;
document.getElementById('method3').innerHTML= uluberlu.getNomPrenom();
uluberlu.changeElement(60, 'feminim');
document.getElementById('method4').innerHTML = uluberlu.getNomPrenom();
