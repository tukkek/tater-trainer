const VIEW=document.querySelector('#stopwatch')
const LAP=VIEW.querySelector('template.lap').content.childNodes[0]
const LAPS=VIEW.querySelector('#laps')
const STREAK=VIEW.querySelector('.streak span')
const TICK=50

var timer=false
var time=false
var streak=0

function addlap(time=0){
  let l=LAP.cloneNode(true)
  l.innerHTML=format(time)
  if(timer) LAPS.insertBefore(l,LAPS.childNodes[1])
  else LAPS.appendChild(l)
  return l
}

function format(ellapsed){
  let seconds=ellapsed/1000
  let minutes=new String(Math.round(Math.floor(seconds/60))).padStart(2,'0')
  seconds=new String(Math.round(seconds%60)).padStart(2,'0')
  let ms=new String(Math.round(ellapsed%1000)).padEnd(3,'0')
  return `${minutes}:${seconds}.${ms}`
}

export function setup(){
  timer=addlap()
  timer.id='timer'
}

function tick(){
  if(!time) return
  timer.innerHTML=format(Date.now()-time)
}

export function start(){
  if(time) return
  time=Date.now()
  for(let l of Array.from(LAPS.childNodes).slice(1)) l.remove()
}

export function lap(){
  if(!time) start()
  addlap(Date.now()-time)
}

export function stop(){
  time=false
}

export function bump(){
  streak+=1
  STREAK.innerHTML=streak
}

setInterval(tick,TICK)
document.querySelector('button#start').onclick=start
document.querySelector('button#lap').onclick=lap
document.querySelector('button#stop').onclick=stop
