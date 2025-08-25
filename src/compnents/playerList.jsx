
import { Card } from 'react-bootstrap';
import Players from '../Players';
import CardGroup from 'react-bootstrap/CardGroup';
import All from './Player';
function PlayerList() {


    return (
        <>
        <h1>TOP 3 Ballon d'or Winner 2025</h1>
            <CardGroup>
                
                {Players.map(a => (
                    <div>
                        <All id={a.id} name={a.name} age={a.age} location={a.nationality} profilePic={a.profilePic} imgeNatio={a.imgeNatio} backround={a.backround} team={a.team} imageteam={a.imageteam} />
                    </div>
                ))}
            </CardGroup>

        </>
    )
}

export default PlayerList