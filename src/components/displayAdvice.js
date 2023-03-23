const DisplayAdvice = (props) => {
    console.log(props)
    return (
        <div>
            <h4>advice #{props.data.slip.id}</h4>
            <h3>"{props.data.slip.advice}"</h3>
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        </div>
    )
}

export default DisplayAdvice
