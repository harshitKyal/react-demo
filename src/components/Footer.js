import React from "react"

function Footer(){
    const styles = {
        color:"orange",
        backgroundColor:"black",
        textAlign : "center",
        fontSize:30
    }
    return (
        <footer >
            <h3 style={styles}> This is my Footer</h3>
        </footer>
    )
}

export default Footer