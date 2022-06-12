import Email from '../../components/Email';

function InviteAttendees(props){
    return(
        <>
        <Email eventId={props.eventId} token={props.token} />
        </>
    )

}
export default InviteAttendees