function display()
{
    let age = document.getElementById("age").value;
    if (age >= 18)
    {
      alert("Vous êtes majeur");
    }
    else
    {
      alert("Vous êtes mineur");
    }
}
// Ajout de condition : Si l'âge indiqué est supérieur ou égal à 18, alors la boite de dialogue indique "vous êtes majeurs"
// a l'inverse, elle indiquera "Vous êtes mineur" si l'âge indiqué est inférieur à 18.
