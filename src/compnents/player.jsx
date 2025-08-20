import Card from 'react-bootstrap/Card';
import '../App.css'; // Ensure global styles are loaded

export default function All({ id, name, age, nationality, profilePic, imgeNatio, backround, team, imageteam }) {
    return (
        <div className="player-gold-bg">
            <Card className="player-card" style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '20px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
                padding: '1.5em',
                position: 'relative',
                backgroundImage: `url(${backround})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="player-header">
                    <span className="player-id">{id}</span>
                    <span className="player-name">{name}</span>
                </div>
                <div className="player-img-section">
                    <Card.Img src={profilePic} className="player-profile-pic" />
                </div>
                <div className="player-info">
                    <div className="player-age">Age: {age}</div>
                    <div className="player-nation">
                        <span>{nationality}</span>
                        <Card.Img src={imgeNatio} className="player-nation-img" />
                    </div>
                    <div className="player-team">
                        <span>{team}</span>
                        <Card.Img src={imageteam} className="player-team-img" />
                    </div>
                </div>
            </Card>
        </div>
    )
}