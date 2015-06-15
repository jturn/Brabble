Outline

Basic logic:
  
  Draw game board (4 x 4)
  Populate player board(footer) with 16 random letters
  On 'start' button click, start timer
  At end of timer, alert score



  // Page layout

    // Game board - 4 x 4 grid
    // **Make grid indexable
    // Timer div at top of page
    // Start button at top of page
    // Player row at bottom of page to hold letters - div
    // Create tiles (square div containing one letter)


  Letter tiles

    Use alphabet array to give each tile a random letter
    Set ratio of vowels to consonants
    Store letter as variable on tile
    Make tiles draggable
    Make tiles stick to gameboard

  Game board

    Give each square a searchable index
    When a tile is added to a square, give that square the tiles letter value

  Game logic
    
    On 'start' button click, reset game board, add new tiles, and start timer
    On timer end, run word counter function
    After counter finishes, alert score

  Counter function

  On game end, populate an array with every word combination (20 for 4x4)
  Check each combination against Scra



    




