'use client'

export default function FilterError (props) {
    return (
        <div id='error' >
            <h2>An Error Occured!!</h2>
            <p>{props.error.message}</p>
        </div>
    )
}