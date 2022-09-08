function NewsFeedEntry(props){

    return <>
        <div style={{borderBottom:'5px solid black'}}>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
        
    </>

}

export default NewsFeedEntry;