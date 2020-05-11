import React from "react";
import "./verse.css";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

var Verse = (props) => {
  return (
    <Container>
    <CssBaseline />
    <Card>
    <img
        src={`http://api.mp3quran.net/ayah_image/${props.surah_number}${props.verse_number}.png`}
        id="verseImg"
      />
       <Typography >{props.translatedVerses}</Typography>
       <Button variant='outlined' color='secondary' onClick={props.playAudio}>
            <Typography >
                  Play Audio
            </Typography>
        <audio className="verse-audio">
          <source
            src={`https://verse.mp3quran.net/arabic/ibrahim_alakhdar/32/${props.surah_number}${props.verse_number}.mp3`}></source>
        </audio>
      </Button>
      <Button variant='outlined' color='secondary'
        id={props.verse_id}
        onClick={props.addToFavoris}
        disabled={props.disabled}>
        <img
          src="https://image.flaticon.com/icons/svg/148/148839.svg"
          className="starIcon"
          id={props.verse_id}
        />
      </Button>
      </Card>
      </Container>
  );
};

export default Verse;
