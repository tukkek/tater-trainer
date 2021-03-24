import * as stopwatch from '../stopwatch.js'

export class Routine{
  constructor(id){
    this.view=document.querySelector('#'+id)
  }
  
  setup(){
    for(let r of document.querySelectorAll('.routine'))
      r.classList.add('hidden')
    this.view.classList.remove('hidden')
    this.start()
  }
  
  start(){stopwatch.start()}
  lap(){stopwatch.lap()}
  stop(){stopwatch.stop()}
  left(){return}
  right(){return}
  up(){return}
  down(){return}
  enter(){return}
  
  correct(){new Audio('./sound/right.wav').play()}
 
 wrong(){
    this.stop()
    stopwatch.resetstreak()
    new Audio('./sound/wrong.wav').play()
  }
  
  done(){
    this.lap()
    stopwatch.addstreak()
    new Audio('./sound/done.wav').play()
  }
}
