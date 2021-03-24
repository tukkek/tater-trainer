import * as stopwatch from './stopwatch.js'
import * as pdlock from './routine/pdlock.js'

var routine=new pdlock.PdLock()

stopwatch.setup()
routine.setup()

window.onkeydown=(e)=>{
  let k=e.key
  if(k=='Enter') routine.enter()
  else if(k=='ArrowLeft'||k=='4') routine.left()
  else if(k=='ArrowRight'||k=='6') routine.right()
  else if(k=='ArrowUp'||k=='8') routine.up()
  else if(k=='ArrowDown'||k=='2') routine.down()
}
