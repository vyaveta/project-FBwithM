import moment from 'moment'
import Moment from 'react-moment'

export const calculateTime = createdAt => {
    const today = moment(Date.now())
    const postDate = moment(createdAt)
    const differenceInHours = today.diff(postDate,'hours')
    
    if(differenceInHours < 24) return <> Today <Moment format='hh:mm A' >{createdAt}</Moment> </>
    else if(differenceInHours > 24 && differenceInHours < 36) return <> Yesterday <Moment format='hh::mm a'>{createdAt}</Moment> </>
    else if(differenceInHours > 36) return <> <Moment format='DD/MM/YYYY hh:mm a'>{createdAt}</Moment>  </>
}