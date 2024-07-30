import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';
import './demo.css'

const BOXELEMENT = [
  '🍏 Apple',
  '🍌 Banana',
  '🍍 Pineapple',
  '🥥 Coconut',
  '🍉 Watermelon',
];

function renderItem({ item, handleRemoveCard }) {
  return (
    <div className="courseconttile">
      <ListItemText primary={item} />
      <IconButton
        edge="end"
        aria-label="delete"
        title="Delete"
        onClick={() => handleRemoveCard(item)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default function TransitionGroupExample() {
  const [cardInBox, setCardInBox] = React.useState([]);

  const handleAddCard = () => {
    const nextHiddenItem = BOXELEMENT.find((i) => !cardInBox.includes(i));
    if (nextHiddenItem) {
      setCardInBox((prev) => [...prev, nextHiddenItem]);
    }
  };

  const handleRemoveCard = (item) => {
    setCardInBox((prev) => prev.filter((i) => i !== item));
  };

  const addCardButton = (
    <Button
      variant="contained"
      disabled={cardInBox.length >= BOXELEMENT.length}
      onClick={handleAddCard}
    >
      Add Box
    </Button>
  );

  return (
    <div>
      {addCardButton}
      <Box mt={1}>
        <List>
          <TransitionGroup>
            {cardInBox.map((item, index) => (
              <Collapse key={index}>
                {renderItem({ item, handleRemoveCard })}
              </Collapse>
            ))}
          </TransitionGroup>
        </List>
      </Box>
    </div>
  );
}
