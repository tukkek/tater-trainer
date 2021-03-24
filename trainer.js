import * as stopwatch from './stopwatch.js'
import * as pdlock from './routine/pdlock.js'

var routine=new pdlock.PdLock()

stopwatch.setup()
routine.setup()

window.onkeydown=(e)=>{
  let k=e.key
  if(k=='Enter'||k=='f') routine.enter()
  else if(k=='ArrowLeft'||k=='4'||k=='a') routine.left()
  else if(k=='ArrowRight'||k=='6'||k=='d') routine.right()
  else if(k=='ArrowUp'||k=='8'||k=='w') routine.up()
  else if(k=='ArrowDown'||k=='2'||k=='s') routine.down()
}
