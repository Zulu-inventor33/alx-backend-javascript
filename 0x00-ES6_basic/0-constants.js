// Function using const
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Helper function to return a string
export function getLast() {
  return ' is okay';
}

// Function using let
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast(); // Reassigning 'combination'

  return combination;
}

