import React from "react"

function MainContent(){

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize:"30px"
    }

    if (hours<12){
        timeOfDay="Morning"
        styles.color = "Red"
    }
    else if(hours >12 && hours < 17){
        timeOfDay="Afternoon"
        styles.color="Orange"
    }
    else{
        timeOfDay="Night"
        styles.color="Red"
    }
    

    return (
        <div>
            <main>
                <h1 style={styles}>Harshit Kyal , Good {timeOfDay}</h1>
                <p>Hello , I am Mean Stack Developer</p>
                <input type="checkbox"/>Udaipur<br/>
                <input type="checkbox"/>Mumbai<br/>
                <input type="checkbox"/>Banglore
                {/* <input type="checkbox">Place Holder</input> */}
                {/* <ul>
                    <li>Udaipur</li>
                    <li>Banglore</li>
                    <li>Mumbai</li>
                </ul> */}
            </main>
          
        </div>
    )
}

export default MainContent