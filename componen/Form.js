const Button = () => {
    return (
         function Form () {
            function handleSubmit(e){
                e.preventDefault();
                console.log('you clicked submit.');
            }
            return (
                <form onSubmit={handleSubmit}>
                    <button type="submit"> submit </button>
                </form>
            )
         }
    )
}

export default Button