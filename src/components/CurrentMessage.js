function CurrentMessage() {
    const day = new Date().getDay();
    
    function dayOfWeekAsWord(day) {
        // Renvoie le jour de la semaine sous forme de mot
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[day];
    }

    const dayAsWord = dayOfWeekAsWord(day);
    return (day <= 5 
        ? <p>work because it's {dayAsWord}</p> 
        : <p>stop working</p>
    );
};

export default CurrentMessage;