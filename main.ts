 let spacePlane = sprites.create(img`
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
     . . . . 2 . . . . . . . . . . .
     . . . . b b f . . . . . . . . .
     . . . . b b b b b b b b 2 2 . .
     . . . . b b b b b b b b b b b .
     . . . . b b b b b b b b b b f .
     . . . . . . b b b b . . . . . .
     . . . . . 2 b b 2 . . . . . . .
     . . . . . . 2 2 . . . . . . . .
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
 `);
spacePlane.setStayInScreen(true);
info.setLife(3);
controller.moveSprite(spacePlane,200,200);
