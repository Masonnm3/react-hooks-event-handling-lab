

function EyesOnMe (){


    const handleBlur = (event) =>
    {
        console.log('Hey! Eyes on me!')
    }
    const handleFocus =( event) =>
    {
        console.log('Good!')
    }
    
    return( 
        <>
       <div onFocus ={handleFocus} onBlur={handleBlur}>
            
        <button> Eyes on me </button>
        </div> 
        </>

)}










export default EyesOnMe