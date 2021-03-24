import * as routine from './routine.js'

const PROMPT=document.querySelector('#pdlock .prompt')
const BUTTONS=document.querySelector('#pdlock .buttons')
const SOLUTION='0131 4011 0513 4312'

// https://youtu.be/CMnjgB25m5s?t=257
export class PdLock extends routine.Routine{
  constructor(){
    super('pdlock')
    this.buttons=Array.from(this.view.querySelectorAll('.buttons button'))
    this.current=0
    this.prompt=true
    this.solution=Array.from(SOLUTION)
  }
  
  update(delta=false){
    if(this.prompt){
      PROMPT.classList.remove('hidden')
      BUTTONS.classList.add('hidden')
      return
    }
    BUTTONS.classList.remove('hidden')
    PROMPT.classList.add('hidden')
    if(delta){
      this.current+=delta
      if(this.current<0) this.current=this.buttons.length-1
      else if(this.current>=this.buttons.length) this.current=0
    }
    this.buttons[this.current].focus()
  }
  
  setup(){
    super.setup()
    this.current=0
    this.prompt=true
    this.solution=Array.from(SOLUTION)
    this.update()
  }
  
  wrong(){
    super.wrong()
    this.solution=false
  }
  
  enter(){
    if(!this.solution){
      this.setup()
      return
    }
    if(this.prompt){
      this.prompt=false
      //this.correct()
      this.update()
      return
    }
    let value=this.buttons[this.current].value
    let s=this.solution.shift()
    if(value!=s){
      this.wrong()
      return
    }
    if(this.solution.length==0){
      this.done()
      this.setup()
      return
    }
    this.correct()
    this.current=0
    if(s==' ') this.prompt=true
    this.update()
  }

  left(){this.update(-1)}
  right(){this.update(+1)}
}
