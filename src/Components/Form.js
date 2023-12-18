

const Form = (props) =>{
    
    return(
        <form onSubmit={props.handleSubmit}>
            <div className="player1">
            <label>Player1:
            <input 
            type="text"
            name="player1"
            value={props.formData.player1}
            onChange={props.handleInputChange} />
            </label>
            </div>
            <br />
            <div className="player2">
                <label>Player2: 
                    <input
                    type="text"
                    name="player2"
                    value={props.formData.player2}
                    onChange={props.handleInputChange} />
                </label>
            </div>
            <br />
            <p className="player">Player 1 :{props.userFormData.player1}</p>
            <p className="player">Player 2 :{props.userFormData.player2}</p>
            <button className="submitButton" type="submit"> submit</button>

            </form>
    )
}







export default Form