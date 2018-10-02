const NewFruit = (props) => {

	let formFields = {}

	return(
		<form onSubmit={ (e) => { props.handleFormSubmit(formFields.name.value, formFields.description.value); e.target.reset(); }}>
			<input ref={input => formFields.name = input} placeholder="Input the name of the fruit."/>
			<input ref={input => formFields.description = input} placeholder="Input a description of the fruit."/>
			<button>Submit</button>
		</form>	
	)

}