export default function ArchiveLayout (children) {

    return (
        <div>
            <h1>News Archive</h1>
            <section id='archive-filter'>{children.archive}</section>
            <section id='archive-latest'>{children.latest}</section>
        </div>
    )

}