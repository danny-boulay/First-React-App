function CurrentMessage() {
    //Obtient la date de l'utilisateur
    const day = new Date().getDay();
    
    //Renvoie le jour de la semaine sous forme de mot
    function dayOfWeekAsWord(day) {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[day];
    }

    //Appel de la fonction et stockage dans une variable
    const dayAsWord = dayOfWeekAsWord(day);

    //Ternary qui dit de travailler si c'est la semaine
    return (day <= 5 
        ? <p>work because it's {dayAsWord}</p> 
        : <p>stop working because it's {dayAsWord}</p>
    );
};

export default CurrentMessage;