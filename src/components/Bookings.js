import React, {useState} from "react";
function Bookings() {
    const[input, setInput] = useState({
        cardetails: '',
        ownername: ''
    })

    function handleChange(event){
        const {name,value} =event.target;
        setInput(prevInput =>{
            return{
                ...prevInput,
                [name]:value
            }
            
            
       })
    }
function handleClick(event){
    event.preventDefault()
    console.log(input);
}
    return <div className ='container'>
        <h1>Bookings Page</h1>
        <form>
            <div className ='form-group'>

            <textarea onChange = {handleChange} name = "cardetails" value = {input.cardetails} autoComplete = "off" className = 'form-control' placeholder ="cardetails"></textarea>
                

            </div>
            <div className ='form-group'>
<textarea onChange = {handleChange} name = "ownername" value = {input.owmername} autoComplete = "off" className = 'form-control' placeholder="ownername"></textarea>
</div>
<button onClick  = {handleClick} classname = "btn btn-lg btn-info">Ok</button>


        </form>







    </div>
}
export default Bookings;